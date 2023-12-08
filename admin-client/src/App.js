import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddAdmin from "./AddAdmin/AddAdmin";
import AddCar from "./AddCar/AddCar";
import Home from "./Home/Home";
import HomePage from "./HomePage/HomePage";
import Users from "./Users/Users";
import { getCookie } from "./utils/cookie-helper";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/add-a-car" element={<AddCar />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add-admin" element={<AddAdmin />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

const App = () => {
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  useEffect(() => {
    const data = getCookie("user");
    if (data !== "") {
      setuserLoggedIn(true);
    }
  }, []);

  return (
    <>
      {userLoggedIn ? (
        <AuthRouter />
      ) : (
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      )}
    </>
  );
};

export default App;
