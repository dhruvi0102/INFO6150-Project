import React, { useEffect, useState } from "react";
import axios from "../axios";
import Card from "./Card";
import { getCookie } from "../utils/cookie-helper";

const Users = () => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const cookie = getCookie("token");
      console.log("Cookie ", cookie);
      const data = await axios.get("/getUsers", {
        headers: {
          Authorization: cookie,
        },
      });
      console.log(data.data);
      setusers(data.data.users);
      setloading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
  console.log(users);
  return (
    <div className="flex justify-around px-10 py-10">
      {users.map((element, index) => (
        <Card
          userId={element._id}
          index={index}
          name={element.name}
          email={element.email}
          suspended={element.suspended}
          totalOrders={element.orders.length}
        />
      ))}
    </div>
  );
};

export default Users;
