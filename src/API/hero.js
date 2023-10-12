import { $host } from "./index";

export async function getHero(limit, offset) {
  const response = await $host.get("hero", { limit, offset });
  return response.data;
}

export async function postHero(data) {
  const response = await $host.post("hero", data);
  return response.data;
}

export async function putHero(data) {
  const response = await $host.put("hero", data);
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
