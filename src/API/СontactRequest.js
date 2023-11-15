import { $host } from "./index";

export const submitContactData = async (data) => {
  const response = await $host.post("form", data);
  return response.data;
};
