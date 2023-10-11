import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getHero } from "../../API/hero";
import AdminHeros from "./AdminHeros";
import AddSlideForm from "./slideActions/AddSlideForm";

const AdminHero = () => {
  const [heros, setHeros] = useState([]);

  const location = useLocation();

  const { isLoading, error, data } = useQuery({
    queryKey: ["hero"],
    queryFn: getHero,
  });

  

  let content;

  if (location.pathname.includes("add")) {
    content = <AddSlideForm setHeros={(obj) => setHeros([...heros, obj])} />;
  } else {
    content = <AdminHeros heros={data} setHeros={setHeros} />;
  }

  return content;
};
export default AdminHero;
