import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Guns from "./components/Guns/Guns";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [count, setCount] = useState(0)
  const increase=()=>setCount(count + 1)
  return (
    <div className="App">
      <Navbar count={count} />
      <Guns increase = {increase}/>
      <Footer/>
    </div>
  );
};

export default App;
