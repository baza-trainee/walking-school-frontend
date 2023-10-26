import { useQuery } from "react-query";
import { getHeroById } from "../API/heroAPI";

export const useGetHeroById = (id) => {
  const {
    data: hero,
    error,
    isLoading,
  } = useQuery(["heroId", id], getHeroById, {
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  return { hero, error, isLoading };
};
