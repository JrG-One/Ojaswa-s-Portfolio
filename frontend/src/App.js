import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles/animations.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Ojaswa-s-Portfolio">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
