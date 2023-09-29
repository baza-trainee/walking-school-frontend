import * as Yup from "yup";

export const emailValidationSchema = Yup.string()
  .test("domain", "Корабель там 🖕", (value) => {
    return !value?.endsWith(".ru") && !value?.endsWith(".by");
  })
  .matches(
    /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Введіть дійсний email",
  )
  .required("Поле є обов'язковим");

export const passwordValidationSchema = Yup.string()
  .min(8, "Пароль повинен мати не менше 8 символів")
  .required("Поле є обов'язковим");

export const phoneValidationSchema = Yup.string()
  .max(13, "Невірний формат телефону. Правильний формат: +380 ## ### ####")
  .matches(
    /^\+380 \d{2} \d{3} \d{4}$/,
    "Невірний формат телефону. Правильний формат: +380 ## ### ####",
  )
  .required("Поле є обов'язковим");

export const urlsValidationSchema = Yup.string()
  .min(2, "Поля повинні мати більше 2 символів")
  .matches(
    /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z-/]{2,}$/,
    "Поле повинно містити URL в форматі https://domain.com",
  )
  .required("Поле обов'язкове до заповнення. Введіть посилання");

export const telegramValidationSchema = Yup.string()
  .min(2, "Поля повинні мати більше 2 символів")
  .matches(
    /^https?:\/\/(www\.)?t\.me\/[a-zA-Z0-9_-]{5,32}$/,
    "Невірний URL Telegram",
  )
  .required("Поле обов'язкове до заповнення. Введіть посилання");
