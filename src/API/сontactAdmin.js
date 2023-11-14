import { $host } from "./index";

export const getContactData = async () => {
  try {
    const response = await $host.get("contact");
    return response.data[0];
  } catch (e) {
    throw e;
  }
};

export const updateContactData = async (data) => {
  try {
    const response = await $host.put("contact", data);
    return response.data;
  } catch (e) {
    throw e;
  }
};
