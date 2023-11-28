import { useState } from "react";
import { useMutation } from "react-query";
import { putPartner } from "../API/partners";

export const useEditPartner = () => {
  const [isEditSuccess, setIsEditSuccess] = useState(false);
  const mutationEdit = useMutation(putPartner, {
    onSuccess: () => {
      setIsEditSuccess(true);
    },
  });

  return { edit: mutationEdit, isEditSuccess, setIsEditSuccess };
};
