import React from 'react';
import VotingApp from './component/VotingApp.jsx';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <div className="container voting_app">
        <div className="title">
          <h1>Voting App</h1>
        </div>
        <VotingApp />
      </div>
    </div>
  );
}

export default App;
