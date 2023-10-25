import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { createProject, updateProject } from "../API/ProjectsAPI";
import { formatDate } from "../components/AdminPanel/Filters/DateSelect/DateSelect";

export const useProjectForm = (projectId) => {
  const mutation = useMutation(projectId ? updateProject : createProject);

  const formik = useFormik({
    initialValues: {
      title: "",
      link: "",
      description: "",
      publishDate: null,
      period: null,
      age_category: null,
      category: null,
      image: null,
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
    onSubmit: (values) => {
      if (!values.publishDate) {
        const currentDate = new Date();
        values.publishDate = formatDate(currentDate);
      }

      console.log(values);
      mutation.mutate(values);
    },
  });

  return {
    formik,
    mutationStatus: mutation.isLoading,
    mutationError: mutation.error,
  };
};
