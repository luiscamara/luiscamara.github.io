import React from 'react';
import './App.css';

import Header from './components/header/index';
import Profile from './components/profile/index';
import Footer from './components/footer/index';
import Projects from './components/projects';
import Skills from './components/abilities';
import Education from './components/education';
import Experience from './components/experience';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
