import React, { useEffect, useState } from "react";
import { Header } from "../Layout/Header";
import { NavBar } from "../Layout/NavBar";
import SearchIcon from '../../assets/SearchIcon.svg';
import DashboardIcon from '../../assets/Dashboard.svg';
import NewPostIcon from '../../assets/NewPost.svg';
import DashboardOneIconBlack from '../../assets/DashboradOneIconBlack.svg';
import DashboardIconBlack from '../../assets/DashboardIconBlack.svg';
import '../styles/Dashboard.css';
import { Link } from "react-router-dom";
import Line from '../../assets/Line.svg';
import JournalData from '../../assets/Journals.json';
import Clip from '../../assets/clip.svg';
import Rectangle from '../../assets/Rectangle.svg';
import { Entry } from "./Entry";

export const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isColorChanged, setColorChanged] = useState(false);
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [journal, setJournal] = useState([]);
  useEffect(() => {
    setEntries(JournalData);
  }, []);

  const handleClick = () => {
    setColorChanged(!isColorChanged);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  return (
    <div className={`${isSidebarOpen ? 'bg-[#8D8C8E]' : ''} h-[56.5rem]`}>
      <NavBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`${isSidebarOpen ? 'bg-[#8D8C8E]' : ''} `}>
        <Header toggleSidebar={toggleSidebar} />
        <div className={` ${isSidebarOpen ? ' opacity-40' : ''} relative flex items-center shadow-search-custom justify-between h-[61px]`}>
          <div className={`  ${isSidebarOpen ? ' opacity-40' : ''} relative flex items-center w-[410px] h-[35px] gap-2 left-[120px]`}>
            <input
              type="text"
              className={`w-full outline-none color-SEARCH_BLUE px-2 py-2 pl-6 shadow-search-custom-one placeholder-blue`}
              placeholder="Search entry..."
            />
            <button className="relative w-[48px] h-[39px] shadow-search-custom-one">
              <img src={SearchIcon} alt="Search" className="relative top-[3px] left-[9px]" />
            </button>
          </div>
          <div className={`${isSidebarOpen ? ' opacity-40' : ''} relative flex items-center right-[190px] gap-10`}>
            <Link to={'/'}>
              <img src={isColorChanged ? DashboardIconBlack : DashboardIcon} alt="Dashboard" className="relative" />
            </Link>
            <img src={NewPostIcon} alt="NewPost" className="relative" />
            <Link to={'/'}>
              <img src={DashboardOneIconBlack} alt="Dashboard" className={`relative`} onClick={handleClick} />
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src={Line} alt="line" className="absolute top-[6px] left-[9.18px] -z-10" />
        </div>
        <div className={` ${isSidebarOpen ? ' opacity-40' : ''} relative top-[52px] left-[114px] w-[439px]`}>
          <div className="relative flex flex-col">
            <ul>
              {entries.map((entry, index) => (
                <li
                  className="relative w-[439px] h-[208px] top-[-1px] left-[5px] rounded-[15px] shadow-item-custom p-[28px] mb-6 cursor-pointer"
                  key={index}
                  onClick={() => handleEntryClick(entry)}
                >
                  <img src={Clip} alt="line" className="absolute left-[-11px]" />
                  {selectedEntry === entry && <img src={Rectangle} alt="line" className="absolute right-[0px] top-[0px]" />}
                  {(entry === JournalData[0] && !selectedEntry) && <img src={Rectangle} alt="line" className="absolute right-[0px] top-[0px]" />}
                  <h3 className="mb-2 font-sacramento text-LARGE  font-MEDIUM leading-[36px] tracking-normal text-left">{entry.title}</h3>
                  <p className="mb-2 font-OPENSANS text-TINY font-SMALL leading-[16.34px] text-SEARCH_BLUE">{entry.date}</p>
                  <p className="font-OPENSANS text-SMALL font-SMALL leading-[19.07px]">{entry.description.substr(0, 300)}{entry.description.length > 300 ? "..." : ""}</p>
                </li>
              ))}
            </ul>
          </div>
            <div className={` ${isSidebarOpen ? '  opacity-40' : ''} absolute w-[761px] h-[723px] top-[-38px] left-[470px] rounded-[15px] shadow-main_entry_custom`}>
              <div className="relative w-[741px] top-[43.5px] left-[15px] border angle-custom bg-[#0000005E]"></div>
              <div className="relative w-[700px] top-[367px] left-[-308px] border angle-custom_90 bg-[#0000005E]"></div>
              <h3 className="p-[60px] pb-4 font-sacramento text-LARGE_ONE  font-SMALL leading-[72.97px] text-FONT_BLUE">{selectedEntry? selectedEntry.title :JournalData[0].title}</h3>
              <p className="p-[60px] pt-0 font-OPENSANS text-NORMAL font-MEDIUM leading-[25px] tracking-normal text-left custom-font-settings">{selectedEntry? selectedEntry.description : JournalData[0].description}</p>
            </div>
        </div>
      </div>
    </div>
  );
};