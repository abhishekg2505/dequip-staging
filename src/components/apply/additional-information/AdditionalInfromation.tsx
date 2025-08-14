import Image from "next/image";
import type { UseFormRegister, UseFormWatch, UseFormSetValue, FieldErrors } from "react-hook-form";
import type { formValues } from "../ApplyDequipForm"; // adjust the path

type Props = {
  register: UseFormRegister<formValues>;
  watch: UseFormWatch<formValues>;
  setValue: UseFormSetValue<formValues>;
  errors: FieldErrors<formValues>;
};
export default function AdditionalInformation({ register, watch, setValue, errors }: Props) {
  const deckFile = watch("deckFile")?.[0];
  const teamPhoto = watch("teamPhoto")?.[0];

  const renderUploadBox = (
    label: string,
    fieldName: "deckFile" | "teamPhoto",
    file: File | undefined
  ) => (
    <div>
      <label className="block text-h6 font-montserrat mb-[16px]">{label}</label>
      <label className="flex items-center justify-start px-5 w-full h-28 border-2 border-dashed border-gray-500 rounded-lg cursor-pointer bg-black/30 hover:bg-black/40 transition relative overflow-hidden">
        {file ? (
          <div className="text-center">
            {file.type.startsWith("image/") ? (
              <Image
                src={URL.createObjectURL(file)}
                alt="preview"
                fill
                className="max-h-20 mx-auto object-contain"
              />
            ) : (
              <p className="text-gray-300 text-sm">{file.name}</p>
            )}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setValue(fieldName, null as any);
              }}
              className="mt-2 px-3 py-1 text-xs bg-red-600 hover:bg-red-700 text-white rounded"
            >
              Remove
            </button>
          </div>
        ) : (
          <span className="text-p2 font-open-sans">
            Click to browse or <br /> drag and drop your files
          </span>
        )}
        <input type="file" className="hidden" {...register(fieldName)} />
      </label>
      {errors[fieldName] && <p className="text-red-500 text-sm">{errors[fieldName]?.message}</p>}
    </div>
  );

  return (
    <section>
      <h2>Additional Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderUploadBox("Upload your deck or 1-pager", "deckFile", deckFile)}
        {renderUploadBox("Upload a team photo", "teamPhoto", teamPhoto)}
      </div>
    </section>
  );
}
