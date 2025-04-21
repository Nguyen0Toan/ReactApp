import React from"react";
import "./index.css";
import Home from "./routers/Home";
import About from "./routers/About";
import Contact from "./routers/Contact";
import Service from "./routers/Service";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
  );
}

export default App;

