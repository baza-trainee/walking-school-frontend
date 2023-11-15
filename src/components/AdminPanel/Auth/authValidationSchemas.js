import * as Yup from "yup";
import {
  emailValidationSchema,
  passwordValidationSchema,
} from "../../../validationSchemas/validationSchema";

export const loginValidationSchema = Yup.object({
  email: emailValidationSchema,
  password: passwordValidationSchema,
});

export const forgotValidationSchema = Yup.object({
  email: emailValidationSchema,
});

export const resetValidationSchema = Yup.object().shape({
  password: passwordValidationSchema,
  confirmPass: Yup.string()
    .min(8, "Пароль має містити мінімум 8 символів")
    .oneOf([Yup.ref("password"), null], "Новий пароль не співпадає")
    .required("Підтвердіть пароль"),
});
