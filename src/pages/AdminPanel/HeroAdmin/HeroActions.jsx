import React, { useState } from "react";
import styles from "./Hero.module.css";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import { useNavigate, useParams } from "react-router-dom";
import FormHero from "../../../components/AdminPanel/Hero/Form/FormHero";
import Alert from "../../../components/AdminPanel/Alert/Alert";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getHeroById, postHero, putHero } from "../../../API/hero";
import { blobUrlToBase64 } from "../../../heplers/BlobToBase64";

const HeroActions = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    if (id) {
      setIsOpen(true);
    } else {
      navigate(-1);
    }
  };
  // useEffect(() => {
  //   if (id) {
  //     getHeroData(Number(id))
  //       .then((data) => {
  //         setData(data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // }, [id])

  const { hero, loading, error } = useQuery({
    queryKey: ["hero"],
    queryFn: () => getHeroById(id),
    enabled: !!id,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: id ? putHero : postHero,
    onSettled: () => {
      queryClient.invalidateQueries(["hero"]);
    },
  });

  const handleSubmit = async (values) => {
    const transformedValuesWithId = {
      title: values.title,
      description: values.subtitle,
      image: await blobUrlToBase64(values.image),
      id: id,
    };
    const transformedValues = {
      title: values.title,
      description: values.subtitle,
      image: await blobUrlToBase64(values.image),
    };
    console.log(transformedValuesWithId);
    try {
      if (id) {
        await mutation.mutateAsync(transformedValuesWithId);
      } else {
        await mutation.mutateAsync(transformedValues);
      }
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AdminHeader
        withClose={true}
        heading={id ? "Редагувати слайд" : "Додати слайд"}
        closeFunc={closeHandler}
      />
      <div className={styles.actions}>
        <FormHero
          id={id}
          title={hero ? hero.title : ""}
          subtitle={hero ? hero.description : ""}
          image={hero ? hero.image : ""}
          submitFunc={handleSubmit}
        />
      </div>

      {isOpen && (
        <Alert
          title={"Залишити сторінку"}
          message={
            "Ви дійсно хочете залишити сторінку? Процес редагування буде втрачено"
          }
          setActive={setIsOpen}
          active={isOpen}
          successFnc={() => navigate(-1)}
        />
      )}
    </div>
  );
};

export default HeroActions;
