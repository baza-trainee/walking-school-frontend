import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getHero(limit, offset) {
  const response = await axios.get(`${baseUrl}/hero`, { limit, offset });
  return response.data;
}

export async function postHero(description, image, title) {
  const response = await axios.post(`${baseUrl}/hero`, {
    description,
    image,
    title,
  });
  return response.data;
}

export async function putHero(description, id, image, title) {
  const response = await axios.put(`${baseUrl}/hero`, {
    description,
    id,
    image,
    title,
  });
  return response.data;
}

export async function deleteHero(id) {
  const response = await axios.delete(`${baseUrl}/hero/${id}`);
  return response.data;
}

export async function getHeroById(id) {
  const response = await axios.get(`${baseUrl}/hero/${id}`);
  return response.data;
}
