import React from "react";
import NavBarIcon from '../../assets/NavBarIcon.svg'
import Eud from '../../assets/Eudaimonia.svg'
import profileIcon from '../../assets/ProfilePicIcon.svg'

export const Header = ({ toggleSidebar }) => {
  return (
    <div className=' relative flex items-center shadow-header_custom'>
      <div className="relative h-[81px] flex">
        <img className='relative w-[35px] h-[29px] top-[24px] left-[36px] cursor-pointer' src={NavBarIcon} onClick={toggleSidebar} />
        <img className='relative w-[216px] h-[51px] top-[13px] left-[612px]' src={Eud} />
        <img className='relative w-[60px] h-[57.27px] top-[13px] left-[1150px] rounded-full' src={profileIcon} />
      </div>
    </div>
  );
};
