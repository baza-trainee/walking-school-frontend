import React from "react";
import { ListItem } from "../ListItem/ListItem";
import styles from "./OfferingsList.module.css";

export const OfferingsList = (props) => {
  const { list, className } = props;

  return (
    <ul className={`${styles.list} ${className}`}>
      {list.map((item, idx) => (
        <React.Fragment key={`${item}-${idx}`}>
          <ListItem text={item} />
        </React.Fragment>
      ))}
    </ul>
  );
};
