"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slidebar from "./components/slidebar";
import Bottombar from "./components/bottombar";
import Mainuser from "./mainuser/page"; 
import Pickupuser from "./pickupuser/page"; 
import Notiuser from "./notiuser/page"; 
import Profile from "./profile/page";
import Mainpickup from "./mainpickup/page";


export default function Home() {
  const [selectedPage, setSelectedPage] = useState(1);

  const handleIconClick = (value: React.SetStateAction<number>) => {
    setSelectedPage(value);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case 1:
        return <Mainpickup />;
      case 2:
        return <Pickupuser />;
      case 3:
        return <Notiuser />;
      case 4:
        return <Profile />;
    }
  };

  return (
    <div className="font-custom">
         
      <div className="flex min-h-screen ">

        <div className="hidden md:flex flex-1 "> {/* Hide on mobile (small screens) and show on medium and larger screens */}
          <Slidebar onIconClick={handleIconClick} />
          <div className="flex-1 ">

            {renderPage()}
          </div>
        </div>
        <div className="flex md:hidden flex-1 "> {/* Show on mobile (small screens) and hide on medium and larger screens */}
          <div className="flex-1 flex">
            {renderPage()}
          </div>
        </div>
      </div>

      <div className="md:hidden"> {/* Show on mobile (small screens) and hide on medium and larger screens */}
        <Bottombar onIconClick={handleIconClick} />
      </div>


      
    </div>
    
  );
}
