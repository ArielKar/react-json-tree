import React from 'react';
import './App.scss';
import Header from './components/Header';
import URLInput from './components/URLInput';
import JSONTree from './components/JSONTree';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <URLInput />
        <JSONTree />
      </main>
    </div>
  );
}

export default App;
