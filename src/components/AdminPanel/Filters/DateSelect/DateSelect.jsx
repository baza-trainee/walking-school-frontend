import { useState, useRef } from "react";
import styles from "./DateSelect.module.css";
import datePicker from "../../../../assets/admin/dateSelect/datePicker.svg";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { InputArea } from "./InputArea";
import { ButtonContainer } from "./ButtonContainer";

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};

export const DateSelect = ({
  error = false,
  placeholder,
  className = "",
  onChange,
  id,
  isPublicDate = false,
  value,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [labelContent, setLabelContent] = useState(placeholder);

  const dropDownRef = useRef(null);

  useOutsideClick(dropDownRef, () => setIsExpanded(false));

  const toggleDropDown = () => setIsExpanded(!isExpanded);
  const cancelChanges = () => {
    setStartDate("");
    setEndDate("");
  };

  const applyChanges = () => {
    if (isPublicDate && startDate) {
      setLabelContent(formatDate(startDate));
      if (onChange) {
        onChange(formatDate(startDate));
      }
    } else if (startDate && endDate) {
      setLabelContent(`${formatDate(startDate)} - ${formatDate(endDate)}`);
      if (onChange) {
        onChange(`${formatDate(startDate)} - ${formatDate(endDate)}`);
      }
    }
    setIsExpanded(false);
  };

  return (
    <div
      className={`${styles.dropdown} ${className}`}
      ref={dropDownRef}
      style={{ border: error ? "1px solid red" : "1px solid #7e8492" }}
    >
      <div className={styles.content} onClick={toggleDropDown}>
        {error ? (
          <div className={styles.label}>{error}</div>
        ) : (
          <div className={styles.label}>{labelContent}</div>
        )}
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
              label={`${isPublicDate ? "Дата публікації" : "Початок"}`}
              id={"startdate-" + id}
            />
            {!isPublicDate && (
              <InputArea
                value={endDate}
                onChange={setEndDate}
                label="Кінець"
                id={"endDate-" + id}
              />
            )}
          </div>
          <ButtonContainer onCancel={cancelChanges} onOk={applyChanges} />
        </div>
      </div>
    </div>
  );
};
