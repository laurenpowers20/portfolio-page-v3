import Head from "next/head";
import { motion as m } from "framer-motion";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { BsFillLightningFill } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  const d = new Date();

  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className=" text-neonBlue-500 absolute top-0 left-0 w-full h-full bg-black lg:px-48 px-16"
    >
      <Head>
        <title>Lauren Powers Portfolio</title>
        <meta
          name="description"
          content="Developer Portfolio for Lauren Powers"
        />
        <link rel="icon" href="/wand.png" />
        <link rel="apple-touch-icon" href="/wand.png" />
      </Head>
      <main>
        <div className="my-52 p-1 font-latoReg overflow-hidden ">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="lg:text-9xl text-6xl lg:text-left text-left flex"
          >
            Lauren Powers
          </m.h1>
          <h3 className=" my-10 lg:text-4xl text-2xl lg:text-left text-left text-neonPink-500">
            Web Developer | Software Engineer
          </h3>
          <Link href={"/projects"}>
            {" "}
            <div className="flex my-10 lg:text-6xl text-3xl lg:text-left text-center hover:text-neonPink-500 items-center">
              <h2>Explore Work</h2>
              <m.div
                animate={{ x: "50%" }}
                initial={{ x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {" "}
                <HiChevronDoubleRight className="lg:text-6xl text-3xl  lg:text-left text-left " />
              </m.div>
            </div>{" "}
          </Link>
        </div>
      </main>
    </m.div>
  );
}
