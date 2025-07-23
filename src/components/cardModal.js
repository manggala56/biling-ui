import { useEffect, useState } from "react";
import "./Popup.css"; // Shared CSS for popups
import "./global.css";

export default function CardModal({ status, func }) {
  const [sampleData, setSampleData] = useState([]);
  const [sampleMenu, setSampleMenu] = useState([]);

  useEffect(() => {
    let totalArr = [];
    let totalMenu = [];
    for (let index = 1; index <= 10; index++) {
      totalArr.push({ id: index, name: `Paket ${index}` });
      totalMenu.push({ id: `mn${index}`, name: `Menu ${index}` });
    }

    setSampleMenu(totalMenu);
    setSampleData(totalArr);
  }, []);

  if (status == "available") {
    return (
      <>
        <div className="modal-container">
          <div
            className="background-clicker"
            onClick={() => func({ status: false, type: "new" })}
          ></div>
          <div className="new-popup-bg">
            <h3>Pilih Opsi Bermain</h3>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              <button
                className="modal-primary-button"
                onClick={() => func({ status: false, type: "new" })}
              >
                Bermain Open
              </button>
              <button
                className="modal-primary-button"
                onClick={() => func({ status: true, type: "select-package" })}
              >
                Bermain Paket
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "1em",
              }}
            >
              <button
                onClick={() => func({ status: false, type: "new" })}
                className="close"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else if (status == "select-package") {
    return (
      <>
        <div className="modal-container">
          <div
            className="background-clicker"
            onClick={() => func({ status: false, type: "new" })}
          ></div>
          <div className="new-popup-bg">
            <h3>Pilih Opsi Paket</h3>
            <div className="loop-container">
              {sampleData.map((data, index) => (
                <button
                  className="modal-primary-button"
                  onClick={() => func({ status: false, type: "new" })}
                >
                  {data.name}
                </button>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "1em",
              }}
            >
              <button
                onClick={() => func({ status: false, type: "new" })}
                className="close"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else if (status == "running") {
    return (
      <>
        <div className="modal-container">
          <div
            className="background-clicker"
            onClick={() => func({ status: false, type: "new" })}
          ></div>
          <div className="new-popup-bg">
            <div>
              <h3>Pesan Makanan & Minuman</h3>
              <div style={{ marginBottom: "1em", paddingRight: "20px" }}>
                <input
                  type="text"
                  placeholder="Search Disini"
                  className="form-control"
                />
              </div>
              <div className="loop-container">
                {sampleMenu.map((data, index) => (
                  <button
                    key={data.id}
                    className="modal-primary-button"
                    onClick={() => func({ status: false, type: "new" })}
                  >
                    {data.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3>List Pesanan</h3>
              <div className="menu-list-container">
                <div className="menu-list-item">
                  <div style={{ textAlign: "start" }}>Menu 1</div>
                  <svg
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path
                      fill="#ff0000"
                      d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "1em",
              }}
            >
              <button
                onClick={() => func({ status: false, type: "new" })}
                className="close"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
