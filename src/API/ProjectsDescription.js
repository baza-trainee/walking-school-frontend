import { $host } from "./index";

export const getProjectsDescription = async () => {
  try {
    return await $host.get("project-section-description");
  } catch (error) {
    throw error;
  }
};

export const updateProjectDescription = async (dataToSend) => {
  try {
    return await $host.put("project-section-description", dataToSend);
  } catch (error) {
    throw error;
  }
};
