import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Bus, Clock, IndianRupee, X } from "lucide-react";

const Booking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "ticket";
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mock Data
  const results = [
    {
      id: 1,
      name: "Bhavna Express",
      time: "10:00 PM",
      duration: "8h",
      price: 800,
      type: "AC Sleeper",
    },
    {
      id: 2,
      name: "Bhavna Superfast",
      time: "08:30 PM",
      duration: "7h 30m",
      price: 650,
      type: "Non-AC Seater",
    },
    {
      id: 3,
      name: "Bhavna Royal",
      time: "11:15 PM",
      duration: "8h",
      price: 1200,
      type: "Volvo Multi-Axle",
    },
  ];

  const handleBook = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking Successful! We will contact you shortly.");
    setIsModalOpen(false);
  };

  return (
    <div className="booking-page container">
      <div className="booking-header">
        <h1>Available {type === "ticket" ? "Buses" : "Logistics Services"}</h1>
        <p>
          {from} to {to} on {date}
        </p>
      </div>

      <div className="results-list">
        {results.map((item) => (
          <div key={item.id} className="result-card">
            <div className="result-info">
              <h3>{item.name}</h3>
              <div className="result-meta">
                <span>
                  <Clock size={16} /> {item.time}
                </span>
                <span>{item.duration}</span>
                <span className="badge">{item.type}</span>
              </div>
            </div>
            <div className="result-price">
              <div className="price">
                <IndianRupee size={18} /> {item.price}
              </div>
              <button onClick={() => handleBook(item)} className="book-btn">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <h2>Passenger Details</h2>
            <p>Booking for: {selectedItem?.name}</p>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input type="number" required placeholder="Age" />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                />
              </div>
              <div className="form-group">
                <label>Email (Optional)</label>
                <input type="email" placeholder="email@example.com" />
              </div>
              <button type="submit" className="submit-btn">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
