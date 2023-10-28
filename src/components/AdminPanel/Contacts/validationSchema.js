import * as Yup from "yup";
import {
  emailValidationSchema,
  phoneValidationSchema,
  telegramValidationSchema,
  urlsValidationSchema,
} from "../../../validationSchemas/validationSchema";

export const validationSchema = Yup.object({
  phone: phoneValidationSchema,
  contact_email: emailValidationSchema,
  answer_email: emailValidationSchema,
  facebook: urlsValidationSchema,
  linkedin: urlsValidationSchema,
  telegram: telegramValidationSchema,
});
