import { useState } from "react";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { validationSchema } from "../validationSchemas/contactSchema";
import { submitContactData } from "../API/contactRequest";

export const useContactForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState(null);

  const mutation = useMutation(submitContactData, {
    onSuccess: () => {
      setIsActive(true);
    },
    onError: (error) => {
      console.error("Error sending contact form data:", error);
      setError(error);
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      surname: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      mutation.mutate(values);
      if (!mutation.isError) {
        resetForm();
      }
    },
  });

  return {
    formik,
    isActive,
    setIsActive,
    error,
  };
};
