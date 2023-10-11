import { $host } from "./index";

export async function getHero(limit, offset) {
  const response = await $host.get("hero", { limit, offset });
  return response.data;
}

export async function postHero(description, image, title) {
  const response = await $host.post("hero", {
    description,
    image,
    title,
  });
  return response.data;
}

export async function putHero(description, id, image, title) {
  const response = await $host.put("hero", {
    description,
    id,
    image,
    title,
  });
  return response.data;
}

export async function deleteHero(id) {
  const response = await $host.delete(`hero/${id}`);
  return response.data;
}

export async function getHeroById(id) {
  const response = await $host.get(`hero/${id}`);
  return response.data;
}
