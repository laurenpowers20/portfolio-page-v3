import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

export default function NavBar() {
  // toggle hamburger menu on click
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <nav className="text-2xl text-neonYellow-500 font-medium z-20 relative">
        <ul className="flex gap-10">
          <Link href={"/"}>
            <li className="hover:text-white">Home</li>
          </Link>
          <Link href={"/projects"}>
            <li className="hover:text-white">Projects</li>
          </Link>
          <Link href={"/contact"}>
            <li className="hover:text-white">Contact</li>
          </Link>
          <Link href={"/about"}>
            <li className="hover:text-white">About</li>
          </Link>
        </ul>
      </nav>
      {/* hamburger */}
      <div
        onClick={handleClick}
        className="sm:hidden z-20 absolute text-neonYellow-500 text-2xl hover:text-white "
      >
        {!nav ? <FaBars className="z-20" /> : <FaTimes className="z-20" />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute z-20 top-0 left-0 w-full h-screen bg-black text-neonYellow-500 flex flex-col justify-center items-center "
        }
      >
        {" "}
        <Link onClick={handleClick} href={"/"}>
          <li className="hover:text-white py-6 text-2xl">Home</li>
        </Link>
        <Link onClick={handleClick} href={"/projects"}>
          <li className="hover:text-white py-6 text-2xl">Projects</li>
        </Link>
        <Link onClick={handleClick} href={"/contact"}>
          <li className="hover:text-white py-6 text-2xl">Contact</li>
        </Link>
        <Link onClick={handleClick} href={"/about"}>
          <li className="hover:text-white py-6 text-2xl">About</li>
        </Link>
      </ul>
    </>
  );
}
