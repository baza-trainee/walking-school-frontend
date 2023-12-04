import { $host } from "./index";

export const getPartners = async () => {
  const response = await $host.get("partner?limit=100");
  return response.data;
};

export const postPartner = async (data) => {
  const response = await $host.post("partner", data);
  return response.data;
};

export const putPartner = async (data) => {
  const response = await $host.put("partner", data);
  return response.data;
};

export const deletePartner = async (id) => {
  const response = await $host.delete(`partner/${id}`);
  return response.data;
};

export const getPartnerById = async (id) => {
  const response = await $host.get(`partner/${id}`);
  return response.data;
};
