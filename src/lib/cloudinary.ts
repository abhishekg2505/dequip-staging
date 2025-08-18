export async function uploadToCloudinary(file: File, folder: string) {
  const url = `https://api.cloudinary.com/v1_1/<your-cloud-name>/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "<your-upload-preset>");
  formData.append("folder", folder);

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Upload to Cloudinary failed");
  return await res.json(); // contains secure_url, etc.
}
