import React from "react";
import { ListItem } from "../ListItem/ListItem";
import styles from "./OfferingsList.module.css";

export const OfferingsList = (props) => {
  const { list } = props;

  return (
    <ul className={styles.list}>
      {list.map((item, idx) => (
        <React.Fragment key={`${item}-${idx}`}>
          <ListItem text={item} />
        </React.Fragment>
      ))}
    </ul>
  );
};
