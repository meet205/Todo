import React, { useState } from "react";
import Header from "./Header";

// import axios from "axios";
import List from "./List";
import Footer from "./Footer";
// import { Redirect } from "react-router-dom";

const Curd = () => {
  // if (!authorized) {
  //   return <Redirect to="/login" />;
  // }

  // const [isLoggedIn, setisLoggedIn] = useState(null);

  // const logIn = () => {
  //   setisLoggedIn(true);
  // };
  // const logOut = () => {
  //   setisLoggedIn(false);
  // };
  return (
    <>
      <Header />
      <div className="Main_div p-5">
        <div className="container">
          <div className="row">
            <List />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Curd;
