import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Service = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="Main_div ">
        <div className="container main-div-1 mt-5 text-center">
          <div className="col-md-12  text-center p-5 d-grid">
            <div className="col-md-12 text-center p-2 d-grid">
              <h2 style={{ backgroundColor: "black", color: "white" }}>
                Service
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                corrupti, alias cumque debitis necessitatibus neque praesentium
                obcaecati saepe! Pariatur cum ab enim cumque atque molestias
                voluptatum voluptatem qui vero eveniet sunt deserunt, iusto
                omnis placeat non nostrum nulla, doloribus laudantium.
              </p>
            </div>
            <button
              className="btn btn-warning mt-3"
              onClick={() => navigate("/", { replace: true })}
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
