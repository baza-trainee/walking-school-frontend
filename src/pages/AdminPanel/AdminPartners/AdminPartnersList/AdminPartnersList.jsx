import React from "react";
import SubHeader from "../../../../components/AdminPanel/SubHeader/SubHeader";
import ListItem from "../../../../components/AdminPanel/ListItem/ListItem";

import style from "./AdminPartnersList.module.css";

const AdminPartnersList = ({
  data,
  navigateToEdit,
  deleteFunc,
  sortingFunc,
}) => {
  return (
    <div className={style.partners}>
      <div className={style.partners__subHeader}>
        <SubHeader sortFunc={sortingFunc} />
      </div>
      <div className={style.partners__list}>
        {data.map((partner) => {
          const { id, title, created } = partner;
          return (
            <ListItem
              heading={title}
              date={created}
              key={id}
              navigateToEdit={() => navigateToEdit(id)}
              deleteFunc={() => deleteFunc(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminPartnersList;
