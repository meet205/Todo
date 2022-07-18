import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDatas } from "../redux/actions/dataAction";

const List = () => {
  const [status, setStatus] = useState();
  const datas = useSelector((state) => state.getallDatas.datas);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getAlldata();
    handleDelete();
  }, []);

  const getAlldata = async () => {
    const res = await axios.get("http://localhost:4500/data").catch((err) => {
      console.log(err, "data get time error");
    });
    dispatch(setDatas(res.data));
  };

  const handleDelete = (id) => {
    try {
      axios.delete(`http://localhost:4500/data/${id}`).then((res) => {
        if (id !== res.id) {
          setStatus(true);
        }
      });
    } catch (err) {
      console.log(err, "delete error");
    }
  };
  if (status) {
    return (
      <>
        <List />
      </>
    );
  }
  return (
    <>
      <div className="main-div-1 p-5 text-start">
        <h3>List Of Item</h3>
        <div className="col-md-12 mt-5 text-end">
          <button
            className="btn btn-warning"
            onClick={() => navigate("/add", { replace: true })}
          >
            Add
          </button>
        </div>
        <table className="table  col-md-12 mt-5">
          <tr className="table-row mt-5">
            <td>#</td>
            <td>Name</td>
            <td>Number</td>
            <td className="Icons text-center  p-3 d-flex">Action</td>
          </tr>

          <tbody className="table-1">
            {datas.map((ele, i) => {
              return (
                <>
                  <Fragment key={ele.id}>
                    <tr>
                      <td>{i}</td>
                      <td>{ele.name}</td>
                      <td>{ele.id}</td>
                      <td className="Icons text-center justify-content-space-evenly p-3 d-flex">
                        <Link to={`/view/${ele.id}`}>
                          <i className="icon1 fa-solid fa-eye"></i>
                        </Link>

                        <Link to={`/edit/${ele.id}`}>
                          <i
                            style={{ color: "orange" }}
                            className="icon-2 fa fa-pencil"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <button
                          className="btn-2"
                          onClick={() => handleDelete(ele.id)}
                        >
                          <i className="icon3 fa-solid fa-delete-left"></i>
                        </button>
                      </td>
                    </tr>
                  </Fragment>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
