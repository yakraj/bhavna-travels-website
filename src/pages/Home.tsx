import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bus, Package, MapPin, Calendar } from "lucide-react";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"ticket" | "parcel">("ticket");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/booking?type=${activeTab}&from=${from}&to=${to}&date=${date}`);
  };

  const services = [
    {
      title: "Tour Packages",
      description:
        "Explore the world with our curated tour packages designed for your comfort and adventure.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Bus Tickets",
      description:
        "Comfortable and affordable bus travel to destinations across the country.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Logistics & Parcels",
      description:
        "Fast and secure parcel delivery services for your business and personal needs.",
      image:
        "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Car Rental",
      description:
        "Premium car rental services for local travel and outstation trips.",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1920&auto=format&fit=crop)",
        }}
      >
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1>Bhavna Tours Travels and Logistics</h1>
            <p>Your Journey, Our Priority. Travel and Ship with Confidence.</p>

            <div className="reservation-box">
              <div className="tabs">
                <button
                  className={`tab ${activeTab === "ticket" ? "active" : ""}`}
                  onClick={() => setActiveTab("ticket")}
                >
                  <Bus size={20} /> Book Ticket
                </button>
                <button
                  className={`tab ${activeTab === "parcel" ? "active" : ""}`}
                  onClick={() => setActiveTab("parcel")}
                >
                  <Package size={20} /> Send Parcel
                </button>
              </div>

              <form onSubmit={handleSearch} className="search-form">
                <div className="form-group">
                  <label>
                    <MapPin size={16} /> From
                  </label>
                  <input
                    type="text"
                    placeholder="City or Location"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <MapPin size={16} /> To
                  </label>
                  <input
                    type="text"
                    placeholder="City or Location"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <Calendar size={16} /> Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="search-btn">
                  Search {activeTab === "ticket" ? "Buses" : "Services"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-subtitle">
            Comprehensive travel and logistics solutions for you
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
