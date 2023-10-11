import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const submitContactData = async (data) => {
  const response = await axios.post(BASE_URL + "/contact", data);
  return response.data;
};
