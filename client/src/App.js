import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
      <section className="container">
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </section>
    </Fragment>
  </BrowserRouter>
);

export default App;
