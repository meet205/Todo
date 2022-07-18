// import React, { useState, useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   // const [allEntry, setAllEntry] = useState();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem("user-info")) {
//       navigate("/curd", { replace: true });
//     }
//   }, []);

//   const submitForm = async (e) => {
//     e.preventDefault();
//     let item = { email, password };
//     console.log("INSIDEE");
//     let result = await fetch("http://localhost:3003/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(item),
//     });
//     console.log(result, "result");
//     result = result.json();

//     localStorage.setItem("user-info", JSON.stringify(result));
//     navigate("/curd", { replace: true });
//   };

//   return (
//     <>
//       <div className="div">
//         <div className="row ">
//           <div className="col-md-12  mt-5 text-center">
//             <form onSubmit={submitForm}>
//               <div>
//                 <label>Email </label>
//                 <br />
//                 <input
//                   type="text"
//                   name="email"
//                   id="email"
//                   placeholder="email"
//                   autoComplete="off"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <br />
//               <div>
//                 <label>Password </label>
//                 <br />
//                 <input
//                   type="text"
//                   name="password"
//                   id="password"
//                   placeholder="password"
//                   autoComplete="off"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <br />
//               <div>
//                 <button
//                   type="submit"
//                   disabled={!submitForm}
//                   className="btn btn-warning"
//                 >
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

// <Form
//               name="basic"
//               labelCol={{
//                 span: 8,
//               }}
//               wrapperCol={{
//                 span: 16,
//               }}
//               initialValues={{
//                 remember: true,
//               }}
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//               autoComplete="off"
//             >
//               <Form.Item
//                 label="Username"
//                 value={email}
//                 name="email"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your username!",
//                   },
//                 ]}
//                 onChange={(e) => setEmail(e.target.value)}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 label="Password"
//                 value={password}
//                 name="password"
//                 type="password"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your password!",
//                   },
//                 ]}
//                 onChange={(e) => setPassword(e.target.value)}
//               >
//                 <Input.Password />
//               </Form.Item>

//               <Form.Item
//                 wrapperCol={{
//                   offset: 8,
//                   span: 16,
//                 }}
//               >
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   onClick={(e) => submit(e)}
//                 >
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Form>

// useEffect(() => {
//   if (localStorage.getItem("user-info")) {
//     navigate("/curd", { replace: true });
//   }
// }, []);

// const onFinish = (values) => {
//   console.log("Success:", values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

// const submit = (e) => {
//   fetch("http://localhost:4500/login", {
//     method: "POST",
//     body: JSON.stringify(login),
//   }).then((response) => {
//     response.json().then((result) => {
//       console.log(result);
//       localStorage.setItem(
//         "login",
//         JSON.stringify({
//           login: true,
//           token: result.token,
//         })
//       );
//       setLogin({ login: true });
//     });
//   });

// e.preventDefault();
// const item = { email, password };
// const result = await axios
//   .post(`http://localhost:4500/login`, login)
//   .then((res) => {
//     console.log(res, "fjfhjkfkfashkh");
//     localStorage.setItem("token", res.token);
//   })
//   .catch((err) => {
//     console.log(err, "login time error");
//   });
// };
