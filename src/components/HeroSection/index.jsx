import React from "react";
import HeroSection from "./HeroSection";
import { useQuery } from "@tanstack/react-query";
import { getHero } from "../../API/hero";

const Hero = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["hero"],
    queryFn: getHero,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!!error) {
    return <div>{error.message}</div>;
  }

  return <HeroSection data={data} />;
};

export default Hero;
