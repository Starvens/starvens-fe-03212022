import axios from "axios";

const http = axios.create({
  baseURL: "https://romkyh17zd.execute-api.us-east-1.amazonaws.com/test",
  timeout: 5000,
});

export default http;
