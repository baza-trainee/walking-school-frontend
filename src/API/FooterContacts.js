import { $host } from "./index";

export const getFooterContacts = async () => {
  const response = await $host.get("contact");
  return response.data;
};
