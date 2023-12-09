import React, { useState } from "react";
import axios from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from "../utils/cookie-helper";

const AddCar = () => {
  const [creds, setcreds] = useState({
    name: "Tesla Model S",
    model: "book@tesla.com",
    carType: "coupe",
    seats: "4",
    gears: "Automatic",
    price: "499.99",
    qt: "5",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftesla-cdn.thron.com%2Fdelivery%2Fpublic%2Fimage%2Ftesla%2F3863f3e5-546a-4b22-bcbc-1f8ee0479744%2FbvlatuR%2Fstd%2F1200x628%2FMX-Social&imgrefurl=https%3A%2F%2Fwww.tesla.com%2Fmodelx&tbnid=Xm2lDJDSvSzXnM&vet=12ahUKEwitm-j-i-v7AhWoGFkFHdREB_wQMygBegUIARDmAQ..i&docid=nAmbVd5MEZDJgM&w=1200&h=628&q=tesla&ved=2ahUKEwitm-j-i-v7AhWoGFkFHdREB_wQMygBegUIARDmAQ",
  });

  const onChange = (e) => {
    const temp = { ...creds };
    temp[e.target.name] = e.target.value;
    setcreds(temp);
  };

  const submit = async () => {
    try {
      const cookie = getCookie("token");
      const data = await axios.post("/add-car", creds, {
        headers: {
          Authorization: cookie,
        },
      });
      console.log(data.data);
      toast.success("Car added successfully");
    } catch (error) {
      toast.error("Some Error Occured ! Please try again");
    }
  };

  return (
    <div className="bg-[#222f3e] h-[100vh] flex justify-center items-center ">
      <div className="p-5 text-white bg-[#4834d4]">
        <div className="mb-5 text-center">Add a Car</div>
        <div>Name</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="name"
          value={creds.name}
          required={true}
        />
        <div>Model</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="model"
          value={creds.model}
          required={true}
        />
        <div>Car Type</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="carType"
          value={creds.carType}
          required={true}
        />
        <div>Seats</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="seats"
          value={creds.seats}
          required={true}
        />
        <div>Gears</div>
        <input
          onChange={onChange}
          className="mt-2 p-3 w-96 bg-transparent border border-black"
          name="gears"
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
