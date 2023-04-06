import ProjectCards from "@component/components/ProjectCards";
import { motion as m } from "framer-motion";

export default function Projects() {
  return (
    <m.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-neonPink-500 lg:px-28 px-16 overflow-y-auto"
    >
      <div className="my-32 mb-8 p-1 overflow-hidden ">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:text-8xl text-5xl lg:text-left text-left "
        >
          Projects
        </m.h1>
      </div>

      <ProjectCards />
    </m.main>
  );
}
