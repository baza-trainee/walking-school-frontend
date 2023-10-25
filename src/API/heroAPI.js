import { $host } from "./index";

export const getAllHeros = async () => {
  try {
    const { data } = await $host.get("hero");
    return data;
  } catch (e) {
    throw e;
  }
};

export const getHeroById = async (id) => {
  try {
    const { data } = await $host.get(`hero/${id}`);
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
