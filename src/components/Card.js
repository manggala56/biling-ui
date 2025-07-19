    import React, { useState } from 'react';
    import CardPopup from './CardPopup';
    import AddFoodPopup from './AddFoodPopup';
    import AddTimePopup from './AddTimePopup';
    import './Card.css'; // Create Card.css for specific card styles

    function Card({ console, updateConsole }) {
    const [showPopup, setShowPopup] = useState(false);
    const [showAddFoodPopup, setShowAddFoodPopup] = useState(false);
    const [showAddTimePopup, setShowAddTimePopup] = useState(false);

    const handleCardClick = () => {
        if (console.status === 'Available') {
        setShowPopup(true);
        } else if (console.status === 'Running') {
        setShowAddFoodPopup(true); // Show food/time options for running consoles
        }
    };

    const handleStartGame = (type, price) => {
        // Logic to start the game, update console status and timer
        console.log(`Starting game on ${console.name} (ID: ${console.id}) with type: ${type}, price: ${price}`);
        updateConsole(console.id, 'Running', '00:00'); // Example: Set initial timer to 0
        setShowPopup(false);
    };

    const handleAddFood = (foodItems, totalBill) => {
        console.log(`Adding food for ${console.name} (ID: ${console.id}):`, foodItems, `Total Bill: ${totalBill}`);
        // Logic to record food order and update billing
        setShowAddFoodPopup(false);
    };

    const handleAddTime = (extraHours) => {
        console.log(`Adding ${extraHours} hours to ${console.name} (ID: ${console.id})`);
        // Logic to extend the game time and update billing
        // You'd also update the timer state here. For simplicity, we're just logging.
        setShowAddTimePopup(false);
    };

    return (
        <div className={`card ${console.status.toLowerCase()}`} onClick={handleCardClick}>
        <h3>{console.name}</h3>
        <p>Status: <span className={`status-text ${console.status.toLowerCase()}`}>{console.status}</span></p>
        <p>Timer: {console.timer}</p>

        {showPopup && console.status === 'Available' && (
            <CardPopup
            onClose={() => setShowPopup(false)}
            onStartGame={handleStartGame}
            />
        )}

        {showAddFoodPopup && console.status === 'Running' && (
            <AddFoodPopup
            onClose={() => setShowAddFoodPopup(false)}
            onAddFood={handleAddFood}
            onOpenAddTime={() => {
                setShowAddFoodPopup(false); // Close food popup before opening time popup
                setShowAddTimePopup(true);
            }}
            />
        )}

        {showAddTimePopup && console.status === 'Running' && (
            <AddTimePopup
            onClose={() => setShowAddTimePopup(false)}
            onAddTime={handleAddTime}
            />
        )}
        </div>
    );
    }

    export default Card;