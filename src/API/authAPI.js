import { $host } from "./index";

export const login = async ({ login, password }) => {
  try {
    const response = await $host.post("login", {
      login,
      password,
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const forgotPass = async ({ login }) => {
  try {
    const response = await $host.post("forgot-password", {
      login,
    });
    return response.data;
  } catch (e) {
    throw new Error(
      "Введений email не дійсний, перевірте його та спробуйте ще раз",
    );
  }
};

export const resetPass = async (data) => {
  try {
    const jsonData = JSON.stringify(data);
    const response = await $host.post("reset-password", jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const refreshToken = async () => {
  try {
    const response = await $host.post("authorization-refresh");
    return response.status === 200;
  } catch (e) {
    return false;
  }
};

export const checkAuthToken = async () => {
  try {
    const response = await $host.get("admin");
    return response.status === 200;
  } catch (e) {
    return false;
  }
};

export const logout = async () => {
  try {
    return await $host.post("logout");
  } catch (e) {
    throw new Error(e);
  }
};
