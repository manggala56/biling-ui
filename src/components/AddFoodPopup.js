    import React, { useState } from 'react';
    import './Popup.css'; // Shared CSS for popups

    function AddFoodPopup({ onClose, onAddFood, onOpenAddTime }) {
    const [foodItems, setFoodItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    const handleAddItem = () => {
        if (itemName && itemPrice) {
        setFoodItems([...foodItems, { name: itemName, price: parseFloat(itemPrice) }]);
        setItemName('');
        setItemPrice('');
        }
    };

    const calculateTotal = () => {
        return foodItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    };

    const handleSubmit = () => {
        onAddFood(foodItems, calculateTotal());
        onClose();
    };

    return (
        <div className="popup-overlay">
        <div className="popup-content">
            <h2>Pembayaran Tambahan Makanan</h2>
            <div className="food-input-group">
            <input
                type="text"
                placeholder="Nama Makanan"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Harga"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
            />
            <button onClick={handleAddItem}>Tambah Item</button>
            </div>
            <div className="food-list">
            {foodItems.length > 0 ? (
                <ul>
                {foodItems.map((item, index) => (
                    <li key={index}>{item.name} - Rp {item.price.toFixed(2)}</li>
                ))}
                </ul>
            ) : (
                <p>Belum ada makanan ditambahkan.</p>
            )}
            </div>
            <p>Total: Rp {calculateTotal()}</p>
            <div className="popup-actions">
            <button onClick={handleSubmit}>Bayar & Selesai</button>
            <button onClick={onOpenAddTime}>Tambah Jam</button>
            <button className="close-button" onClick={onClose}>Tutup</button>
            </div>
        </div>
        </div>
    );
    }

    export default AddFoodPopup;