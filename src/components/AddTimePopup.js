    import React, { useState } from 'react';
    import './Popup.css'; // Shared CSS for popups

    function AddTimePopup({ onClose, onAddTime }) {
    const [hoursToAdd, setHoursToAdd] = useState(1); // Default to 1 hour

    const handleConfirm = () => {
        onAddTime(hoursToAdd);
        onClose();
    };

    return (
        <div className="popup-overlay">
        <div className="popup-content">
            <h2>Tambah Jam Bermain</h2>
            <p>Berapa jam ingin ditambahkan?</p>
            <input
            type="number"
            min="1"
            value={hoursToAdd}
            onChange={(e) => setHoursToAdd(parseInt(e.target.value))}
            />
            <div className="popup-actions">
            <button onClick={handleConfirm}>Konfirmasi Tambah Jam</button>
            <button className="close-button" onClick={onClose}>Batal</button>
            </div>
        </div>
        </div>
    );
    }

    export default AddTimePopup;