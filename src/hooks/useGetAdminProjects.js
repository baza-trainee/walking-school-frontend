import { useQuery } from "react-query";
import { getAllCards } from "../API/projectsAPI";
import { useState } from "react";

export const useGetAdminProjects = () => {
  const [projectsData, setProjectsData] = useState([]);

  const { error, isLoading, isError } = useQuery({
    queryFn: () => getAllCards(),
    queryKey: ["admin-projects"],
    onSuccess: (payload) => {
      setProjectsData(payload);
    },
    retry: 1,
  });

  return { error, isLoading, isError, projectsData, setProjectsData };
};
