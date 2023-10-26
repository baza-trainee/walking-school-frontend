import * as Yup from "yup";
import {
  imageValidation,
  subtitleValidation,
  titleValidation,
} from "../../../validationSchemas/validationSchema";

export const heroValidation = Yup.object({
  title: titleValidation,
  description: subtitleValidation,
  image: imageValidation,
});
