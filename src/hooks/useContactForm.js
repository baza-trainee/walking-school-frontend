import { useState } from "react";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { validationSchema } from "../validationSchemas/contactSchema";
import axios from "axios";

const BASE_URL = "http://localhost:7000/";

export const useContactForm = () => {
  const [isActive, setIsActive] = useState(false);

  const submitContactData = async (data) => {
    const response = await axios.post(BASE_URL + "/contact", data);
    return response.data;
  };

  const mutation = useMutation(submitContactData, {
    onSuccess: () => {
      setIsActive(true);
    },
    onError: (error) => {
      console.error("Error sending contact form data:", error);
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
  };
};
