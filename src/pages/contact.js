import Link from "next/link";
import { motion as m } from "framer-motion";
import { container, item } from "../../animation.js";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

export default function Contact() {
  return (
    <m.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-neonBlue-500 lg:px-48 px-16 overflow-y-auto"
    >
      <div className="my-48 overflow-hidden ">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:text-8xl text-4xl lg:text-left"
        >
          Let's work together
        </m.h1>
        <m.h3
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:text-6xl text-3xl lg:text-left"
        >
          <a
            className="hover:text-neonPink-500 flex items-center"
            href="mailto:lauren.powers20@gmail.com"
          >
            {" "}
            <SiMinutemailer className="mr-3 items-center" /> e-mail me
          </a>
        </m.h3>
      </div>
      <div className="flex gap-x-20 mx-auto">
        <div className="lg:text-4xl text-2xl">
          <h4>Find me:</h4>
        </div>
        <div className="font-latoBold lg:text-4xl text-2xl ">
          <m.ul variants={container} initial="hidden" animate="show">
            <div>
              <m.li variants={item} className="pb-2">
                <Link
                  className="flex hover:text-neonPink-500"
                  href="https://github.com/laurenpowers20"
                >
                  <FaGithub alt="github" />
                  GitHub
                </Link>
              </m.li>
            </div>
            <div>
              <m.li variants={item} className="pb-2">
                <Link
                  className="flex hover:text-neonPink-500"
                  href="https://www.linkedin.com/in/lauren-powers20/"
                >
                  <FaLinkedin alt="linkedin" />
                  LinkedIn
                </Link>
              </m.li>
            </div>
          </m.ul>
        </div>
      </div>
    </m.main>
  );
}
