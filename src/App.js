// import logo from "./logo.svg";
import React, { useState } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Home from "./Todo/Home";
import { Routes, Route } from "react-router-dom";
import Curd from "./todo/Curd";
import Edit from "./todo/Edit";
import View from "./todo/View";
// import Home from "./todo/Home";
import Add from "./todo/Add";
import Service from "./todo/Service";
import Contect from "./todo/Contect";
import Login from "./Login/Login";
// import Todo from "./todo/Todo";
import Protected from "./Login/Protected.jsx";
import PageNotFound from "./todo/PageNotFound";
import Profile from "./todo/profile";

// import AddTodo from "./Todo/AddTodo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

    
        <Route
          path="/service"
          element={<Protected Component={Service}></Protected>}
        />
        <Route
          path="/profile"
          element={<Protected Component={Profile}></Protected>}
        />
        <Route
          path="/contect"
          element={<Protected Component={Contect}></Protected>}
        />
        <Route
          path="/"
          element={
            <Protected Component={Curd}></Protected>
            // <Curd />
          }
        />
        <Route path="/add" element={<Protected Component={Add}></Protected>} />
        <Route
          path="/edit/:id"
          element={<Protected Component={Edit}></Protected>}
        />
        <Route
          path="/view/:id"
          element={<Protected Component={View}></Protected>}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
