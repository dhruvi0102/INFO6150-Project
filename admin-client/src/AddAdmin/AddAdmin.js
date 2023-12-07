import React, { useState } from "react";
import axios from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddAdmin = () => {
  const [creds, setcreds] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    const temp = { ...creds };
    temp[e.target.name] = e.target.value;
    setcreds(temp);
  };

  const submit = async () => {
    try {
      const data = await axios.post("/", creds);
      console.log(data.data);
      toast.success("User added successfully");
      navigate("/");
    } catch (error) {
      toast.error("Some Error Occured ! Please try again");
    }
  };

  return (
    <div className="bg-[#222f3e] h-[100vh] flex justify-center items-center ">
      <div className="p-5 text-white bg-[#4834d4]">
        <div className="mb-5 text-center">Add Admin Users</div>
        <div>Name</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="name"
          value={creds.name}
          required={true}
        />
        <div>Email</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="email"
          value={creds.email}
          required={true}
        />
        <div>Password</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="password"
          value={creds.password}
          required={true}
        />
        <div className="flex justify-center">
          <button
            onClick={submit}
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

export default AddAdmin;
