import { useMutation, useQueryClient } from "react-query";
import { deleteProject } from "../API/ProjectsAPI";
import { useState } from "react";

export const useDeleteAdminProjects = () => {
  const queryClient = useQueryClient();
  const [deleteError, setDeleteError] = useState(null);

  const { mutate, isLoading: deleteLoadingState } = useMutation(deleteProject, {
    onSuccess: () => {
      queryClient.invalidateQueries("admin-projects");
      setDeleteError(null);
    },
    onError: (error) => {
      setDeleteError(error);
      setTimeout(() => {
        setDeleteError(null);
      }, 2500);
    },
    retry: 1,
  });

  return { mutate, deleteLoadingState, deleteError };
};
