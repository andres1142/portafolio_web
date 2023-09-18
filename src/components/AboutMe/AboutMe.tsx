import SectionContainer from '@/components/common/SectionContainer'
import Image from 'next/image'
import React from 'react'

function AboutMe() {
  return (
    <section>
      
      <div className='flex justify-center'>
          {/* Image Container */}
          <Image 
            src="/profile.JPG"
            alt="Profile"
            width={500}
            height={500}
            className="object-scale-down rounded-full h-7/12 w-7/12 md:w-1/2 md:h-1/2 "
          />
          
          <div>
            {/*Sections container*/}
            <div>
              {/* Section container */}
              
              {/* Section container */}
            </div>

             {/*Text Container*/}
            <div>

            </div>
          </div>
      </div>

      



    </section>
  )
}

export default AboutMe