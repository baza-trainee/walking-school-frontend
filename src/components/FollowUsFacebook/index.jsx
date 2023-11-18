import React, { useState, useEffect } from "react";
import "swiper/css/navigation";
import SpinnerLoader from "../Loader/SpinnerLoader";
import { defaultValues } from "./data";
import { Navigation } from "swiper/modules";
import { useMedia } from "../../hooks/useMedia";
import { SmallScreen } from "./SmallScreen";
import { FollowUsSlider } from "./FollowUsSlider";
import Container from "../layout/Container";
import { useQuery } from "@tanstack/react-query";
import { getFacebook } from "../../API/followUsFacebook";

const FollowUsFacebook = () => {
  const { isMobile, isTablet, isDesktop } = useMedia();

  let slidesQuantity;

  const { data, isLoading, error } = useQuery({
    queryKey: ["facebook"],
    queryFn: getFacebook,
  });

  const [values, setValues] = useState([]);

  useEffect(() => {
    if (!isLoading && data) {
      console.log(data);
      const updatedValues = [...defaultValues];
      data.forEach((element, index) => {
        updatedValues[index] = {
          id: element.id,
          image: !element.image[0] ? defaultValues[index].image : element.image,
          wasImage: true,
          index: index,
        };
      });

      setValues(updatedValues);
    }
  }, [isLoading, data]);

  if (isTablet) {
    slidesQuantity = 3;
  } else if (isDesktop) {
    slidesQuantity = 4;
  }

  const content = isMobile ? (
    isLoading ? (
      <div><SpinnerLoader /></div>
    ) : (
      <SmallScreen data={values} />
    )
  ) : isLoading ? (
    <div><SpinnerLoader /></div>
  ) : (
    <FollowUsSlider
      data={values}
      slidesQuantity={slidesQuantity}
      Navigation={Navigation}
    />
  );

  return (
    <Container>{error ? <div>an error occurred</div> : content}</Container>
  );
};

export default FollowUsFacebook;
