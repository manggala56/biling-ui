import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import PlaystationManagement from "./components/PlaystationManagement";
import CardModal from "./components/cardModal";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard"); // 'dashboard' or 'playstation'
  const [isVisible, setIsVisible] = useState(true);
  const [modalStatus, setModalStatus] = useState({
    status: false,
    type: "new",
  });

  const [consoles, setConsoles] = useState([
    {
      id: 1,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Running",
      timer: "00:30",
    },
    {
      id: 2,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 3,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 4,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 5,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 6,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 7,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 8,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 9,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 10,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 11,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
    {
      id: 12,
      name: "PlayStation 5",
      modalStatus: false,
      status: "Available",
      timer: "00:30",
    },
  ]);

  // Function to update console status/timer (will be passed to Card and PlaystationManagement)
  const updateConsole = (id, newStatus, newTimer) => {
    setConsoles((prevConsoles) =>
      prevConsoles.map((console) =>
        console.id === id
          ? { ...console, status: newStatus, timer: newTimer }
          : console
      )
    );
  };

  function showModal(type) {
    if (type) {
      setModalStatus({
        status: true,
        type: type,
      });
    } else {
      setModalStatus({
        status: false,
        type: "new",
      });
    }
    console.log(modalStatus);
  }

  // Function to add a new console (for PlaystationManagement)
  const addConsole = (newConsole) => {
    setConsoles((prevConsoles) => [
      ...prevConsoles,
      { id: Date.now(), ...newConsole },
    ]);
  };

  // Function to delete a console (for PlaystationManagement)
  const deleteConsole = (id) => {
    setConsoles((prevConsoles) =>
      prevConsoles.filter((console) => console.id !== id)
    );
  };

  return (
    <div className="app-container">
      <div className={isVisible ? "sidebar" : "sidebar-expanded"}>
        <div className="logo">
          <img src="ps.png" alt="" /> {/* Replace with your PS logo */}
          <span className="rental-billing-text">Rental Billing</span>
          <svg
            onClick={() => setIsVisible(!isVisible)}
            style={{ cursor: "pointer" }}
            width={30}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              fill="#ffffff"
              d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
            />
          </svg>
        </div>
        <ul className="menu">
          <li
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            <span className="icon">
              <img src="dashboard.png" alt="" />
            </span>{" "}
            Dashboard
          </li>
          <li
            className={activeTab === "playstation" ? "active" : ""}
            onClick={() => setActiveTab("playstation")}
          >
            <span className="icon">
              <img src="ps_icon.png" alt="" />
            </span>{" "}
            PlayStation
          </li>
          <li
            className={activeTab === "financial" ? "active" : ""}
            onClick={() => setActiveTab("financial")}
          >
            <span className="icon">
              <img src="money.png" alt="" />
            </span>{" "}
            Financial statements
          </li>
          <li
            className={activeTab === "tools" ? "active" : ""}
            onClick={() => setActiveTab("tools")}
          >
            <span className="icon">
              <img src="setting.png" alt="" />
            </span>{" "}
            Tools
          </li>
        </ul>
      </div>
      {/* Modal Section */}
      {modalStatus.status == true ? (
        <CardModal status={modalStatus.type} func={setModalStatus} />
      ) : (
        <></>
      )}
      <div
        style={{
          paddingTop: "32px",
          paddingLeft: "10px",
          display: isVisible ? "none" : "block",
        }}
      >
        <svg
          onClick={() => setIsVisible(!isVisible)}
          style={{ cursor: "pointer" }}
          width={30}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            fill="#ffffff"
            d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
          />
        </svg>
      </div>
      <div className="main-content">
        <header className="header">
          {/* You can add a user profile/settings icon here */}
          <img
            src="rp.png"
            alt="User Profile"
            className="user-profile-icon"
          />{" "}
          {/* Replace with your user icon */}
        </header>

        {activeTab === "dashboard" && (
          <div className="dashboard-content">
            <h2>PlayStation Consoles</h2>
            <div className="console-grid">
              {consoles.map((console) => (
                <Card
                  key={console.id}
                  data={console}
                  allData={consoles}
                  toggleModal={showModal}
                  updateConsole={setConsoles}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === "playstation" && (
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
