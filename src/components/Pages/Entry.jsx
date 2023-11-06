import React, { useState, useEffect } from 'react';
import { Header } from '../Layout/Header';
import { NavBar } from '../Layout/NavBar';
import '../styles/Dashboard.css';
import Line from '../../assets/Line.svg';
import LineTwo from '../../assets/LineTwo.svg';
import Delete from '../../assets/Delete.svg';
import Edit from '../../assets/Edit.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { shareEntry } from '../Action/CreateJournal'
import { editEntry } from '../Action/EditJounal';
import { getEntry } from '../Action/GetJournal';

export const Entry = (history) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [entries, setEntries] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const selectedEntryId = useSelector((state) => state.entry.selectedEntryId);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    if (selectedEntryId) {
      dispatch(getEntry(selectedEntryId));
    }
  }, [selectedEntryId]);

  const journal = useSelector(state => state.entry.selectedEntry);
  useEffect(() => {
    if (journal) {
      setTitle(journal.title);
      setContent(journal.content)
    }
  }, [journal]);


  const handleShare = async (shareTitle, shareContent) => {
    try {
      if (journal) {
        dispatch(editEntry(journal.id, shareTitle, shareContent));
      } else {
        dispatch(shareEntry(shareTitle, shareContent));

      }
      await new Promise((resolve) => setTimeout(resolve, 0));

      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error sharing entry:', error);
    }
  };

  const addEntry = () => {
    if (journal) {
      setTitle(journal.title);
      setContent(journal.content);
    }
    if (title && content) {
      if (editIndex !== null) {
        const updatedEntries = [...entries];
        updatedEntries[editIndex] = { title, content };
        setEntries(updatedEntries);
        setEditIndex(null);
      } else {
        const newEntry = { title, content };
        setEntries([...entries, newEntry]);
      }

      setTitle('');
      setContent('');
      setIsHidden(true);
    }
  };

  const editCreatingEntry = (index) => {
    const entryToEdit = entries[index];
    setTitle(entryToEdit.title);
    setContent(entryToEdit.content);
    setIsHidden(false);
    setEditIndex(index);
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
    setEditIndex(null);
    setIsHidden(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${isSidebarOpen ? 'bg-[#8D8C8E]' : ''} min-h-screen`}>
      <NavBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`${isSidebarOpen ? 'bg-[#8D8C8E]' : ''}`}>
        <Header toggleSidebar={toggleSidebar} />
        <div className={`flex ${isSidebarOpen ? 'bg-[#8D8C8E]' : ''}`}>
          <div className="relative top-[6px] left-[23px] h-fit-content -z-10">
            <img src={Line} alt="line" />
          </div>
          <div className={`${isSidebarOpen ? 'bg-[#8D8C8E]' : ''} relative flex flex-col items-center shadow-entry_custom h-[540px] w-[1400px] top-[80px] left-[126px] rounded-[10px]`}>
            <div className={`${isHidden ? 'hidden' : ''}`}>
              <div className="relative flex justify-between gap-6">
                <input
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={`${isSidebarOpen ? 'bg-[#8D8C8E] opacity-40 border-b-[#8D8C8E]' : ''} relative right-[29px] pt-7 pb-2 w-[608px] font-sacramento font-MEDIUM text-LARGER leading-[46.7px] placeholder-dark_blue border-b-[1px] focus:outline-none`}
                />
                <button
                  className={`${isSidebarOpen ? 'opacity-40' : ''} relative w-[132px] h-[38px] top-[43px] rounded-[4px] bg-FONT_BLUE text-white font-OPENSANS leading-[27.24px] font-variation-settings text-MEDIUM`}
                  onClick={addEntry}
                >
                  {editIndex !== null ? 'Update' : 'Save'}
                </button>
              </div>
              <textarea
                placeholder="Start writing..."
                value={content}
                className={`${isSidebarOpen ? 'bg-[#8D8C8E]' : ''} relative w-full h-[300px] border-none left-[-68px] p-10 pt-6 font-OPENSANS leading-[27.24px] font-variation-settings text-MEDIUM text-SEARCH_BLUE focus:outline-none`}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className={`${!isHidden ? 'hidden' : ''} w-[716px] ${isSidebarOpen ? 'bg-[#8D8C8E] opacity-40' : ''}`}>
              <ul>
                {entries.map((entry, index) => (
                  <li key={index}>
                    <h3 className="relative right-[29px] pt-7 pb-2 w-[608px] font-sacramento font-MEDIUM text-LARGER leading-[46.7px] placeholder-dark_blue">
                      {entry.title}
                    </h3>
                    <p className="relative w-full h-[400px] left-[-68px] p-10 pt-6 font-OPENSANS leading-[27.24px] font-variation-settings text-MEDIUM text-SEARCH_BLUE">
                      {entry.content}
                    </p>
                    <div className="relative flex justify-between pl-0 p-[31px] left-[53px] bottom-[33px]">
                      <Link to={'/'}>
                        <button
                          className={`${isSidebarOpen ? 'opacity-40' : ''} relative w-[132px] h-[38px] right-[85px] rounded-[4px] bg-FONT_BLUE text-white font-OPENSANS leading-[27.24px] font-variation-settings text-MEDIUM`}
                          onClick={() => handleShare(entry.title, entry.content)}
                        >
                          Share
                        </button>
                      </Link>
                      <div className="relative flex justify-end pl-0 p-[31px] gap-[21px] left-[55px] bottom-[33px]">
                        <img
                          src={Edit}
                          alt="Edit"
                          className="top-[-34px] left-[38rem] w-[24px] cursor-pointer"
                          onClick={() => editCreatingEntry(index)}
                        />
                        <img
                          src={Delete}
                          alt="Delete"
                          className="top-[-34px] left-[41rem] cursor-pointer"
                          onClick={() => deleteEntry(index)}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative top-[24rem] h-[200px] -z-10">
            <img src={LineTwo} alt="line" />
          </div>
        </div>
      </div>
    </div>
  );
};
