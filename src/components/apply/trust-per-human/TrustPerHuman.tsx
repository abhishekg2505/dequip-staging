"use client";

import Link from "next/link";
import { Button } from "../../ui/button";

export default function TrustPerHuman() {
  return (
    <section className="mt-20">
      <h2 className="text-left text-h4 md:text-h3 font-montserrat font-semibold mb-10">
        <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
          And finally… Trust Per Human (TPH)
        </span>
      </h2>
      <h5 className="text-h5 font-montserrat mb-10">
        At Quranium, trust is core. <br />
        We ask all applicants to take the TPH Assessment; a 2-minute framework, designed by
        Quranium&rsquo;s CEO Kapil Dhiman, to understand how you show up in the world.
      </h5>
      <h5 className="text-h5 font-montserrat">
        Trust Per Human provides us with your trust score, by considering your actions,
        communication, and consistency. We need you to a score over 80 in order to proceed with your
        application.
      </h5>
      <Link href="https://trustperhuman.com/" target="_blank">
        <Button type="button" variant="outline" className="group relative overflow-hidden">
          <span className="text-p2 font-montserrat bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_8.85%,_#FFFFFF_100%)] bg-clip-text text-transparent">
            Take the TPH Self-Assessment
          </span>
        </Button>
      </Link>
      <div className="grid grid-cols-1 gap-5 mb-10">
        <div className="flex flex-col gap-4 mt-10">
          <p className="text-h6 font-montserrat font-medium">
            One you have taken the TPH Self-Assessment
          </p>
          <div className="flex flex-col gap-[16px]">
            <label htmlFor="yourScore" className="text-[16px] font-montserrat font-medium">
              Enter your score
            </label>
            <input
              name="yourScore"
              id="yourScore"
              placeholder="Enter here"
              className="input"
              type="text"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
