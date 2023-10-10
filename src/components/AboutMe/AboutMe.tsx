import SectionContainer from "@/components/common/SectionContainer";
import Image from "next/image";
import React from "react";

function AboutMe() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center mx-10 md:mx-48 font-oriya">
      {/* Image Container */}
      <Image
        src="/profile.JPG"
        alt="Profile"
        width={500}
        height={500}
        className="object-cover rounded-3xl h-7/12 w-7/12 md:h-5/12 md:w-5/12 lg:w-4/6 lg:h-4/6 mb-24 lg:mb-0 lg:mr-10"
      />

      <div>
        {/*Sections container*/}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center mb-5">
          {/* Section container: Experience */}
          <SectionContainer className="flex justify-center w-64 h-48 md:w-64 md:h-36">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/other/badge.svg"
                alt="Badge Image"
                width={25}
                height={25}
                className="object-scale-down"
              />
              <h3 className="text-secondary_lightgray text-2xl">Experience</h3>
              <h6 className="text-secondary_darkgray text-center">
                1+ Years <br />
                Software Developer
              </h6>
            </div>
          </SectionContainer>

          {/* Section container: Education*/}
          <SectionContainer className="flex justify-center w-64 h-48 md:w-64 md:h-36">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/other/book.svg"
                alt="Book Image"
                width={28}
                height={28}
                className="object-scale-down"
              />
              <h3 className="text-secondary_lightgray text-2xl">Education</h3>
              <h6 className="text-secondary_darkgray text-center">
                Computer Science <br />
                Brigham Young University
              </h6>
            </div>
          </SectionContainer>
        </div>

        {/*Text Container*/}
        <div className="text-secondary_darkgray text-xl mx-5 text-center mt-10 pt-5 lg:mt-0">
          I am a Colombian student currently at Brigham Young University. 
          With nearly two years of experience as a software developer, I am passionate 
          about creating and bringing ideas to life through code. My commitment to personal and 
          professional growth drives me to continually expand my skillset. Whether it's coding, problem-solving, 
          or staying up-to-date, I thrive on the opportunities to learn and apply my knowledge 
          in practical and creative ways.
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
