import React, { useEffect, useState } from "react";
import { getJSONCookie } from "../utils/cookie-helper";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const data = getJSONCookie("user");
    console.log(data);
    if (data !== undefined) {
      setuser(data);
      setloading(false);
    }
  }, []);

  const shift = (path) => {
    navigate(path);
  };

  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="w-full h-[100vh] flex flex-col  justify-center items-center">
      <div className="font-semibold">Welcome {user.name}</div>
      <div className="mt-5">
        <button
          onClick={() => shift("/add-a-rental")}
          className="bg-[#30336b] w-64 px-10 py-3 text-white"
        >
          Add A Rental
        </button>
        <br />
        <button
          onClick={() => shift("/users")}
          className="bg-[#4834d4] w-64 px-10 py-3 mt-3 text-white"
        >
          Block A User
        </button>
        <br />
        <button
          onClick={() => shift("/add-admin")}
          className="bg-[#4834d4] w-64 px-10 py-3 mt-3 text-white"
        >
          Add Admin
        </button>
      </div>
    </div>
  );
};

export default Home;
