import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Chinese from './components/chinese';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 



function App() {
  return (
    <div className="App">
   

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/zh' element={<Chinese/>}></Route>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
