import React from 'react';
import './App.css';

import Header from './components/header/index';
import Profile from './components/profile/index';
import Footer from './components/footer/index';

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
