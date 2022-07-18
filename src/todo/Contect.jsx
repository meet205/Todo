import Footer from "./Footer";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Contect = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="Main_div ">
        <div className="container main-div-1 mt-5 text-center">
          <div className="col-md-12  text-center p-5 d-grid">
            <div className="col-md-12 text-center p-2 d-grid">
              <h2 style={{ backgroundColor: "black", color: "white" }}>
                You Can Contact Here.....
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam iusto consequuntur doloremque repellat dicta ipsum
                sunt, mollitia natus veniam veritatis ipsa quam sed.
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

export default Contect;
