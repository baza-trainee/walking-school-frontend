import React from "react";
import { ListItem } from "../ListItem/ListItem";
import styles from "./OfferingsList.module.css";
import { v4 as uuidv4 } from "uuid";

export const OfferingsList = (props) => {
  const { list, className } = props;

  return (
    <ul className={`${styles.list} ${className}`}>
      {list.map((item) => (
        <React.Fragment key={uuidv4()}>
          <ListItem text={item} />
        </React.Fragment>
      ))}
    </ul>
  );
};
