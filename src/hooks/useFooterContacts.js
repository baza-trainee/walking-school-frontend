import { useQuery } from "react-query";
import { getFooterContacts } from "../API/FooterContacts";

export const useFooterContacts = () => {
  const {
    data: contacts,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getFooterContacts(),
    queryKey: ["footer-contacts"],
  });

  return { contacts, error, isLoading, isError };
};
