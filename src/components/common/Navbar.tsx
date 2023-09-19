"use client";
import Link from "next/link";
import {
  Bars3Icon,
  AcademicCapIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const handleScrollToTarget = (targetId: string) => {
    setNavbar(false); // Close the navbar if mobile
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Scroll to the target element with a smooth animation
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav className="w-full bg-secondary_lightgray md:bg-primary_darkblue fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-primary_darkblue md:text-secondary_lightgray font-bold">
                  LOGO
                </h2>
              </Link>

              {/*Bars Menu Botton*/}
              <div className="md:hidden">
                <button className="p-2" onClick={() => setNavbar(!navbar)}>
                  <Bars3Icon className="h-10 w-10 text-primary-darkblue" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
                navbar ? "md:p-0 block" : "hidden"
              }`}
            >
              <ul className="md:h-auto items-center justify-center md:flex">
                <li className="h-12 navbar_item md:px-6">
                  <Link
                    href="#About"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollToTarget("About");
                    }}
                  >
                    <div className="flex gap-2">
                      {navbar && window.innerWidth < 768 ? (
                        <UserIcon className="ml-5 w-7 h-7" />
                      ) : null}
                      <span>About</span>
                    </div>
                  </Link>
                </li>

                <li className="h-12 navbar_item md:px-6 md:text-center">
                  <Link
                    href="#Experience"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollToTarget("Experience");
                    }}
                  >
                    <div className="flex gap-2">
                      {navbar && window.innerWidth < 768 ? (
                        <AcademicCapIcon className="ml-5 w-7 h-7 " />
                      ) : null}
                      <span>Experience</span>
                    </div>
                  </Link>
                </li>

                <li className="h-12 navbar_item md:px-6 md:text-center">
                  <Link
                    href="#Contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollToTarget("Contact");
                    }}
                  >
                    <div className="flex gap-2">
                      {navbar && window.innerWidth < 768 ? (
                        <ChatBubbleLeftRightIcon className="ml-5 w-7 h-7" />
                      ) : null}
                      <span>Contact</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
