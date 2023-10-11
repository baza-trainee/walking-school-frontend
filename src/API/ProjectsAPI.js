import { $host } from "./index";

export const getAllCards = async () => {
  const response = await $host.get("project");
  return response.data;
};

export const getProjectDesc = async () => {
  const response = await $host.get("projects-section-description");
  return response.data;
};
