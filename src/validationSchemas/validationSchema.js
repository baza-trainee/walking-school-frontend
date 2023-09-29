import * as Yup from "yup";

export const emailValidationSchema = Yup.string()
  .test("domain", "Корабель там 🖕", (value) => {
    return !value?.endsWith(".ru") && !value?.endsWith(".by");
  })
  .matches(
    /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Введіть дійсний email",
  )
  .required("Введіть дійсний email");

export const passwordValidationSchema = Yup.string()
  .min(8, "Пароль повинен мати не менше 8 символів")
  .required("Поле є обов'язковим");
