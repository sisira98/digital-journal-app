
import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/Pages/Dashboard";
import { Journal } from "./components/Pages/Journal";
import { All } from "./components/Pages/All";
import {Entry} from "./components/Pages/Entry";

const App = () => {


  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/journal' element={<Journal />} />
    <Route path='/all-entry' element={<All />} />
    <Route path='/your-entry' element={<Entry />} />
   </Routes>
   </BrowserRouter>
  );
};

export default App;
