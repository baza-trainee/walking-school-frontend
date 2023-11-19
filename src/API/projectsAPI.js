import { $host } from "./index";

export const getAllCards = async () => {
  const response = await $host.get("project");
  return response.data;
};

export const getProjectDescription = async () => {
  const response = await $host.get("project-section-description");
  return response.data[0];
};

export const createProject = async (data) => {
  const response = await $host.post("project", data);
  return response.data;
};

export const updateProject = async (data) => {
  const response = await $host.put("project", data);
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await $host.delete(`project/${id}`);
  return response.data;
};

export const getProject = async (id) => {
  const response = await $host.get(`project/${id}`);
  return response.data;
};
