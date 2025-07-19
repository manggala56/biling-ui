import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import PlaystationManagement from './components/PlaystationManagement';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' or 'playstation'

  const [consoles, setConsoles] = useState([
    { id: 1, name: 'PlayStation 5', status: 'Running', timer: '00:30' },
    { id: 2, name: 'PlayStation 5', status: 'Available', timer: '00:30' },
    { id: 3, name: 'PlayStation 5', status: 'Available', timer: '00:30' },
    { id: 4, name: 'PlayStation 5', status: 'Available', timer: '00:30' },
    { id: 5, name: 'PlayStation 5', status: 'Available', timer: '00:30' },
    { id: 6, name: 'PlayStation 5', status: 'Available', timer: '00:30' },
    { id: 7, name: 'PlayStation 5', status: 'Available', timer: '00:30' },
    { id: 8, name: 'PlayStation 5', status: 'Available', timer: '00:30' },
    { id: 9, name: 'PlayStation 5', status: 'Available', timer: '00:30' },
    { id: 10, name: 'PlayStation 5', status: 'Available', timer: '00:30' },
    { id: 11, name: 'PlayStation 5', status: 'Available', timer: '00:30' },
    { id: 12, name: 'PlayStation 5', status: 'Available', timer: '00:30' },
  ]);

  // Function to update console status/timer (will be passed to Card and PlaystationManagement)
  const updateConsole = (id, newStatus, newTimer) => {
    setConsoles(prevConsoles =>
      prevConsoles.map(console =>
        console.id === id ? { ...console, status: newStatus, timer: newTimer } : console
      )
    );
  };

  // Function to add a new console (for PlaystationManagement)
  const addConsole = (newConsole) => {
    setConsoles(prevConsoles => [...prevConsoles, { id: Date.now(), ...newConsole }]);
  };

  // Function to delete a console (for PlaystationManagement)
  const deleteConsole = (id) => {
    setConsoles(prevConsoles => prevConsoles.filter(console => console.id !== id));
  };


  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="logo">
          <img src="ps.png" alt="" /> {/* Replace with your PS logo */}
          <span className="rental-billing-text">Rental Billing</span>
        </div>
        <ul className="menu">
          <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
            <span className="icon"><img src="dashboard.png" alt="" /></span> Dashboard
          </li>
          <li className={activeTab === 'playstation' ? 'active' : ''} onClick={() => setActiveTab('playstation')}>
            <span className="icon"><img src="ps_icon.png" alt="" /></span> PlayStation
          </li>
          <li className={activeTab === 'financial' ? 'active' : ''} onClick={() => setActiveTab('financial')}>
            <span className="icon"><img src="money.png" alt="" /></span> Financial statements
          </li>
          <li className={activeTab === 'tools' ? 'active' : ''} onClick={() => setActiveTab('tools')}>
            <span className="icon"><img src="setting.png" alt="" /></span> Tools
          </li>
        </ul>
      </div>

      <div className="main-content">
        <header className="header">
          {/* You can add a user profile/settings icon here */}
          <img src="rp.png" alt="User Profile" className="user-profile-icon" /> {/* Replace with your user icon */}
        </header>

        {activeTab === 'dashboard' && (
          <div className="dashboard-content">
            <h2>PlayStation Consoles</h2>
            <div className="console-grid">
              {consoles.map(console => (
                <Card key={console.id} console={console} updateConsole={updateConsole} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'playstation' && (
          <PlaystationManagement
            consoles={consoles}
            addConsole={addConsole}
            updateConsole={updateConsole}
            deleteConsole={deleteConsole}
          />
        )}
      </div>
    </div>
  );
}

export default App;