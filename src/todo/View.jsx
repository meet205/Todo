import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const View = () => {
  const [student, setStudent] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAlldata();
  }, []);

  const getAlldata = async () => {
    try {
      const student = await axios.get(`http://localhost:4500/data/${id}`);
      // console.log(student.data);
      setStudent(student.data);
    } catch (err) {
      console.log(err, "data view time error");
    }
  };

  return (
    <>
      <Header />
      <div className="Main_div main-div-1">
        <div className="container text-center">
          <div className="col-md-12  text-center p-5 d-grid">
            <div className="col-md-12 text-center p-2 d-grid">
              <h2 style={{ backgroundColor: "black", color: "white" }}>
                View Items
              </h2>
            </div>
            <table className="">
              <tr>
                <td>Name</td>
                <td>Number</td>
              </tr>
              <tr>
                <td>{student.name}</td>
                <td>{student.id}</td>
              </tr>
            </table>
            <button
              className="btn btn-warning mt-3"
              onClick={(e) => navigate("/", { replace: true })}
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

export default View;
