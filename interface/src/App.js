import React from 'react';
import './App.css';
import Header from './Components/Header';
import Content1 from './Components/Content1';
import Content2 from './Components/Content2';

function App() {
  return (
    <div className="App">
      <div className="header">< Header/></div>
      <div className="content1"><Content1/></div>
      <div className="content2"><Content2/></div>
    </div>
  );
}

export default App;
