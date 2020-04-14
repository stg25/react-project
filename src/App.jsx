import React from 'react';
import VotingApp from './component/VotingApp.jsx';
import TimerDashboard from './component/TimeTrackingApp.jsx';
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
      <div className="container timeTracking_app">
        <div className="title">
          <h1>Time tracking App</h1>
        </div>
        {/* <TimerDashboard /> */}
      </div>
    </div>
  );
}

export default App;
