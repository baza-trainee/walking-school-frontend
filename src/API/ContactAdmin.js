import { $host } from "./index";

export const updateContactData = async (data) => {
  try {
    const response = await $host.post("contact", data);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
