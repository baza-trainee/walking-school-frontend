import { useState, useRef } from "react";
import styles from "./DateSelect.module.css";
import datePicker from "../../../../assets/images/datePicker.svg";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { InputArea } from "./InputArea";
import { ButtonContainer } from "./ButtonContainer";

export const DateSelect = ({ error = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [labelContent, setLabelContent] = useState("Період");
  const dropDownRef = useRef(null);

  useOutsideClick(dropDownRef, () => setIsExpanded(false));

  const toggleDropDown = () => setIsExpanded(!isExpanded);
  const cancelChanges = () => {
    setStartDate("");
    setEndDate("");
  };
  const applyChanges = () => {
    if (startDate && endDate) setLabelContent(`${startDate} - ${endDate}`);
    setIsExpanded(false);
  };

  return (
    <div
      className={styles.dropdown}
      ref={dropDownRef}
      style={{ border: error ? "2px solid red" : "2px solid #7e8492" }}
    >
      <div className={styles.content} onClick={toggleDropDown}>
        <div className={styles.label}>{labelContent}</div>
        <img src={datePicker} alt="dateIcon" className={styles.dateIcon} />
      </div>
      <div
        className={`${styles.dateContainer} ${isExpanded ? styles.active : ""}`}
      >
        <div className={styles.dropDownContent}>
          <h3 className={styles.title}>Введіть дату</h3>
          <div className={styles.inputContainer}>
            <InputArea
              value={startDate}
              onChange={setStartDate}
              label="Початок"
            />
            <InputArea value={endDate} onChange={setEndDate} label="Кінець" />
          </div>
          <ButtonContainer onCancel={cancelChanges} onOk={applyChanges} />
        </div>
      </div>
    </div>
  );
};
