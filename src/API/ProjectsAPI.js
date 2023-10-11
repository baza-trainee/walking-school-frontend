import { $host } from "./index";

export const getAllCards = async () => {
  const response = await $host.get("project");
  return response.data;
};
