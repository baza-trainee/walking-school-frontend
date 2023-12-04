import { useFormik } from "formik";
import { useMutation } from "react-query";
import { createProject, updateProject } from "../API/projectsAPI";
import { useState } from "react";
import { blobUrlToBase64 } from "../heplers/BlobToBase64";
import { projectsAdminSchema } from "../validationSchemas/projectsAdminSchema";
import { dateChecker } from "../heplers/dateChecker";

export const useProjectForm = (projectId, project) => {
  const [localError, setLocalError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);
    setLocalError(null);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleError = (error) => {
    setLocalError(error);
    setTimeout(() => setLocalError(null), 2500);
  };

  const mutation = useMutation(projectId ? updateProject : createProject, {
    onSuccess: handleSuccess,
    onError: (error) => handleError(error),
  });

  const processImage = async (image) => {
    if (image && typeof image === "string" && image.startsWith("blob:")) {
      return await blobUrlToBase64(image);
    }
    return image;
  };

  const prepareSubmissionValues = async (values) => {
    const image = await processImage(values.image);
    const [startDate, endDate] = values.period
      ? values.period.split(" - ")
      : [null, null];
    const valuesToSend = { ...values, period: [startDate, endDate], image };

    if (project) {
      Object.assign(valuesToSend, {
        id: projectId,
        created: project.created,
        is_active: dateChecker(values.period),
        last_modified: new Date().toISOString().slice(0, 10),
      });
    }

    return valuesToSend;
  };

  const formik = useFormik({
    initialValues: {
      title: project?.title || "",
      link: project?.link || "",
      description: project?.description || "",
      period: project?.period?.join(" - ") || null,
      age_category: project?.age_category || null,
      category: project?.category || null,
      image: project?.image || null,
    },
    validationSchema: projectsAdminSchema,
    onSubmit: async (values) => {
      try {
        const valuesToSend = await prepareSubmissionValues(values);
        mutation.mutate(valuesToSend);
      } catch (error) {
        handleError(error);
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
