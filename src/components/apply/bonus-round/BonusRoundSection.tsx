// // "use client";
// // import type { FieldErrors, Control } from "react-hook-form";
// // import { Button } from "@/src/components/ui/button";
// // import { formValues } from "../ApplyDequipForm";
// // type Props = {
// //   title: string;
// //   fields: { id: string }[];
// //   register: any;
// //   append: any;
// //   remove: any;
// //   name: "projectUrls";
// //   control: Control<formValues>;
// //   errors: FieldErrors<formValues>;
// //   disableAdd?: boolean;
// //   disableRemove?: boolean;
// // };
// // export default function BonusRoundSection({
// //   title,
// //   fields,
// //   register,
// //   append,
// //   remove,
// //   name,
// //   control,
// //   disableAdd,
// //   disableRemove,
// //   errors,
// // }: Props) {
// //   return (
// //     <>
// //       {fields.map((field, index) => (
// //         <div key={field.id} className="...">
// //           <div className="grid grid-cols-1 gap-5 mb-10">
// //             <div className="flex flex-col gap-[16px]">
// //               <input
// //                 {...register(`projectUrls.${index}` as const)}
// //                 placeholder="Enter url"
// //                 className="input"
// //                 type="text"
// //               />
// //               {errors.projectUrls?.[index] && (
// //                 <p className="text-red-500 text-sm">{errors.projectUrls[index]?.message}</p>
// //               )}
// //             </div>
// //           </div>

// //           <Button
// //             type="button"
// //             onClick={() => remove(index)}
// //             // variant="destructive"
// //             className="mt-2"
// //           >
// //             Remove
// //           </Button>
// //         </div>
// //       ))}

// //       <Button
// //         type="button"
// //         onClick={() => append("")}
// //         variant="outline"
// //         className="group relative overflow-hidden"
// //       >
// //         <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
// //           Add more links
// //         </span>
// //       </Button>
// //     </>
// //   );
// // }

// "use client";
// import { useEffect } from "react";
// import type { FieldErrors, Control } from "react-hook-form";
// import { Button } from "@/src/components/ui/button";
// import { formValues } from "../ApplyDequipForm";

// type Props = {
//   title: string;
//   fields: { id: string }[];
//   register: any;
//   append: any;
//   remove: any;
//   name: "projectUrls";
//   control: Control<formValues>;
//   errors: FieldErrors<formValues>;
//   disableAdd?: boolean;
//   disableRemove?: boolean;
// };

// export default function BonusRoundSection({
//   title,
//   fields,
//   register,
//   append,
//   remove,
//   name,
//   control,
//   disableAdd,
//   disableRemove,
//   errors,
// }: Props) {
//   // Ensure at least one field exists on mount
//   useEffect(() => {
//     if (fields.length === 0) {
//       append(""); // start with one empty string item
//     }
//   }, [fields, append]);

//   return (
//     <>
//       {fields.map((field, index) => (
//         <div key={field.id} className="...">
//           <div className="grid grid-cols-1 gap-5 mb-10">
//             <div className="flex flex-col gap-[16px]">
//               <input
//                 {...register(`projectUrls.${index}` as const)}
//                 placeholder="Enter url"
//                 className="input"
//                 type="text"
//               />
//               {errors.projectUrls?.[index]?.message && (
//                 <p className="text-red-500 text-sm">{errors.projectUrls[index]?.message}</p>
//               )}
//             </div>
//           </div>

//           {/* Only show remove button for index > 0 */}
//           {index > 0 && !disableRemove && (
//             <Button type="button" onClick={() => remove(index)} className="mt-2">
//               Remove
//             </Button>
//           )}
//         </div>
//       ))}

//       {!disableAdd && (
//         <Button
//           type="button"
//           onClick={() => append("")}
//           variant="outline"
//           className="group relative overflow-hidden"
//         >
//           <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
//             Add more links
//           </span>
//         </Button>
//       )}
//     </>
//   );
// }
