import { useState } from "react";
import { useMutation } from "react-query";
import { postHero } from "../API/heroAPI";

export const usePostHeroAdmin = () => {
  const [isPostSuccess, setIsPostSuccess] = useState(false);
  const mutationPost = useMutation(postHero, {
    onSuccess: () => {
      setIsPostSuccess(true);
    },
  });

  return { post: mutationPost, isPostSuccess, setIsPostSuccess };
};
