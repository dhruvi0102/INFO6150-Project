import React, { useState } from "react";
import axios from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveCookie } from "../utils/cookie-helper";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [creds, setcreds] = useState({
    email: "rushabh@gmail.com",
    password: "Rushabh@123",
  });

  const onChange = (e) => {
    const temp = { ...creds };
    temp[e.target.name] = e.target.value;
    setcreds(temp);
  };

  const loginHandler = async () => {
    try {
      const data = await axios.post("/login", creds);
      console.log(data.data.token);
      saveCookie("user", JSON.stringify(data.data));
      saveCookie("token", data.data.token);
      navigate("/home");
      window.location.reload();
    } catch (error) {
      toast.error("Credentials are Wrong please try again");
    }
  };

  return (
    <div className="bg-[#222f3e] h-[100vh] flex justify-center items-center ">
      <div className="p-5 text-white bg-[#4834d4]">
        <h3 className="font-semibold text-2xl text-center">Login</h3>
        <div className="mt-5">Email</div>
        <input
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="email"
          onChange={onChange}
          value={creds.email}
          type="email"
          required={true}
        />
        <div className="mt-5">Password</div>
        <input
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          type="password"
          required={true}
          name="password"
          onChange={onChange}
          value={creds.password}
        />
        <br />
        <div className="flex justify-center">
          <button
            onClick={loginHandler}
            className="bg-green-400 mt-3 px-20 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
