import React from "react";
import SubHeader from "../../../../components/AdminPanel/SubHeader/SubHeader";
import ListItem from "../../../../components/AdminPanel/ListItem/ListItem";

import style from "./AdminPartnersList.module.css";

const AdminPartnersList = ({ data, navigateToEdit, deleteFunc, sortingFunc }) => {
  return (
    <div className={style.partners}>
      <div className={style.partners__subHeader}>
        <SubHeader sortFunc={sortingFunc}/>
      </div>
      <div className={style.partners__list}>
        {data.map((partner) => {
          const { id, partner_name, creation_date } = partner;
          return (
            <ListItem
              heading={partner_name}
              date={creation_date}
              key={id}
              navigateToEdit={() =>navigateToEdit(id)}
              deleteFunc={() => deleteFunc(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminPartnersList;
