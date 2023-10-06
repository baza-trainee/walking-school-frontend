import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AdminHeros from "./AdminHeros";
import AddSlideForm from "./slideActions/AddSlideForm";

const AdminHero = () => {
  const [heros, setHeros] = useState([]);

  const location = useLocation();
  let content;

  if (location.pathname.includes("add")) {
    content = <AddSlideForm setHeros={(obj) => setHeros([...heros, obj])} />;
  } else {
    content = <AdminHeros heros={heros} setHeros={setHeros} />;
  }

  return content;
};
export default AdminHero;
