import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full h-16 bg-slate-700 grid grid-cols-3 text-white">
      <div className="flex flex-col justify-center items-center">
        <Link href="https://github.com/PathonScript/computer-media">
          <a target="_blank" className="text-2xl content">
            Source Code
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
