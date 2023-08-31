import React, { useEffect, useState } from 'react';
import MobileNavbar from './MobileNavbar';
import WebNavbar from './WebNavbar';

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div>
      {windowWidth > 770 ? <WebNavbar /> : <MobileNavbar />}
    </div>
  );
}

export default Navbar;
