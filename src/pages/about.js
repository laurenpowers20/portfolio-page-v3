import { motion as m } from "framer-motion";
import { container, item } from "../../animation.js";
import headshot from "../assets/HeadShot.png";
import Image from "next/image.js";

export default function About(props) {
  return (
    <m.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="text-neonPink-500 absolute top-0 left-0 w-full h-full bg-black lg:px-48 px-16 overflow-y-auto"
    >
      <div className="my-52 p-1 flex gap-40">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="lg:text-8xl text-6xl lg:text-left text-left text-neonPink-500"
        >
          About{" "}
          <Image
            src={headshot}
            alt="Picture of Lauren"
            width={210}
            height={210}
            className="rounded-full m-6"
          />
        </m.h1>

        <m.div
          variants={container}
          animate="show"
          className="font-latoBold lg:text-4xl text-2xl  "
        >
          <p>
            {" "}
            I am an engineer based in New York City. My professional background
            lies in financial operations, where I spent 12 years at JP Morgan
            Chase. During my tenure there, I steadily progressed within the firm
            and eventually became the assistant manager of one of its largest
            branches in NYC. However, when my time in banking came to an end, I
            saw an opportunity to pursue my passion for building and hands-on
            work. I'm one of those rare people who love putting Ikea furniture
            together and “figuring it all out!” I was inspired by my friends who
            had completed Software Engineering Immersive programs and were
            thriving in their roles. </p><p> In the summer of 2022, I began teaching
            myself JavaScript and coding simple projects.
         {" "}
          
            In September, I enrolled in General Assembly's Software Engineering
            Immersive program, where I worked on both front-end and back-end
            projects every week. Throughout this journey, I've embraced
            challenges and pushed myself beyond my comfort zone. It's been a
            wild ride, and I am confident in my abilities and excited to
            continue learning and growing in my career.
          </p>
        </m.div>
      </div>
    </m.main>
  );
}
