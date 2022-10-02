import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Invoice from './components/Invoice';
import Home from "./pages/Home";

function App() {
  
  return (
    <BrowserRouter>
     
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/invoice" element={<Invoice/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
