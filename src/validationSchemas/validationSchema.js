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
  .min(8, "Пароль має містити мінімум 8 символів")
  .max(14, "Пароль має містити максимум 14 символів")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-_)(.,])[A-Za-z\d@$!%*?&\-_)(.,]{8,14}$/,
    "Повинні використовуватись великі і маленькі літери латинського алфавіту, спеціальні знаки !-_)(., та цифри від 0 до 9",
  )
  .required("Поле є обов'язковим");

export const phoneValidationSchema = Yup.string()
  .max(16, "Невірний формат телефону. Правильний формат: +380 ## ### ####")
  .matches(
    /^\+380 \d{2} \d{3} \d{4}$/,
    "Невірний формат номеру. Приклад: +380 ## ### ####",
  )
  .required("Поле обов'язкове");

export const urlsValidationSchema = Yup.string()
  .min(2, "Поля повинні мати більше 2 символів")
  .matches(
    /^https:\/\/(www\.)/,
    "Поле повинно містити URL в форматі https://www.domain.com",
  )
  .required("Поле обов'язкове до заповнення. Введіть посилання");

export const telegramValidationSchema = Yup.string()
  .min(2, "Поля повинні мати більше 2 символів")
  .matches(/^https?:\/\/(www\.)?t\.me/, "Невірний URL Telegram")
  .required("Поле обов'язкове до заповнення. Введіть посилання");

export const titleValidation = Yup.string()
  .min(5, "Заголовок має містити мінімум 10 символів")
  .max(30, "Заголовок має містити максимум тридцять символів")
  .matches(
    /^[0-9a-zA-Zа-яА-Я-()& \-\p{L}!,";:?./]+$/u,
    "Поле не повинно містити спеціальних символів",
  )
  .required("Поле обов'язкове до заповнення");

export const subtitleValidation = Yup.string()
  .min(10, "Підзаголовок має містити мінімум 10 символів")
  .max(150, "Підзаголовок має містити максимум 150 символів")
  .matches(
    /^[0-9a-zA-Zа-яА-Я-()& \-\p{L}!,";:?./]+$/u,
    "Поле не повинно містити спеціальних символів",
  )
  .required("Поле обов'язкове до заповнення");

export const imageValidation = Yup.string().required(
  "Поле обов'язкове до заповнення",
);
