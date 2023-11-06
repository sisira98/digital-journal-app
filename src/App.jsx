import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/Pages/Dashboard";
import { Journal } from "./components/Pages/Journal";
import { All } from "./components/Pages/All";
import { Entry } from "./components/Pages/Entry";
import { Provider } from 'react-redux';
import store from '../src/components/Action/Store';


const App = () => {


  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/journal' element={<Journal />} />
          <Route path='/all-entry' element={<All />} />
          <Route path='/your-entry' element={<Entry />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
