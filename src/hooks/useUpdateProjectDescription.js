import { useMutation } from "@tanstack/react-query";
import { updateProjectDescription } from "../API/ProjectsDescription";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const useUpdateProjectDescription = (data) => {
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
      description: data?.data?.[0].description || "",
    },
    validationSchema: Yup.object({
      description: Yup.string().required("Обов'язкове поле").min(7).max(150),
    }),
    onSubmit: (values) => {
      const { id } = data.data[0];
      const valuesToSend = {
        ...values,
        id,
      };

      mutate(valuesToSend);
    },
  });

  return { updateError, formik, isLoading };
};
