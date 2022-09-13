import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full h-auto bg-slate-700 grid grid-row-3 sm:grid-cols-3 text-white">
      <div className="border-2 border-slate-800 flex flex-col justify-center items-center">
        <Link href="https://github.com/PathonScript/computer-media">
          <a target="_blank" className="text-2xl content">
            📝 Source Code
          </a>
        </Link>
      </div>
      <div className="border-2 border-slate-800 flex flex-col justify-center items-center">
        <h1 className="text-2xl content">Made with ☕ by Patato, PK, Atom</h1>
      </div>
      <div className="border-2 border-slate-800 flex flex-col justify-center items-center">
        <h1 className="text-2xl content">Work in Progress🛠️</h1>
      </div>
    </div>
  );
}

export default Footer;
