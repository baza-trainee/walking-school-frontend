import { $host } from "./index";

export const getFacebook = async () => {
  const response = await $host.get("image-carousel");
  return response.data;
};

export const postFacebook = async (data) => {
  const response = await $host.post("image-carousel", data);
  return response.data;
};

export const putFacebook = async (data) => {
  const response = await $host.put("image-carousel", data);
  return response.data;
};

export const deleteFacebook = async (id) => {
  const response = await $host.delete(`image-carousel/${id}`);
  return response.data;
};
