import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { putDatas } from "../redux/actions/dataAction";
// import Curd from "./Curd";

const Edit = () => {
  const [student, setStudent] = useState({
    name: "",
    id: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getAlldata();
    edit();
  }, []);

  const getAlldata = async () => {
    try {
      await axios.get(`http://localhost:4500/data/${id}`).then((res) => {
        console.log(res.data);
        setStudent(res.data);
      });
    } catch (err) {
      console.log(err, "data view time error");
    }
  };
  const changetext = async (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const edit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`http://localhost:4500/data/${id}`, student)
        .then((res) => {
          console.log(res.data);
          dispatch(putDatas(res.data));
          navigate("/", { replace: true });
        });
    } catch (err) {
      console.log(err, "error in edit time");
    }
  };

  return (
    <>
      <Header />
      <div className="Main_div main-div-1">
        <div className="container">
          <div className="col-md-8 offset-2  mt-5  text-center p-5 d-grid">
            <h3>Edit item</h3>

            <input
              type="text"
              className="p-1 mb-2"
              value={student.name}
              placeholder="Edit"
              onChange={(e) => changetext(e)}
              name="name"
            />

            <input
              type="number"
              value={student.id}
              className="p-1 mb-2"
              placeholder="Edit"
              onChange={(e) => changetext(e)}
              name="id"
            />

            <button className="btn btn-warning" onClick={(e) => edit(e)}>
              Edit
            </button>
            <button
              className="btn btn-warning mt-2"
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

export default Edit;
