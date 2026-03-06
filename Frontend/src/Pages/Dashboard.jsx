import React from "react";
import Head from "../Components/Head";
import Footer from "../Components/Footer";

const Dashboard = () => {
  return (
    <div>
      <Head />

      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard.</p>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;