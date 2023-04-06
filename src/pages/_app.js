import "../styles/globals.css";
import NavBar from "@component/components/NavBar";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="font-latoReg relative h-screen overflow-hidden py-24 px-12 lg:px-48">
      <NavBar />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
