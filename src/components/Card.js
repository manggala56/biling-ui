import React, { useState } from "react";
import CardPopup from "./CardPopup";
import AddFoodPopup from "./AddFoodPopup";
import AddTimePopup from "./AddTimePopup";
import "./Card.css"; // Create Card.css for specific card styles
import CardModal from "./cardModal";

function Card({ allData, data, updateConsole, toggleModal }) {
  const [showPopup, setShowPopup] = useState(false);
  const [showAddFoodPopup, setShowAddFoodPopup] = useState(false);
  const [showAddTimePopup, setShowAddTimePopup] = useState(false);

  //   console.log(data);
  function updateModal(id) {
    let totalArr = allData;

    const updatedArr = totalArr.map((item) =>
      item.id === id
        ? { ...item, modalStatus: true }
        : { ...item, modalStatus: false }
    );

    updateConsole(updatedArr);
    console.log(updatedArr);
  }

  const handleCardClick = () => {
    if (data.status === "Available") {
      setShowPopup(true);
    } else if (data.status === "Running") {
      setShowAddFoodPopup(true); // Show food/time options for running consoles
    }
  };

  const handleStartGame = (type, price) => {
    // Logic to start the game, update console status and timer
    console.log(
      `Starting game on ${data.name} (ID: ${data.id}) with type: ${type}, price: ${price}`
    );
    updateConsole(data.id, "Running", "00:00"); // Example: Set initial timer to 0
    setShowPopup(false);
  };

  const handleAddFood = (foodItems, totalBill) => {
    console.log(
      `Adding food for ${data.name} (ID: ${data.id}):`,
      foodItems,
      `Total Bill: ${totalBill}`
    );
    // Logic to record food order and update billing
    setShowAddFoodPopup(false);
  };

  const handleAddTime = (extraHours) => {
    console.log(`Adding ${extraHours} hours to ${data.name} (ID: ${data.id})`);
    // Logic to extend the game time and update billing
    // You'd also update the timer state here. For simplicity, we're just logging.
    setShowAddTimePopup(false);
  };

  return (
    <div
      className={`card ${data.status.toLowerCase()}`}
      onClick={() => toggleModal(data.status.toLowerCase())}
    >
      <div class="card-header">
        <h3>{data.name}</h3>
      </div>
      <div class="card-detail">
        <p>
          Status:{" "}
          <span className={`status-text ${data.status.toLowerCase()}`}>
            {data.status}
          </span>
        </p>
        <p>Timer: {data.timer}</p>
      </div>

      {/* {data.modalStatus == true && data.status === "Available" && (
        <CardModal status={"new"} />
        // <CardPopup
        //   onClose={() => setShowPopup(false)}
        //   onStartGame={handleStartGame}
        // />
        // <div style={{ backgroundColor: "red" }}>aaa</div>
      )} */}

      {/* {data.modalStatus == true && data.status === "Running" && (
        <AddFoodPopup
          onClose={() => setShowAddFoodPopup(false)}
          onAddFood={handleAddFood}
          onOpenAddTime={() => {
            setShowAddFoodPopup(false); // Close food popup before opening time popup
            setShowAddTimePopup(true);
          }}
        />
      )} */}

      {/* {data.modalStatus == true && data.status === "Running" && (
        <AddTimePopup
          onClose={() => setShowAddTimePopup(false)}
          onAddTime={handleAddTime}
        />
      )} */}
    </div>
  );
}

export default Card;
