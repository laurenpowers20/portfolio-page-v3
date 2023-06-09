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
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="max-h-96 md:h-screen">
          {" "}
          <m.div
            className="sm:flex items-center sm:justify-center"
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Image
              src={headshot}
              alt="Picture of Lauren"
              width={220}
              height={220}
              className="rounded-full mx-auto mb-5 border-solid border-2 border-neonBlue-500 "
            />
          </m.div>
        </div>

        <div className="flex items-center bg-neonBlue-500 rounded text-black sm:p-5 pb-100 mb-100 border-solid border-2 border-neonPink-500">
          <div className="mb-auto mt-auto max-w-lg ">
            <h1 className="text-3xl uppercase">Lauren Powers</h1>
            <p className="font-semibold mb-2">
              Software Engineer | Web Developer
            </p>
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
              <p className="p-2">
                I am an engineer based in New York City. My professional
                background lies in financial operations, where I spent 12 years
                at JP Morgan Chase. During my tenure there, I steadily
                progressed within the firm and eventually became the assistant
                manager of one of its largest branches in NYC. However, when my
                time in banking came to an end, I saw an opportunity to pursue
                my passion for building and hands-on work. I'm one of those rare
                people who love putting Ikea furniture together and “figuring it
                all out!” I was inspired by my friends who had completed
                Software Engineering Immersive programs and were thriving in
                their roles.{" "}
              </p>
              <p className="p-2">
                {" "}
                In the summer of 2022, I began teaching myself JavaScript and
                coding simple projects. In September, I enrolled in General
                Assembly's Software Engineering Immersive program, where I
                worked on both front-end and back-end projects every week.
                Throughout this journey, I've embraced challenges and pushed
                myself beyond my comfort zone. It's been a wild ride, and I am
                confident in my abilities and excited to continue learning and
                growing in my career.
              </p>
            </m.div>
            <p className="py-3">When I’m not coding, I can be found: </p>
            <ul className="pb-10">
              <li className="flex items-center">
                <GiHiking className="mr-3" /> Hiking in the Hudson Valley
              </li>
              <li className="flex items-center">
                {" "}
                <TbBeach className="mr-3" />
                At the beach (in winter and summer!)
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
                <TbChefHat className="mr-3" /> Cooking something new and
                delicious!{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
