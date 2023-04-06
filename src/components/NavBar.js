import Link from "next/link";

// import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      <nav className="text-2xl text-neonYellow-500 font-medium z-20 relative ">
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
    </>
  );
}
