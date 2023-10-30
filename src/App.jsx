/* eslint-disable no-unused-vars */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Home , Earn , DashBoard , NavBar , Footer} from "./index.js"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/earn" element={<Earn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
