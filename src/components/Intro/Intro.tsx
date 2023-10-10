"use client"
import React from 'react'
import Image from 'next/image'

function handleDownloadResume() {
  window.open("/Andres Resume.pdf", "_blank");
}

function Intro() {
  return (
    <div>
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

        {/*Resume Botton*/}
        <button className="project_button border-solid border-2 border-comp_green rounded-xl"
        onClick={handleDownloadResume}>
          <p className="project_button__text text-comp_green-100 font-oriya">
            Resume
          </p>
        </button>
      </div>
    </div>

  )
}

export default Intro