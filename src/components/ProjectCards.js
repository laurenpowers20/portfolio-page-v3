import headshot from "../assets/HeadShot.png";
import Image from "next/image.js";

export default function ProjectCards() {
  return (
    // project 1
    <>
      <div className="flex flex-wrap">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src={headshot}
            alt="Picture of Lauren"
            width={210}
            height={210}
            className="rounded-full m-6"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">We Got Food At Home</div>
            <p class="text-gray-700 text-base">
              Worked in a cross-functional team of UX designers and software
              engineers and pitched to a panel of industry experts. We created a
              gamification app that incentivizes users to cook at home instead
              of ordering out. The app rewards users with points and badges when
              they prepare meals at home. Users can input ingredients they have
              on hand and generate a recipe using OpenAI.
         

            <p>Technologies used:</p>
            <ul>
              <li>
                React
              </li>
              <li>
                OpenAI API
              </li>
              <li>
                Firebase
              </li>
              </ul>
              </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              GitHub
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Live Site
            </span>
          
          </div>
        </div>
        {/* project 2 */}
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src={headshot}
            alt="Picture of Lauren"
            width={210}
            height={210}
            className="rounded-full m-6"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
