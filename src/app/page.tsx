import { Contact, Experience, AboutMe, Intro } from "@/components";
import Image from "next/image";

export default function Home() {

  return (
    <main className="overflow-x-hidden overflow-y-auto scrollbar-hide">
      {/*Intro Section*/}
      <div className="relative h-screen w-screen">
        <Intro />
      </div>

      {/*About Me Section*/}
      <div
        id="About"
        className="flex-col py-32 sm:py-0 flex_center h-full md:h-screen w-screen"
      >
        <div className="flex-row md:mb-10 md:mt-28">
          <h4 className="text-secondary_darkgray font-oriya text-2xl text-center">
            Get To Know Me More
          </h4>
          <h1 className="text-secondary_lightgray font-oriya text-6xl text-center">
            About Me
          </h1>
        </div>
        <AboutMe />
      </div>

      {/*Experience Section*/}
      <div
        id="Experience"
        className="flex-col py-32 sm:py-0 flex_center h-full md:h-screen w-screen"
      >
        <div className="flex-row md:mb-24 md:mt-28">
          <h4 className="text-secondary_darkgray font-oriya text-2xl text-center">
            Explore My
          </h4>
          <h1 className="text-secondary_lightgray font-oriya text-6xl text-center">
            Experience
          </h1>
        </div>
        <Experience />
        <p className="text-secondary_darkgray font-oriya text-2xl text-center mt-20">
          And more
        </p>
      </div>

      {/*Contact Section*/}
      <div
        id="Contact"
        className="flex-col py-32 flex_center h-screen w-screen"
      >
        <div className="flex-row mb-28">
          <h4 className="text-secondary_darkgray font-oriya text-2xl text-center">
            Get in touch
          </h4>
          <h1 className="text-secondary_lightgray font-oriya text-6xl text-center">
            Contact Me
          </h1>
        </div>
        <Contact />
      </div>
    </main>
  );
}
