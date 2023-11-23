import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AdminHeader from "../../../components/AdminPanel/Header/AdminHeader";
import AdminPartnersList from "./AdminPartnersList/AdminPartnersList";
import { useNavigate } from "react-router-dom";
import SpinnerLoader from "../../../components/Loader/SpinnerLoader";
import { deletePartner, getPartners } from "../../../API/partners";
import ErrorModal from "../../../components/AdminPanel/ErrorModal/ErrorModal";

import style from "./AdminPartners.module.css";

// const data = [
//   {
//     id: 1,
//     creation_date: "10.11.2022",
//     partner_name: "Google",
//   },
//   {
//     id: 2,
//     creation_date: "01.09.2023",
//     partner_name: "Facebook",
//   },
//   {
//     id: 3,
//     creation_date: "15.06.2022",
//     partner_name: "Microsoft",
//   },
//   {
//     id: 4,
//     creation_date: "22.03.2022",
//     partner_name: "Nike",
//   },
//   {
//     id: 5,
//     creation_date: "30.08.2022",
//     partner_name: "Фонд Сергія Притули",
//   },
//   {
//     id: 6,
//     creation_date: "18.07.2023",
//     partner_name: "Cільпо",
//   },
//   {
//     id: 7,
//     creation_date: "05.04.2021",
//     partner_name: "Multiplex",
//   },
// ];

const AdminPartners = () => {
  const [searchWord, setSearchWord] = useState("");
  const [reversed, setReversed] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["partners"],
    queryFn: () => getPartners(),
  });

  const [values, setValues] = useState([]);

  useEffect(() => {
    if (!isLoading && data) {
      console.log(data);
      setValues(data);
    }
  }, [isLoading, data]);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => deletePartner(id),
    mutationKey: ["partners"],
    onSuccess: () => queryClient.invalidateQueries(["partners"]),
  });

  const preSorted = values?.length > 1 ? values?.sort((a, b) => {
    a = a.created.split(".").reverse().join("");
    b = b.created.split(".").reverse().join("");
    return a > b ? 1 : a < b ? -1 : 0;
  }) : values;

  const sorted = reversed ? preSorted.reverse() : preSorted;

  const filteredProjects = sorted.filter((element) =>
    element.title.toLowerCase().includes(searchWord.toLowerCase()),
  );

  const reverseList = () => {
    setReversed(!reversed);
  };
  console.log(data);

  const navigateToAdd = () => {
    navigate(`/admin/partners/add`);
  };

  const navigateToEdit = (partnerId) => {
    navigate(`/admin/partners/edit/${partnerId}`);
  };

  const deleteFunc = (partnerId) => {
    mutation.mutateAsync(partnerId);
  };


  const DisplayedComponent = () => {
    if (isLoading || mutation.isLoading) {
      return (
        <div className={style.centered}>
          <SpinnerLoader />
        </div>
      );
    }

    if (error || mutation.isError) {
      let message = "";
      if (error) {
        message = `Не вдалось завантажити партнерів: ${error.message}. Спробуйте будь ласка пізніше.`;
      }
      if (mutation.isError) {
        message = `Не вдалось видалити партнера: ${mutation.error.message}. Спробуйте будь ласка пізніше.`;
      }
      return <ErrorModal message={message} className={style.centered} />;
    }

    if (values === undefined || Object.keys(values).length === 0) {
      return <div>data is empty or undefined</div>;
    } else if (!error) {
      return (
        <AdminPartnersList
          sortingFunc={reverseList}
          data={filteredProjects}
          deleteFunc={deleteFunc}
          navigateToEdit={navigateToEdit}
        />
      );
    }
  };

  return (
    <div className={style.partners}>
      <AdminHeader
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        withSearch
        withButton
        buttonFunc={navigateToAdd}
        heading="Партнери"
      />
      <div className={style.partners__content}>
        <DisplayedComponent />
      </div>
    </div>
  );
};

export default AdminPartners;
