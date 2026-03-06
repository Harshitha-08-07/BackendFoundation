import React from "react";
import Head from "../Components/Head";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Head />

      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Welcome to the Home Page</h1>
        <p>This is the landing page of the application.</p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;