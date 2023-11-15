import React from "react";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import { useNavigate } from "react-router-dom";
import HeroList from "../../../components/AdminPanel/Hero/HeroList/HeroList";

const MainHero = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AdminHeader
        heading={"Hero"}
        withButton={true}
        buttonFunc={() => navigate("add")}
      />
      <HeroList />
    </div>
  );
};

export default MainHero;
