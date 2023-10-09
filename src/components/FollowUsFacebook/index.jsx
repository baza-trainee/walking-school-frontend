import React from "react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useMedia } from "../../hooks/useMedia";
import { SmallScreen } from "./SmallScreen";
import { FollowUsSlider } from "./FollowUsSlider";
import Container from "../layout/Container";

const FollowUsFacebook = () => {
  const { isMobile, isTablet, isDesktop } = useMedia();
  let slidesQuantity;
  if (isTablet) {
    slidesQuantity = 3;
  } else if (isDesktop) {
    slidesQuantity = 4;
  }
  const content = isMobile ? (
    <SmallScreen />
  ) : (
    <FollowUsSlider slidesQuantity={slidesQuantity} Navigation={Navigation} />
  );

  return <Container>{content}</Container>;
};
export default FollowUsFacebook;
