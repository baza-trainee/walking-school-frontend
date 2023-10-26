import { useState } from "react";
import { useMutation } from "react-query";
import { editHero } from "../API/heroAPI";

export const useEditHeroAdmin = () => {
  const [isEditSuccess, setIsEditSuccess] = useState(false);
  const mutationEdit = useMutation(editHero, {
    onSuccess: () => {
      setIsEditSuccess(true);
    },
  });

  return { edit: mutationEdit, isEditSuccess, setIsEditSuccess };
};
