import { useQuery } from "react-query";
import { getProjectsDescription } from "../API/ProjectsDescription";
import { useState } from "react";

export const useGetProjectsDescription = () => {
  const [localError, setLocalError] = useState();

  const { data } = useQuery({
    queryFn: () => getProjectsDescription(),
    queryKey: ["projects-description"],
    onError: (error) => {
      setLocalError(error);
      setTimeout(() => {
        setLocalError(null);
      }, 2500);
    },
    retry: 1,
  });

  return { data, localError };
};
