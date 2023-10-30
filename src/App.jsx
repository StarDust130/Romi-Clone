/* eslint-disable no-unused-vars */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Home , Earn , Dashboard , NavBar , Footer} from "./index"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/earn" element={<Earn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;