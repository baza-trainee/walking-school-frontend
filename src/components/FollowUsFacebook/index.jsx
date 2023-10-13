import React from "react";
import "swiper/css/navigation";
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

  const { data, loading, error } = useQuery({
    queryKey: ["facebook"],
    queryFn: getFacebook,
  });

  if (isTablet) {
    slidesQuantity = 3;
  } else if (isDesktop) {
    slidesQuantity = 4;
  }

  const content = isMobile ? (
    loading ? (
      <div>loading</div>
    ) : (
      <SmallScreen data={data}/>
    )
  ) : loading ? (
    <div>loading</div>
  ) : (
    <FollowUsSlider data={data} slidesQuantity={slidesQuantity} Navigation={Navigation} />
  );

  return <Container>{error ? <div>error occured</div> : content}</Container>;
};

export default FollowUsFacebook;
