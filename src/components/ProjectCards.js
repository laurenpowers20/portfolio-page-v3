import food from "../assets/foodathome.png";
import trivia from "../assets/trivia.png";
import shill from "../assets/shill.png";
import Image from "next/image.js";
import { container, item } from "../../animation.js";
import { motion as m } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

export default function ProjectCards() {
  return (
    <>
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-5"
      >
        {/* project 1 */}
        <m.div
          variants={item}
          className="max-w-sm rounded overflow-hidden bg-black shadow-black shadow-lg w-full"
        >
          <Image
            src={food}
            alt="We Got Food at Home Logo"
            width={120}
            height={120}
            className="mx-auto mt-8 rounded-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-neonBlue-500 text-xl text-center mb-2">
              We Got Food At Home
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <a
                href="https://github.com/laurenpowers20/we-got-food-at-home"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <span className="inline-flex bg-neonYellow-500 hover:bg-neonPink-500 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 items-center">
                  <FaGithub className="mr-2" /> GitHub
                </span>
              </a>
              <a
                href="https://we-got-food-at-home.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <span className="inline-flex bg-neonYellow-500 hover:bg-neonPink-500 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 items-center">
                  <BsGlobe className="mr-2" />
                  Demo
                </span>
              </a>
            </div>
            <p className=" text-neonBlue-500 text-base">
              Worked in a cross-functional team of UX designers and software
              engineers and pitched to a panel of industry experts. We created a
              gamification app that incentivizes users to cook at home instead
              of ordering out.
              <p className="pt-2">
                The app rewards users with points and badges when they prepare
                meals at home. Users can input ingredients they have on hand and
                generate a recipe using OpenAI.
              </p>
              <p className="text-neonBlue-500  pt-5">Technologies used:</p>
              <ul className="text-neonBlue-500 text-base p-5">
                <li>- React</li>
                <li>- OpenAI API</li>
                <li>- Firebase</li>
              </ul>
            </p>
          </div>
        </m.div>
        {/* project 2 */}
        <m.div
          variants={item}
          className="max-w-sm rounded overflow-hidden bg-black shadow-black shadow-lg"
        >
          <Image
            src={trivia}
            alt="Game of Trivia Logo"
            width={120}
            height={120}
            className="mx-auto mt-8 rounded-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-neonBlue-500 text-xl text-center mb-2">
              Game of Trivia
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <a
                href="https://github.com/laurenpowers20/trivia"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <span className="inline-flex bg-neonYellow-500 hover:bg-neonPink-500 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 items-center">
                  <FaGithub className="mr-2" /> GitHub
                </span>
              </a>
              <a
                href="https://triviagame1022.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <span className="inline-flex bg-neonYellow-500 hover:bg-neonPink-500 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 items-center">
                  <BsGlobe className="mr-2" />
                  Demo
                </span>
              </a>
            </div>
            <p className=" text-neonBlue-500 ">
              A multiple-choice game of trivia and an example of my skills
              without libraries or frameworks Styled with CSS to lay out an
              appealing “bar trivia” theme and design.
            </p>
            <p className="text-neonBlue-500  pt-5">Technologies used: </p>
            <ul className="text-neonBlue-500 text-base p-5">
              <li>- HTML</li>
              <li>- CSS</li>
              <li>- JavaScript</li>
            </ul>
          </div>
        </m.div>
        {/* project 3 */}
        <m.div
          variants={item}
          className="max-w-sm rounded overflow-hidden bg-black shadow-black shadow-lg"
        >
          <Image
            src={shill}
            alt="Shill Social Logo"
            width={120}
            height={120}
            className="mx-auto mt-8 rounded-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-neonBlue-500 text-xl text-center mb-2">
              $hill Social
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <a
                href="https://github.com/SEI-Buffleheads/twitter-clone-frontend"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <span className="inline-flex bg-neonYellow-500 hover:bg-neonPink-500 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 items-center">
                  <FaGithub className="mr-2" /> GitHub
                </span>
              </a>
              <a
                href="https://shill-social.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <span className="inline-flex bg-neonYellow-500 hover:bg-neonPink-500 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 items-center">
                  <BsGlobe className="mr-2" />
                  Demo
                </span>
              </a>
            </div>
            <p className=" text-neonBlue-500 text-base">
              A social media network for those who want to share their financial
              goals, give advice, and discuss trends. Acted as SCRUM master
              collaborating with 10 developers to create a full-stack web
              application. Utilized GitHub Projects, Canva, and Figma to execute
              deadlines, wireframing, and team expectations.
            </p>
            <p className="text-neonBlue-500  pt-5">Technologies used:</p>
            <ul className="text-neonBlue-500 text-base p-5">
              <li>- React</li>
              <li>- Tailwind.css</li>
              <li>- Python</li>
              <li>- Django</li>
            </ul>
          </div>
        </m.div>
      </m.div>
    </>
  );
}
