import React from 'react';
import Greeting from './features/greeting/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://picsum.photos/600/600" className="App-logo" alt="logo" />
        <Greeting />
      </header>
    </div>
  );
}

export default App;
