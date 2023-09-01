import SectionContainer from "./common/SectionContainer";
import Image from "next/image";
import React from "react";

function FrontEndSection() {
  return (
    <SectionContainer sectionName="Frontend Development">
      {/*Typescript*/}
      <div className="logo_desc_container">
        <Image
          src="/logos/ts.svg"
          alt="TypeScript Logo"
          width={53}
          height={53}
          className="object-scale-down mr-3"
        />
        <div>
          <p className="text-secondary_lightgray-100 text-bold">Typescript</p>
          <p className="text-secondary_darkgray">Intermediate</p>
        </div>
      </div>

      {/*React*/}
      <div className="logo_desc_container">
        <Image
          src="/logos/react.svg"
          alt="React Logo"
          width={53}
          height={53}
          className="object-scale-down mr-3"
        />
        <div>
          <p className="text-secondary_lightgray-100 text-bold">React</p>
          <p className="text-secondary_darkgray">Intermediate</p>
        </div>
      </div>

      {/*CSS*/}
      <div className="logo_desc_container">
        <Image
          src="/logos/css.svg"
          alt="React Logo"
          width={53}
          height={53}
          className="object-scale-down mr-3"
        />
        <div>
          <p className="text-secondary_lightgray-100 text-bold">CSS</p>
          <p className="text-secondary_darkgray">Basic</p>
        </div>
      </div>

      {/*HTML*/}
      <div className="logo_desc_container">
        <Image
          src="/logos/html.svg"
          alt="React Logo"
          width={53}
          height={53}
          className="object-scale-down mr-3"
        />
        <div>
          <p className="text-secondary_lightgray-100 text-bold">HTML</p>
          <p className="text-secondary_darkgray">Intermediate</p>
        </div>
      </div>

      {/*Tailwind*/}
      <div className="logo_desc_container">
        <Image
          src="/logos/tailwind.svg"
          alt="React Logo"
          width={53}
          height={53}
          className="object-scale-down mr-3"
        />
        <div>
          <p className="text-secondary_lightgray-100 text-bold">Tailwind</p>
          <p className="text-secondary_darkgray">Intermediate</p>
        </div>
      </div>
    </SectionContainer>
  );
}

export default FrontEndSection;
