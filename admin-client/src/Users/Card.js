import React, { useState } from "react";
import axios from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from "../utils/cookie-helper";

const Card = ({ userId, name, email, suspended, totalOrders, index }) => {
  const [suspension, setsuspension] = useState(suspended);

  const togglesuspension = async () => {
    try {
      setsuspension(!suspension);
      const body = { userId };
      const cookie = getCookie("token");
      await axios.post("/block-user", body, {
        headers: {
          Authorization: cookie,
        },
      });
      toast.success("Toggle Successfull");
    } catch (error) {
      toast.error("Please Try Again");
    }
  };

  return (
    <div className="border border-black p-5 rounded">
      <div>
        Name : <span className="text-xs">{name}</span>
      </div>
      <div>
        Email : <span className="text-xs">{email}</span>
      </div>
      <div>
        Suspended :{" "}
        <span className="text-xs">{suspension ? "true" : "false"}</span>
      </div>
      <div>
        totalOrders : <span className="text-xs">{totalOrders}</span>
      </div>
      <button
        onClick={togglesuspension}
        className={`mt-2 px-3 py-1 text-white ${
          suspension ? "bg-green-400" : "bg-red-500"
        }`}
      >
        {suspension ? "Revert" : "Suspend"}
      </button>
      <ToastContainer />
    </div>
  );
};

export default Card;
