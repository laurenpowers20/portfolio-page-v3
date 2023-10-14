import { motion as m } from "framer-motion";
import AboutCard from "@component/components/AboutCard.js";

export default function About(props) {
  return (
    <>
      <m.main
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        initial={{ y: "100%" }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="text-neonPink-500 absolute top-0 left-0 w-full h-full bg-black lg:px-48 px-10 overflow-y-auto col-span-2"
      >
        <div className="my-32 mb-8 p-1 overflow-hidden">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="lg:text-8xl text-5xl lg:text-left text-left flex"
          >
            About{" "}
          </m.h1>
        </div>

        <AboutCard className="about" />
      </m.main>
    </>
  );
}
