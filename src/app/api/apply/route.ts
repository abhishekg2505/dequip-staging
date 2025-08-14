// import clientPromise from "@/src/lib/mongodb";
// import { NextRequest, NextResponse } from "next/server";
// import { ObjectId } from "mongodb";
// import { IncomingForm } from "formidable";
// import fs from "fs";
// import cloudinary from "cloudinary";

// type Founder = {
//   fullName: string;
//   linkedIn: string;
//   role: string;
//   email: string;
//   timeZone?: string;
// };

// // Define the shape of your Apply data (extend as needed)
// interface ApplyData {
//   startupName: string;
//   // oneLinePitch: string;
//   // websiteURL: string;
//   // hqLocation: string;
//   // incorporation: string;
//   // timeZone: string;
//   // founder: Founder;
//   // coFounders: Founder[];
//   // fullTimeTeam: string;
//   // howToHear: string;
//   // projectUrls?: string[]; // Add any other fields if needed
//   deckFileUrl?: string; // Cloudinary URL for deckFile
//   teamPhotoUrl?: string; // Cloudinary URL for teamPhoto
// }

// // Define the database document structure
// interface ApplyDocument extends ApplyData {
//   _id?: ObjectId;
//   createdAt: Date;
//   updatedAt: Date;
// }

// // Configure Cloudinary
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
//   api_key: process.env.CLOUDINARY_API_KEY!,
//   api_secret: process.env.CLOUDINARY_API_SECRET!,
// });

// // Disable default body parser to use formidable
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export async function POST(request: NextRequest): Promise<NextResponse> {
//   try {
//     // Parse form data using formidable
//     const form = new IncomingForm({ multiples: true });

//     // Wrap formidable parse into a promise
//     const parsed = await new Promise<{ fields: any; files: any }>((resolve, reject) => {
//       form.parse(request as any, (err, fields, files) => {
//         if (err) reject(err);
//         else resolve({ fields, files });
//       });
//     });

//     const { fields, files } = parsed;

//     // Upload files to Cloudinary if present
//     const cloudinaryUploads: Partial<Pick<ApplyData, "deckFileUrl" | "teamPhotoUrl">> = {};

//     if (files.deckFile) {
//       console.log("Uploading deckFile");
//       const file = Array.isArray(files.deckFile) ? files.deckFile[0] : files.deckFile;
//       const uploadResult = await cloudinary.v2.uploader.upload(file.filepath, {
//         folder: "dequip/decks",
//       });
//       cloudinaryUploads.deckFileUrl = uploadResult.secure_url;
//       fs.unlinkSync(file.filepath); // Remove temp file
//       console.log("Uploaded deckFile URL:", cloudinaryUploads.deckFileUrl);
//     }

//     if (files.teamPhoto) {
//       console.log("Uploading teamPhoto");
//       const file = Array.isArray(files.teamPhoto) ? files.teamPhoto[0] : files.teamPhoto;
//       const uploadResult = await cloudinary.v2.uploader.upload(file.filepath, {
//         folder: "dequip/team_photos",
//       });
//       cloudinaryUploads.teamPhotoUrl = uploadResult.secure_url;
//       fs.unlinkSync(file.filepath);
//       console.log("Uploaded teamPhoto URL:", cloudinaryUploads.teamPhotoUrl);
//     }

//     // Combine fields + Cloudinary URLs
//     // Note: formidable fields are strings; parse JSON fields if you sent JSON strings for objects or arrays
//     let formData: ApplyData;

//     try {
//       formData = {
//         ...fields,
//         ...cloudinaryUploads,
//         // If coFounders or projectUrls are sent as JSON strings, parse them here
//         coFounders: fields.coFounders ? JSON.parse(fields.coFounders) : [],
//         projectUrls: fields.projectUrls ? JSON.parse(fields.projectUrls) : [],
//         founder: fields.founder ? JSON.parse(fields.founder) : {},
//       };
//     } catch (parseErr) {
//       // In case JSON parse fails, fallback to empty arrays or objects
//       formData = {
//         ...fields,
//         ...cloudinaryUploads,
//         coFounders: [],
//         projectUrls: [],
//         founder: {},
//       };
//     }

//     // Connect to MongoDB and insert
//     console.log("Connecting to DB");
//     const client = await clientPromise;
//     const db = client.db("dequip_apply_form");

//     const applyDocument: Omit<ApplyDocument, "_id"> = {
//       ...formData,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     };
//     console.log("Inserting document");
//     const result = await db.collection<ApplyDocument>("apply_form").insertOne(applyDocument);
//     console.log("Insert result", result);
//     return NextResponse.json(
//       {
//         success: true,
//         message: "Created successfully with Cloudinary uploads",
//         insertedId: result.insertedId,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Database/Cloudinary error:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to create",
//         error: error instanceof Error ? error.message : "Unknown error",
//       },
//       { status: 500 }
//     );
//   }
// }

import clientPromise from "@/src/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import cloudinary from "cloudinary";

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const form = await request.formData();

    // Get files
    const deckFile = form.get("deckFile") as File | null;
    const teamPhoto = form.get("teamPhoto") as File | null;

    // Prepare uploads
    let deckFileUrl: string | undefined = undefined;
    let teamPhotoUrl: string | undefined = undefined;

    // Upload deckFile
    if (deckFile) {
      const arrayBuffer = await deckFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      deckFileUrl = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          { folder: "dequip/decks" },
          (err, result) => {
            if (err || !result) reject(err);
            else resolve(result.secure_url);
          }
        );
        uploadStream.end(buffer);
      });
    }

    // Upload teamPhoto
    if (teamPhoto) {
      const arrayBuffer = await teamPhoto.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      teamPhotoUrl = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          { folder: "dequip/team_photos" },
          (err, result) => {
            if (err || !result) reject(err);
            else resolve(result.secure_url);
          }
        );
        uploadStream.end(buffer);
      });
    }

    // Parse fields (adjust according to your schema)
    const fields = Object.fromEntries(form.entries());

    // Parse JSON fields if needed (e.g. coFounders, founder, projectUrls)
    // If not present, fallback to empty/undefined as appropriate
    // Example (uncomment and modify as needed):
    // const founder = fields.founder ? JSON.parse(fields.founder) : {};
    // const coFounders = fields.coFounders ? JSON.parse(fields.coFounders) : [];
    // const projectUrls = fields.projectUrls ? JSON.parse(fields.projectUrls) : [];

    // Combine all data
    const formData = {
      ...fields,
      deckFileUrl,
      teamPhotoUrl,
      // founder,
      // coFounders,
      // projectUrls,
    };

    // Insert into MongoDB
    const client = await clientPromise;
    const db = client.db("dequip_apply_form");
    const applyDocument = {
      ...formData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const result = await db.collection("apply_form").insertOne(applyDocument);

    return NextResponse.json(
      {
        success: true,
        message: "Created successfully with Cloudinary uploads",
        insertedId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Database/Cloudinary error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create",
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
