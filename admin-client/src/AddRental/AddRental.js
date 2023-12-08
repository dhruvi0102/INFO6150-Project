import React, { useState } from "react";
import axios from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from "../utils/cookie-helper";

const AddCar = () => {
  const [creds, setcreds] = useState({
    name: "The One",
    rentalModel: "book@one.com",
    rentalType: "cabin",
    rooms: "4",
    bathrooms: "2",
    price: "499.99",
    qt: "3",
    image:
      "https://www.pexels.com/photo/beige-bungalow-house-259588/",
  });

  const onChange = (e) => {
    const temp = { ...creds };
    temp[e.target.name] = e.target.value;
    setcreds(temp);
  };

  const submit = async () => {
    try {
      const cookie = getCookie("token");
      const data = await axios.post("/add-rental", creds, {
        headers: {
          Authorization: cookie,
        },
      });
      console.log(data.data);
      toast.success("Rental added successfully");
    } catch (error) {
      toast.error("Some Error Occured ! Please try again");
    }
  };

  return (
    <div className="bg-[#222f3e] h-[100vh] flex justify-center items-center ">
      <div className="p-5 text-white bg-[#4834d4]">
        <div className="mb-5 text-center">Add a Rental</div>
        <div>Name</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="name"
          value={creds.name}
          required={true}
        />
        <div>Rental Model</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="rentalModel"
          value={creds.model}
          required={true}
        />
        <div>Rental Type</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="rentalType"
          value={creds.carType}
          required={true}
        />
        <div>Rooms</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="rooms"
          value={creds.seats}
          required={true}
        />
        <div>Bathrooms</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="bathrooms"
          value={creds.gears}
          required={true}
        />
        <div>Price</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="price"
          value={creds.price}
          required={true}
        />
        <div>Image</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="image"
          value={creds.image}
          required={true}
        />
        <div>qt</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="qt"
          value={creds.qt}
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

export default AddCar;
