"use client";
import React, { useState } from "react";
import Slidebar from "./components/slidebar";
import Bottombar from "./components/bottombar";
import Mainuser from "./mainuser/page"; 
import Pickupuser from "./pickupuser/page"; 
import Notiuser from "./notiuser/page"; 
import Profile from "./profile/page";
import Mainpickup from "./mainpickup/page";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState(1);
  const [statusShow, setStatusShow] = useState(0);

  const handleIconClick = (value: React.SetStateAction<number>) => {
    setSelectedPage(value);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case 1:
        return statusShow === 1 ? <Mainuser /> : <Mainpickup />;
      case 2:
        return <Pickupuser />;
      case 3:
        return <Notiuser />;
      case 4:
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <div className="font-custom">
      <div className="flex min-h-screen">
        <div className="hidden md:flex flex-1">
          <Slidebar onIconClick={handleIconClick} />
          <div>
            <label htmlFor="statusShowDropdown">Show Status: </label>
            <select
              id="statusShowDropdown"
              value={statusShow}
              onChange={(e) => setStatusShow(Number(e.target.value))}
            >
              <option value={0}>ลูกค้า</option>
              <option value={1}>พนักงาน</option>
            </select>
          </div>
          <div className="flex-1">
            {renderPage()}
          </div>
        </div>
        <div className="flex md:hidden flex-1">
          <div className="flex-1 flex">
            {renderPage()}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Bottombar onIconClick={handleIconClick} />
      </div>
    </div>
  );
}
