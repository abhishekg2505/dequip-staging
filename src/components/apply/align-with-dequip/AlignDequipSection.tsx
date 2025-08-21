"use client";

import type { FieldErrors } from "react-hook-form";
import { applyFormSchema, ApplyFormType } from "@/src/schema/applyFormSchema";

type Props = {
  register: any;
  errors: FieldErrors<ApplyFormType>;
};

export default function AlignDequipSection({ register, errors }: Props) {
  return (
    <section className="mt-20">
      <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
        <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
          Alignment With DeQUIP
        </span>
      </h2>
      <h5 className="text-left text-h5 font-montserrat font-medium mb-10">
        We&rsquo;re not here to incubate features. We&rsquo;re here to incubate infrastructure.
        DeQUIP stands for “Decentralized Quantum-uncrackable Infrastructure Protocol.”{" "}
      </h5>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="startupEmbody" className="text-h6 font-montserratfont-medium">
            What does that mission mean to you, and how does your startup embody it? Your answer
            here is important.
          </label>
          <input
            {...register("startupEmbody")}
            id="startupEmbody"
            placeholder="Startup Name here"
            className="input"
            type="text"
          />
        </div>
      </div>
    </section>
  );
}
