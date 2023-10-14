import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { createProject, updateProject } from "../API/ProjectsAPI";

export const useProjectForm = (projectId) => {
  const mutation = useMutation(projectId ? updateProject : createProject);

  const formik = useFormik({
    initialValues: {
      title: "",
      link: "",
      description: "",
      publishDate: null,
      eventDate: null,
      ageLimit: null,
      category: null,
      image: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Обов'язкове поле"),
      link: Yup.string().url("Невірний формат посилання"),
      description: Yup.string().required("Обязательное поле"),
      eventDate: Yup.string()
        .matches(
          /^(0[1-9]|1[0-2])\.\d{4} - (0[1-9]|1[0-2])\.\d{4}$/,
          "Невірний формат",
        )
        .required("Обов'язкове поле"),
    }),
    onSubmit: (values) => {
      if (!values.publishDate) {
        const currentDate = new Date();
        values.publishDate = `${String(currentDate.getMonth() + 1).padStart(
          2,
          "0",
        )}.${currentDate.getFullYear()}`;
      }
      mutation.mutate(values);
    },
  });

  return {
    formik,
    mutationStatus: mutation.status,
    mutationError: mutation.error,
  };
};
