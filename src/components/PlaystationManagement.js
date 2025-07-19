    import React, { useState } from 'react';
    import './PlaystationManagement.css'; // Create CSS for this component

    function PlaystationManagement({ consoles, addConsole, updateConsole, deleteConsole }) {
    const [newConsoleName, setNewConsoleName] = useState('');
    const [selectedConsoleId, setSelectedConsoleId] = useState(null);
    const [editConsoleName, setEditConsoleName] = useState('');
    const [editConsoleStatus, setEditConsoleStatus] = useState('');
    const [editConsoleTimer, setEditConsoleTimer] = useState('');

    const handleAddConsole = () => {
        if (newConsoleName) {
        addConsole({ name: newConsoleName, status: 'Available', timer: '00:00' });
        setNewConsoleName('');
        }
    };

    const handleEditClick = (console) => {
        setSelectedConsoleId(console.id);
        setEditConsoleName(console.name);
        setEditConsoleStatus(console.status);
        setEditConsoleTimer(console.timer);
    };

    const handleUpdateConsole = () => {
        if (selectedConsoleId) {
        updateConsole(selectedConsoleId, editConsoleStatus, editConsoleTimer);
        // You can also update the name if needed, but the image shows PS5
        // updateConsole(selectedConsoleId, editConsoleName, editConsoleStatus, editConsoleTimer);
        setSelectedConsoleId(null);
        }
    };

    const handleDeleteConsole = (id) => {
        if (window.confirm('Are you sure you want to delete this console?')) {
        deleteConsole(id);
        }
    };

    return (
        <div className="playstation-management">
        <h2>Manajemen PlayStation</h2>

        <div className="add-console-section">
            <h3>Tambah Konsol Baru</h3>
            <input
            type="text"
            placeholder="Nama Konsol (e.g., PlayStation 5)"
            value={newConsoleName}
            onChange={(e) => setNewConsoleName(e.target.value)}
            />
            <button onClick={handleAddConsole}>Tambah Konsol</button>
        </div>

        <div className="console-list-section">
            <h3>Daftar Konsol</h3>
            <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Status</th>
                <th>Timer</th>
                <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {consoles.map(console => (
                <tr key={console.id}>
                    <td>{console.id}</td>
                    <td>
                    {selectedConsoleId === console.id ? (
                        <input
                        type="text"
                        value={editConsoleName}
                        onChange={(e) => setEditConsoleName(e.target.value)}
                        />
                    ) : (
                        console.name
                    )}
                    </td>
                    <td>
                    {selectedConsoleId === console.id ? (
                        <select
                        value={editConsoleStatus}
                        onChange={(e) => setEditConsoleStatus(e.target.value)}
                        >
                        <option value="Available">Available</option>
                        <option value="Running">Running</option>
                        <option value="Warning">Warning</option>
                        </select>
                    ) : (
                        <span className={`status-text ${console.status.toLowerCase()}`}>{console.status}</span>
                    )}
                    </td>
                    <td>
                    {selectedConsoleId === console.id ? (
                        <input
                        type="text"
                        value={editConsoleTimer}
                        onChange={(e) => setEditConsoleTimer(e.target.value)}
                        />
                    ) : (
                        console.timer
                    )}
                    </td>
                    <td>
                    {selectedConsoleId === console.id ? (
                        <button className="update-btn" onClick={handleUpdateConsole}>Simpan</button>
                    ) : (
                        <>
                        <button className="edit-btn" onClick={() => handleEditClick(console)}>Edit</button>
                        <button className="delete-btn" onClick={() => handleDeleteConsole(console.id)}>Hapus</button>
                        </>
                    )}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        {/* Select Device Billing (This would be more complex, perhaps a dropdown or dedicated section) */}
        <div className="device-billing-section">
            <h3>Pilih Perangkat Billing</h3>
            {/* For simplicity, this could be a dropdown of console IDs or a separate table/UI */}
            <select>
            <option value="">Pilih Konsol untuk Billing</option>
            {consoles.map(console => (
                <option key={console.id} value={console.id}>{console.name} (ID: {console.id})</option>
            ))}
            </select>
            <p>
            {/* You would have state here to manage the currently selected device for billing */}
            {/* And display relevant billing info */}
            </p>
        </div>
        </div>
    );
    }

    export default PlaystationManagement;