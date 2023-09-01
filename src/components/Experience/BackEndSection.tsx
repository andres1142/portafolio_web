import React from "react";
import Image from "next/image";
import SectionContainer from "../common/SectionContainer";

function BackEndSection() {
  return (
    <SectionContainer sectionName="Backend Development">
      {/*SQL*/}
      <div className="logo_desc_container">
        <Image
          src="/logos/sql.svg"
          alt="SQL Logo"
          width={53}
          height={53}
          className="object-scale-down mr-3"
        />
        <div>
          <p className="text-secondary_lightgray-100 text-bold">SQL</p>
          <p className="text-secondary_darkgray">Basic</p>
        </div>
      </div>

      {/*Git*/}
      <div className="logo_desc_container">
        <Image
          src="/logos/git.svg"
          alt="GIt Logo"
          width={53}
          height={53}
          className="object-scale-down mr-3"
        />
        <div>
          <p className="text-secondary_lightgray-100 text-bold">Git</p>
          <p className="text-secondary_darkgray">Intermediate</p>
        </div>
      </div>

      {/*Node*/}
      <div className="logo_desc_container">
        <Image
          src="/logos/node.svg"
          alt="React Logo"
          width={53}
          height={53}
          className="object-scale-down mr-3"
        />
        <div>
          <p className="text-secondary_lightgray-100 text-bold">Node.js</p>
          <p className="text-secondary_darkgray">Intermediate</p>
        </div>
      </div>

      {/*Java*/}
      <div className="logo_desc_container">
        <Image
          src="/logos/java.svg"
          alt="React Logo"
          width={53}
          height={53}
          className="object-scale-down mr-3"
        />
        <div>
          <p className="text-secondary_lightgray-100 text-bold">Java</p>
          <p className="text-secondary_darkgray">Intermediate</p>
        </div>
      </div>

      {/*Express*/}
      <div className="logo_desc_container">
        <Image
          src="/logos/api.svg"
          alt="React Logo"
          width={53}
          height={53}
          className="object-scale-down mr-3"
        />
        <div>
          <p className="text-secondary_lightgray-100 text-bold">Express</p>
          <p className="text-secondary_darkgray">Basic</p>
        </div>
      </div>
    </SectionContainer>
  );
}

export default BackEndSection;
