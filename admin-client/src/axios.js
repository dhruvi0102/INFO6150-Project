import axios from "axios";

//axios instance to base url
const instance = axios.create({
  baseURL: "http://localhost:5003/api/admins",
});

export default instance;
