import Image from "next/image";
import type { UseFormRegister, UseFormWatch, UseFormSetValue, FieldErrors } from "react-hook-form";
import { applyFormSchema, ApplyFormType } from "@/src/schema/applyFormSchema";

export default function AdditionalInformation() {
  return (
    <section>
      <h2>Additional Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
    </section>
  );
}
