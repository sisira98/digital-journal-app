import React from 'react';
import DashboardIcon from '../../assets/Dashboard.svg';
import JournalIcon from '../../assets/Journal.svg';
import EntryIcon from '../../assets/Entry.svg';
import AllEntryIcon from '../../assets/AllEntry.svg';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'

export const NavBar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed z inset-y-0 left-0 w-64 text-white bg-white transform transition-transform duration-300 ease-in-out rounded-r-[38px] opacity-100
    ${isOpen ? 'translate-x-0' : '-translate-x-full hidden'
      }`}
      onClick={toggleSidebar}
    >
      <div className="relative w-[190px] h-[293px] left-[66px] top-[148px] flex flex-col">
        <Link to={'/'}>
          <div className="w-[172px] h-[37px] flex gap-2 mb-8">
            <img src={DashboardIcon} alt="Dashboard" className="w-[28px] h-[27px]" />
            <h3 className="w-[172px] h-[37px] font-OPENSANS font-SMALL text-FONT_BLUE">Dashboard</h3>
          </div>
        </Link>
        <Link to={'/journal'}>
          <div className="w-[172px] h-[37px] flex gap-2 mb-8">
            <img src={JournalIcon} alt="Your Journal" className="w-[28px] h-[27px]" />
            <h3 className="w-[172px] h-[37px] font-OPENSANS font-SMALL text-FONT_BLUE">Your Journal</h3>
          </div>
        </Link>
        <Link to={'/your-entry'}>
          <div className="w-[172px] h-[37px] flex gap-2 mb-8">
            <img src={EntryIcon} alt="New Entry" className="w-[28px] h-[27px]" />
            <h3 className="w-[172px] h-[37px] font-OPENSANS font-SMALL text-FONT_BLUE">New Entry</h3>
          </div>
        </Link>
        <Link to={'/all-entry'}>
          <div className="w-[172px] h-[37px] flex gap-2 mb-8">
            <img src={AllEntryIcon} alt="All Entries" className="w-[28px] h-[27px]" />
            <h3 className="w-[172px] h-[37px] font-OPENSANS font-SMALL text-FONT_BLUE">All Entries</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
