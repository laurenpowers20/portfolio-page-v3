import { motion as m } from "framer-motion";
import { container, item } from "../../animation.js";
import headshot from "../assets/HeadShot2.png";
import Image from "next/image.js";
import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHiking, GiScubaMask, GiCommercialAirplane } from "react-icons/gi";
import { TbBeach, TbChefHat } from "react-icons/tb";
import { HiOutlinePaintBrush } from "react-icons/hi2";

export default function AboutCard() {
  return (
    <div className="container mx-auto mb-10 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-1 h-screen">
        <div>
          {" "}
          <m.div
            className="sm:flex items-center sm:justify-center"
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.8, duration: 0.5 }}
          ></m.div>
        </div>

        <div className="flex items-center bg-neonBlue-500 rounded text-black sm:p-5 pb-100 mb-100 border-solid border-2 border-neonPink-500 max-w">
          <div className="mb-auto mt-auto ">
            <h1 className="text-3xl uppercase p-1 ">Lauren Powers</h1>
            <p className="font-semibold mb-2 p-1 ">
              Software Engineer | Web Developer
            </p>{" "}
            <div className="font-latoBold lg:text-2xl text-1xl p-1 mx-auto">
              <m.ul
                className="flex items-center"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <div>
                  <m.li variants={item} className="px-2">
                    <Link
                      className="flex items-center hover:text-neonPink-500"
                      href="https://drive.google.com/file/d/1OBUW7vUBJxx8ScbDuh8Vcu0IKqvMhkyH/view?usp=share_link"
                      rel="noreferrer"
                      alt="Resume for Lauren Powers"
                      target="_blank"
                    >
                      <IoDocumentText alt="resume" />
                      Resume
                    </Link>
                  </m.li>
                </div>
                <div>
                  <m.li variants={item} className="px-2">
                    <Link
                      className="flex  items-center hover:text-neonPink-500"
                      href="https://github.com/laurenpowers20"
                      target="_blank"
                      rel="noreferrer"
                      alt="GitHub page for Lauren Powers"
                    >
                      <FaGithub alt="github" />
                      GitHub
                    </Link>
                  </m.li>
                </div>
                <div>
                  <m.li variants={item} className="px-2">
                    <Link
                      className="flex items-center hover:text-neonPink-500"
                      href="https://www.linkedin.com/in/lauren-powers20/"
                      target="_blank"
                      rel="noreferrer"
                      alt="LinkedIn profile for Lauren Powers"
                    >
                      <FaLinkedin className="items-center" alt="linkedin" />
                      LinkedIn
                    </Link>
                  </m.li>
                </div>
              </m.ul>
            </div>
            <m.div
              variants={container}
              animate="show"
              className="font-latoBold"
            >
              {" "}
              <Image
                src={headshot}
                alt="Picture of Lauren"
                width={160}
                height={160}
                className="rounded-full mx-auto mr-2 border-solid border-2 border-neonYellow-500 float-left m-2 "
              />
              <p className="p-2">
                I have over 12 years of experience in financial operations at
                JPMorgan Chase & Co. where I held various titles, from Lead
                Associate Operations to Assistant Branch Manager. I managed,
                trained, and mentored teams of employees, ensured compliance and
                audit standards, and handled complex customer issues. I also
                collaborated with branch managers to direct sales and branch
                operations, increasing review scores and customer retention
                rates.
              </p>
              <p className="p-2">
                {" "}
                In 2022, I began to pursue my passion for building and hands-on
                work by enrolling in General Assembly's Software Engineering
                Immersive program. I learned React, JavaScript, Python, and
                other technologies to develop full-stack web applications. I
                also gained valuable problem-solving, debugging, and
                collaboration skills that enhanced my engineering mindset and
                portfolio.
              </p>
              <p className="p-2">
                I am motivated by challenges, learning, and making a positive
                change in the world. I enjoy working with diverse and passionate
                teams that share the same vision and values. I am always eager
                to expand my knowledge and skills and to apply them to
                meaningful projects that can benefit society and the
                environment.
              </p>
            </m.div>
            <p className="py-3  p-4">When I’m not coding, I can be found: </p>
            <ul className="pb-4   p-4">
              <li className="flex items-center">
                <GiHiking className="mr-3" /> Hiking in the Hudson Valley
              </li>
              <li className="flex items-center">
                {" "}
                <TbBeach className="mr-3" />
                At the beach (in winter and summer)
              </li>
              <li className="flex items-center">
                <GiCommercialAirplane className="mr-3" /> Traveling somewhere
                new{" "}
              </li>
              <li className="flex items-center">
                <GiScubaMask className="mr-3" /> Scuba diving
              </li>{" "}
              <li className="flex items-center">
                <HiOutlinePaintBrush className="mr-3" /> Doing something
                artistic
              </li>
              <li className="flex items-center">
                <TbChefHat className="mr-3" /> Cooking{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
