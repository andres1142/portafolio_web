import SectionContainer from "../common/SectionContainer";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function Contact() {
  return (
    <SectionContainer>
      <div className="md:flex md:gap-9">
        <div className="flex gap-3 items-center">
          <EnvelopeIcon className="h-10 w-10 text-comp_green" />
          <p className="text-secondary_lightgray-100 text-xl">
            andresmospina5@gmail.com
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <Image
            src="/logos/linkedin.svg"
            alt="LinkedIn Logo"
            height={50}
            width={50}
            className="h-10 w-10"
          />
          <a
            href="https://www.linkedin.com/in/andresmolina-cs/"
            target="_blank"
            className="text-secondary_lightgray-100 text-xl"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Contact;
