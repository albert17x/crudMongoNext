import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items center bg-gradient-to-r from-indigo-700 via-sky-500 to-indigo-500 text-white px-8 py-3">
      <Link href={"/"}>
        <Image
          src="/log1.png"
          alt="Logo"
          width={50}
          height={17}
          priority
        />
      </Link>
      <Link
        href={"/create"}
        className="inline-flex items-center px-4 py-2 font-medium text-center text-white bg-slate-700 hover:bg-slate-900 rounded-lg"
      >
        Create
      </Link>
      {/* ------------------------------------------------------ */}
      <Link href={"/exemplo"}
        className="inline-flex items-center px-4 py-2 font-medium text-center text-white bg-slate-700 hover:bg-slate-900 rounded-lg" >
        Ejemplo

      </Link>

      <Link
        href={"/listagenda"}
        className="inline-flex items-center px-4 py-2 font-medium text-center text-white bg-slate-700 hover:bg-slate-900 rounded-lg"
      >
        AgendaList
      </Link>


      <Link href={"/listatask"}
        className="inline-flex items-center px-4 py-2 font-medium text-center text-white bg-slate-700 hover:bg-slate-900 rounded-lg" >
        TasksList
      </Link>


      <Link href={"/about"}
        className="inline-flex items-center px-4 py-2 font-medium text-center text-white bg-slate-700 hover:bg-slate-900 rounded-lg" >
        About
      </Link>

    </nav>
  );
};

export default Navbar;
