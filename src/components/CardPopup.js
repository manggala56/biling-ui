    import React from 'react';
    import './Popup.css'; // Shared CSS for popups

    function CardPopup({ onClose, onStartGame }) {
    return (
        <div className="popup-overlay">
        <div className="popup-content">
            <h2>Pilih Opsi Bermain</h2>
            <button onClick={() => onStartGame('per_menit', 'harga_per_menit')}>
            Bermain Per Menit
            </button>
            <button onClick={() => onStartGame('paket', 'harga_paket')}>
            Pilih Paket
            </button>
            <button className="close-button" onClick={onClose}>Tutup</button>
        </div>
        </div>
    );
    }

    export default CardPopup;