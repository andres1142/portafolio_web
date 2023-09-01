import { Experience } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden overflow-y-auto scrollbar-hide">
      {/*Intro Section*/}
      <div className="relative h-screen w-screen">
        <Image
          src="/pattern.svg"
          alt="pattern image"
          fill
          priority
          className="object-cover opacity-60"
        />

        <div className="absolute info_container inset-x-0 flex_center flex-col">
          {/*Name and Role*/}
          <p className="text-secondary_lightgray name font-oriya">
            Andres Molina
          </p>
          <p className="text-secondary_darkgray name__role font-oriya">
            Software Developer
          </p>

          {/*Projects Botton -> Should Redirect to more projects*/}
          <button className="project_button border-solid border-2 border-comp_green rounded-xl">
            <p className="project_button__text text-comp_green-100 font-oriya">
              Projects
            </p>
          </button>
        </div>
      </div>

      <div
        id="Experience"
        className="flex-col py-32 sm:py-0 flex_center h-full sm:h-screen w-screen"
      >
        <div className="flex-row mb-28">
          <h4 className="text-secondary_darkgray font-oriya text-2xl text-center">
            Explore My
          </h4>
          <h1 className="text-secondary_lightgray font-oriya text-6xl text-center">
            Experience
          </h1>
        </div>
        <Experience />
      </div>
    </main>
  );
}
