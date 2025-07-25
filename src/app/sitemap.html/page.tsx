import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="px-4 max-w-4xl mx-auto pt-[100px] md:pt-[150px] pb-[120px]">
      <h1 className="text-4xl mb-10">Sitemap</h1>
      <ul className="flex flex-col flex-center gap-5 flex-wrap">
        <li>
          <Link
            href="https://www.quantummindspodcast.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl mb-20"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="https://www.quantummindspodcast.com/about-kapil-dhiman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl mb-20"
          >
            About Kapil Dhiman
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default page;
