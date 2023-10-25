import { $host } from "./index";

export const getContactData = async () => {
  try {
    const response = await $host.get("contact");
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const updateContactData = async (data) => {
  try {
    const response = await $host.post("contact", data);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
