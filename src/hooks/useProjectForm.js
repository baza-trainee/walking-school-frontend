import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { createProject, updateProject } from "../API/projectsAPI";
import { useState } from "react";
import { blobUrlToBase64 } from "../heplers/BlobToBase64";

export const useProjectForm = (projectId, project) => {
  const [localError, setLocalError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const { title, link, category, description, image, period, age_category } =
    project ? project : {};

  const mutation = useMutation(projectId ? updateProject : createProject, {
    onSuccess: () => {
      setShowSuccess(true);
      setLocalError(null);

      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    },
    onError: (error) => {
      setLocalError(error);
      setTimeout(() => {
        setLocalError(null);
      }, 2500);
    },
  });

  const formik = useFormik({
    initialValues: {
      title: title || "",
      link: link || "",
      description: description || "",
      period: period?.join(" - ") || null,
      age_category: age_category || null,
      category: category || null,
      image: image || null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Обов'язкове поле"),
      link: Yup.string()
        .url("Невірний формат посилання")
        .required("Обов'язкове поле"),
      description: Yup.string().required("Обов'язкове поле"),
      period: Yup.string().required("Обов'язкове поле"),
      age_category: Yup.string().required("Обов'язкове поле"),
      category: Yup.string().required("Обов'язкове поле"),
      image: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      try {
        if (
          values.image &&
          typeof values.image === "string" &&
          values.image.startsWith("blob:")
        ) {
          values.image = await blobUrlToBase64(values.image);
        }

        const [startDate, endDate] = values.period
          ? values.period.split(" - ")
          : [null, null];
        const valuesToSend = { ...values, period: [startDate, endDate] };

        if (project) {
          valuesToSend.id = projectId;
          valuesToSend.created = project.created;
          valuesToSend.is_active = project.is_active;

          const currentDate = new Date();
          const currentMonth = String(currentDate.getMonth() + 1).padStart(
            2,
            "0",
          );
          const currentYear = currentDate.getFullYear();

          valuesToSend.last_modified = `${currentMonth}-${currentYear}`;
        }

        mutation.mutate(valuesToSend);
      } catch (error) {
        setLocalError(error);
      }
    },
  });

  return {
    formik,
    mutationStatus: mutation.isLoading,
    localError,
    isLoading: mutation.isLoading,
    showSuccess,
    setShowSuccess,
  };
};
