import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
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
import { useSelector } from 'react-redux';
import Edit from '../../assets/Edit.svg'
import Delete from '../../assets/Delete.svg'
import { setSelectedEntryId } from '../Action/EditEntryData';
import { format } from 'date-fns';
import { listEntries } from '../Action/ListJournal'
import { deleteEntry } from "../Action/DeleteEntry";

export const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isColorChanged, setColorChanged] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null)
  const dispatch = useDispatch();


  const handleEditClick = (entryId) => {
    dispatch(setSelectedEntryId(entryId));
  };

  useEffect(() => {
    dispatch(listEntries());
  }, [dispatch]);
  const entries = useSelector(state => state.entry.listData);
  useEffect(() => {
    if (!selectedEntry && entries.length > 0) {
      setSelectedEntry(entries[0]);
    }
  }, [entries, selectedEntry]);
  const deleteEntries = async (entryId) => {
    dispatch(deleteEntry(entryId));
    window.location.reload();
  };
  const handleClick = () => {
    setColorChanged(!isColorChanged);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  function formatDate(createdDate) {
    const date = new Date(createdDate);
    return format(date, "MMMM do, yyyy");
  }

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
              <img src={isColorChanged ? DashboardIconBlack : DashboardIcon} alt="Dashboard" className="relative" onClick={handleClick} />
            </Link>
            <Link to={'/your-entry'}>
              <img src={NewPostIcon} alt="NewPost" className="relative" onClick={() => setSelectedEntryId(null)} />
            </Link>
            <Link to={'/'}>
              <img src={DashboardOneIconBlack} alt="Dashboard" className={`relative`} />
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src={Line} alt="line" className="absolute top-[6px] left-[9.18px] -z-10" />
        </div>
        <div className={` ${isSidebarOpen ? ' opacity-40' : ''} relative top-[52px] left-[114px] w-[439px]`}>
          <div className="relative flex flex-col">
            <ul className="overflow-hidden w-[472px] h-[709px] overflow-y-auto custom-scrollbar">
              {entries.map((entry, index) => (
                <li
                  className="relative w-[439px] h-[222px] top-[-1px] left-[5px] rounded-[15px] shadow-item-custom p-[28px] mb-6 cursor-pointer"
                  key={index}
                  onClick={() => handleEntryClick(entry)}
                >
                  <img src={Clip} alt="line" className="absolute left-[-11px]" />
                  {selectedEntry === entry && <img src={Rectangle} alt="line" className="absolute right-[0px] top-[0px]" />}
                  {(entry === JournalData[0] && !selectedEntry) && <img src={Rectangle} alt="line" className="absolute right-[0px] top-[0px]" />}
                  <h3 className="mb-2 font-sacramento text-LARGE  font-MEDIUM leading-[36px] tracking-normal text-left">{entry.title}</h3>
                  <p className="mb-2 font-OPENSANS text-TINY font-SMALL leading-[16.34px] text-SEARCH_BLUE">{formatDate(entry.createdAt)}</p>
                  <p className="font-OPENSANS text-SMALL font-SMALL leading-[19.07px]">{entry.content.substr(0, 300)}{entry.content.length > 300 ? "..." : ""}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={` ${isSidebarOpen ? '  opacity-40' : ''} absolute w-[761px] h-[723px] top-[-38px] left-[486px] rounded-[15px] shadow-main_entry_custom`}>
            <div className="relative w-[741px] top-[43.5px] left-[15px] border angle-custom bg-[#0000005E]"></div>
            <div className="relative w-[700px] top-[367px] left-[-308px] border angle-custom_90 bg-[#0000005E]"></div>
            <div className="relative flex justify-end pl-0 p-[31px] pb-0 gap-[21px] left-[3px] bottom-[25px]">
              <Link to={'/your-entry'}>

                <img
                  src={Edit}
                  alt="Edit"
                  className="top-[-34px] left-[38rem] w-[24px] cursor-pointer"
                  onClick={() => handleEditClick(selectedEntry ? selectedEntry.id : '')}
                />
              </Link>
              <img
                src={Delete}
                alt="Delete"
                className="top-[-34px] left-[41rem] cursor-pointer"
                onClick={() => deleteEntries(selectedEntry ? selectedEntry.id : '')}
              />
            </div>
            <h3 className="p-[60px] pt-0 pb-4 font-sacramento text-LARGEST  font-SMALL leading-[72.97px] text-FONT_BLUE">{selectedEntry ? selectedEntry.title : ''}</h3>
            <p className="p-[60px] pt-0 font-OPENSANS text-NORMAL font-MEDIUM leading-[25px] tracking-normal text-left custom-font-settings">{selectedEntry ? selectedEntry.content : ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
