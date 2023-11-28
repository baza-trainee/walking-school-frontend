import * as Yup from "yup";

export const projectsAdminSchema = Yup.object({
  title: Yup.string().required("Обов'язкове поле").max(30),
  link: Yup.string()
    .url("Невірний формат посилання")
    .required("Обов'язкове поле"),
  description: Yup.string().required("Обов'язкове поле").max(120),
  period: Yup.string().required("Обов'язкове поле"),
  age_category: Yup.string().required("Обов'язкове поле"),
  category: Yup.string().required("Обов'язкове поле"),
  image: Yup.string().required(),
});
