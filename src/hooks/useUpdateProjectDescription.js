import { useMutation } from "@tanstack/react-query";
import { updateProjectDescription } from "../API/ProjectsDescription";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const useUpdateProjectDescription = () => {
  const [updateError, setUpdateError] = useState();

  const { mutate, isLoading } = useMutation({
    mutationFn: (dataToSend) => updateProjectDescription(dataToSend),
    onError: (error) => {
      setUpdateError(error);
      setTimeout(() => {
        setUpdateError(null);
      }, 2500);
    },
  });

  const formik = useFormik({
    initialValues: {
      description: "",
    },
    validationSchema: Yup.object({
      description: Yup.string().required("Обов'язкове поле"),
    }),
    onSubmit: (values) => {
      const valuesToSend = {
        ...values,
        id: 1,
      };

      mutate(valuesToSend);
    },
  });

  return { updateError, formik, isLoading };
};
