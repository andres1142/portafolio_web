'use client'
import React, { useEffect, useState } from 'react'
import MobileNavbar from './MobileNavbar'
import WebNavbar from './WebNavbar'



function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  {/*Checks the current width of the screen and either shows mobile or web navbar*/}
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth > 770 ? <WebNavbar /> : <MobileNavbar />}
    </div>
  );
}

export default Navbar