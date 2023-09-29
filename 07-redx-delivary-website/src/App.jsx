import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Banner from "./components/Header/Banner";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
      
    </div>
  );
};

export default App;
