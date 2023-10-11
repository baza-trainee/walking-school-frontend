import React, { useState } from "react";
import AdminHeader from "../../../../components/AdminPanel/Header/AdminHeader";
import AdminInput from "../../../../components/AdminPanel/Input/AdminInput";
import styles from ".././AdminHero.module.css";
import { AddImage } from "../AddImageInput";
import { ReactComponent as Clean } from "../../../../assets/admin/hero/input-clean.svg";
import AdminButton from "../../../../components/AdminPanel/UI/Button/AdminButton";
import { SelectedImageField } from "../SelectedImageField";
import Alert from "../../../../components/AdminPanel/Alert/Alert";
import { redirect, useNavigate } from "react-router-dom";
import { useMutation, QueryClient } from "@tanstack/react-query";
import { putHero } from "../../../../API/hero";

const EditSlideForm = ({ slide }) => {
  const [title, setTitle] = useState(slide.title);
  const [subtitle, setSubtitle] = useState(slide.subtitle);
  const [selectedFile, setSelectedFile] = useState(slide.selectedFile);

  const [isSuccesAlert, setIsSuccesAlert] = useState(false);
  const [isQuestionAlert, setIsQuestionAlert] = useState(false);

  const navigate = useNavigate();
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubtitleChange = (e) => {
    setSubtitle(e.target.value);
  };

  const editedSlide = {
    title: title,
    subtitle: subtitle,
    selectedFile: selectedFile,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // mutation.mutate({
    //   title: title,
    //   description: subtitle,
    //   image: selectedFile,
    // });

    // if (checkObj(editedSlide)) {
    //   setHeros(editedSlide);
    //   cleanState();
    //   navigate("/admin/hero");
    // }
  };
  const cleanState = () => {
    setTitle("");
    setSubtitle("");
    setSelectedFile(null);
  };

  const mutation = useMutation(putHero, {onSuccess: () => {
    QueryClient.invalidateQueries("hero");
    navigate("/admin/hero");
  }})

  return (
    <form onSubmit={handleSubmit}>
      <AdminHeader heading={"Редагувати слайд"} withClose={true} />
      <div className={styles.container}>
        <AdminInput
          placeholder="Заголовок"
          variant="admin"
          icon={<Clean />}
          className={styles.input}
          value={title}
          onChange={handleTitleChange}
        />
        <AdminInput
          placeholder="Підзаголовок"
          className={styles.input}
          icon={<Clean />}
          value={subtitle}
          onChange={handleSubtitleChange}
        />
        {selectedFile == null ? (
          <AddImage
            activeInput={true}
            selectedFile={selectedFile}
            onFileChange={(file) => setSelectedFile(file)}
          />
        ) : (
          <SelectedImageField
            url={selectedFile ? URL.createObjectURL(selectedFile) : ""}
            deleteImg={() => setSelectedFile(null)}
          />
        )}

        <div className={styles.buttonsWrapper}>
          <AdminButton
            variant="secondary"
            onClick={() => setIsQuestionAlert(true)}
          >
            Скасувати
          </AdminButton>
          <AdminButton
            variant="primary"
            type="submit"
            onClick={() => {
              if (checkObj(editedSlide)) {
                setIsSuccesAlert(true);
              }
            }}
          >
            Зберегти
          </AdminButton>
        </div>
      </div>
      <Alert
        type="success"
        title="Успіх!"
        message="Слайд додано"
        setActive={setIsSuccesAlert}
        active={isSuccesAlert}
      />
      <Alert
        type="question"
        title="Скасувати зміни"
        message="Скасувати зміни
      Ви точно хочете скасувати зміни? Вони не будуть збережені"
        setActive={setIsQuestionAlert}
        active={isQuestionAlert}
        successFnc={() => {
          cleanState();
          redirect("/admin/hero");
        }}
      />
    </form>
  );
};
export default EditSlideForm;

function checkObj(obj) {
  let res;
  if (obj.title === "" || obj.subtitle === "" || obj.selectedFile === null) {
    res = false;
  } else {
    res = true;
  }
  return res;
}
