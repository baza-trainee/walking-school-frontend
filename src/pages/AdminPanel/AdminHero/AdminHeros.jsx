import React from "react";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import styles from "./AdminHero.module.css";
import { AddImage } from "./AddImageInput";
import HeroSlide from "./HeroSlide";
import { useNavigate } from "react-router-dom";

const AdminHeros = ({ heros, setHeros }) => {
  const navigate = useNavigate();
  const redirectToAnotherRoute = () => {
    navigate("/admin/hero/add");
  };

  const deleteHeroSlide = (title) => {
    setHeros(() => {
      return heros.filter((hero) => hero.title !== title);
    });
  };

  return (
    <div>
      <AdminHeader
        heading={"Hero"}
        withButton={true}
        buttonFunc={redirectToAnotherRoute}
      />
      {heros.length === 0 && (
        <div className={styles.container}>
          <AddImage activeInput={false} />
        </div>
      )}

      {heros.length !== 0 && (
        <div className={styles.container}>
          {heros.map((hero) => (
            <HeroSlide
              deleteHeroSlide={deleteHeroSlide}
              key={
                hero.selectedFile ? URL.createObjectURL(hero.selectedFile) : ""
              }
              title={hero.title}
              subtitle={hero.subtitle}
              image={
                hero.selectedFile ? URL.createObjectURL(hero.selectedFile) : ""
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default AdminHeros;