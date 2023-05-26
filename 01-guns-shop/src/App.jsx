import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Guns from "./components/Guns/Guns";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Guns/>
      <Footer/>
    </div>
  );
};

export default App;
