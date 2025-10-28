import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.jpg"; 

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to SignIn page after 2 seconds
    const timer = setTimeout(() => {
      navigate("/signin");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  // Inline styles
  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    background:
      "radial-gradient(98.34% 98.34% at 8.85% 0%, #FF9800 15.38%, #FFF3C5 64.92%), linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02))",
    backdropFilter: "blur(160px)",
    opacity: 1,
  };

  const logoStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "28px",
    opacity: 1,
    objectFit: "cover",
  };

  const titleStyle = {
    width: "314px",
    height: "54px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "100%",
    textAlign: "center",
    color: "#000",
    margin: 0,
    opacity: 1,
  };

  return (
    <div style={containerStyle}>
      <img src={logo} alt="Mendora Logo" style={logoStyle} />
      <h1 style={titleStyle}>
        <span className="text-black">Mend</span>
        <span className="text-orange-400">ora</span>
        </h1>
    </div>
  );
};

export default Home;
