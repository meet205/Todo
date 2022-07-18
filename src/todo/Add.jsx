import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { postDatas } from "../redux/actions/dataAction";

const Add = () => {
  const [student, setStudent] = useState([]);
  // const adddata = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const textchange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const addItem = async (e) => {
    e.preventDefault();

    const res = await axios
      .post("http://localhost:4500/data", student)
      .catch((err) => {
        console.log(err, "data post time error");
      });
    // console.log(res, "resruiuyuy");
    navigate("/", { replace: true });
    dispatch(postDatas(res.data));
    console.log(dispatch(postDatas(res.data)));
  };
  return (
    <>
      <Header />

      <div className="Main_div ">
        <div className="container main-div-1 mt-5">
          <div className="row col-md-12">
            <div className="col-md-8 offset-2   text-center p-5 d-grid">
              <h3>Add item</h3>
              <form onSubmit={addItem}>
                <input
                  type="text"
                  className="p-1 mb-2"
                  placeholder="Name Add"
                  onChange={(e) => textchange(e)}
                  name="name"
                  required
                />

                <input
                  type="number"
                  className="p-1 mb-2"
                  placeholder="Number Add"
                  onChange={(e) => textchange(e)}
                  name="id"
                  required
                />

                <button
                  className="btn col-md-12 mt-5 btn-warning"
                  type="submit"
                >
                  ADD
                </button>
                <button
                  className="btn btn-warning mt-2"
                  onClick={(e) => navigate("/", { replace: true })}
                >
                  Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Add;
