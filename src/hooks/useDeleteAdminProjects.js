import { useMutation, useQueryClient } from "react-query";
import { deleteProject } from "../API/ProjectsAPI";

export const useDeleteAdminProjects = () => {
  const queryClient = useQueryClient();

  const { mutate, error, isLoading } = useMutation(deleteProject, {
    onSuccess: () => {
      queryClient.invalidateQueries("admin-projects");
    },
    retry: 1,
  });

  return { mutate, error, isLoading };
};
