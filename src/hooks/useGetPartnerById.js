import { useQuery } from "react-query";
import { getPartnerById } from "../API/partners";

export const useGetPartnerById = (id) => {
  const {
    data: partner,
    error,
    isLoading,
  } = useQuery(["partnerId", id], getPartnerById, {
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  return { partner, error, isLoading };
};
