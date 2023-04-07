import { motion as m } from "framer-motion";
import { container, item } from "../../animation.js";
import headshot from "../assets/HeadShot.png";
import Image from "next/image.js";
import Link from "next/link";
import { GrDocumentText } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function AboutCard() {
  return (
    <div class="container mx-auto mb-10 my-10 rounded-lg">
      <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div class="max-h-96 md:h-screen">
          {" "}
          <m.div
            className="sm:flex sm:justify-center"
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Image
              src={headshot}
              alt="Picture of Lauren"
              width={220}
              height={220}
              className="rounded-full mx-auto mb-5"
            />
          </m.div>
        </div>
        <div class="flex bg-neonBlue-500 rounded text-black p-5">
          <div class="mb-auto mt-auto max-w-lg">
            <h1 class="text-3xl uppercase">Lauren Powers</h1>
            <p class="font-semibold mb-5">Software Engineer | Web Developer</p>

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
          </div>
        </div>
      </div>
    </div>
  );
}
