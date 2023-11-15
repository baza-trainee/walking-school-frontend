import { $host } from "./index";

export const submitContactData = async (data) => {
  const request = await $host.post("feedback", data);
  return request.data;
};
