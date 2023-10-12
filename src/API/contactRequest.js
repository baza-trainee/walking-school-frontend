import { $host } from "./index";

export const submitContactData = async (data) => {
  const response = await $host.post("contact", data);
  return response.data;
};