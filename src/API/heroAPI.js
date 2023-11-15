import { $host } from "./index";

export const getAllHeros = async () => {
  try {
    const { data } = await $host.get("hero");
    return data;
  } catch (e) {
    throw e;
  }
};

export const getHeroById = async (key) => {
  let heroId = key.queryKey[1];
  try {
    const { data } = await $host.get(`hero/${heroId}`);
    return data;
  } catch (e) {
    throw e;
  }
};

export const postHero = async (heroData) => {
  try {
    const { data } = await $host.post("hero", heroData);
    return data;
  } catch (e) {
    throw e;
  }
};

export const editHero = async (heroData) => {
  try {
    const { data } = await $host.put("hero", heroData);
    return data;
  } catch (e) {
    throw e;
  }
};

export const deleteHero = async (id) => {
  try {
    const { data } = await $host.delete(`hero/${id}`);
    return data;
  } catch (e) {
    throw e;
  }
};
