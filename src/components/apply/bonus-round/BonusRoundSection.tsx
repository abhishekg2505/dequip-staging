"use client";
import { useEffect } from "react";
import type { FieldErrors, Control, UseFormRegister } from "react-hook-form";
import { Button } from "@/src/components/ui/button";
import { applyFormSchema, ApplyFormType } from "@/src/schema/applyFormSchema";

type Props = {
  title: string;
  fields: { id: string }[];
  register: UseFormRegister<ApplyFormType>;
  append: any;
  remove: any;
  name: "projectUrls";
  control: Control<ApplyFormType>;
  errors: FieldErrors<ApplyFormType>;
  disableAdd?: boolean;
  disableRemove?: boolean;
};

export default function BonusRoundSection({
  title,
  fields,
  register,
  append,
  remove,
  name,
  control,
  disableAdd,
  disableRemove,
  errors,
}: Props) {
  // Ensure at least one field exists on mount
  useEffect(() => {
    if (fields.length === 0) {
      append(""); // start with one empty string item
    }
  }, [fields, append]);

  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id} className="...">
          <div className="grid grid-cols-1 gap-5 mb-[16px]">
            <div className="flex flex-col gap-[16px]">
              <input
                {...register(`projectUrls.${index}.url` as const)}
                placeholder="Enter url"
                className="input"
                type="text"
              />
              {errors.projectUrls?.[index]?.url?.message && (
                <p className="text-red-500 text-sm">{errors.projectUrls[index]?.url?.message}</p>
              )}
              {/* Only show remove button for index > 0 */}
              {index > 0 && !disableRemove && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => remove(index)}
                  // variant="destructive"
                  className="w-fit mt-2 mb-10 group relative overflow-hidden"
                >
                  <span className="text-[12px] font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
                    Remove
                  </span>
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}

      {!disableAdd && (
        <Button
          type="button"
          onClick={() => append("")}
          variant="outline"
          className="group relative overflow-hidden mb-10"
        >
          <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent group-hover:bg-none group-hover:text-[#ffffff]">
            Add more links
          </span>
        </Button>
      )}
    </>
  );
}
