import { useRef, useState } from "react";
import styles from "./CustomSelect.module.css";
import arrowUp from "../../../../assets/images/arrowUp.svg";
import arrowDown from "../../../../assets/images/arrowDown.svg";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";

export const CustomSelect = ({
  placeholder = "Категорія",
  selectPrompt = "Оберіть категорію",
  options,
  error,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropDownRef = useRef(null);

  const handleToggle = () => setIsExpanded((prev) => !prev);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsExpanded(false);
  };

  useOutsideClick(dropDownRef, () => setIsExpanded(false));

  return (
    <div
      className={styles.dropdown}
      ref={dropDownRef}
      style={{
        borderRadius: isExpanded ? "4px 4px 0 0" : "4px",
        borderColor: error ? "red" : "black",
      }}
    >
      <div className={styles.content} onClick={handleToggle}>
        <div
          className={styles.optionLabel}
          style={{
            color: error
              ? "red"
              : isExpanded || selectedOption
              ? "black"
              : "#747474",
          }}
        >
          <div>{isExpanded ? selectPrompt : selectedOption || placeholder}</div>
          <img
            src={isExpanded ? arrowUp : arrowDown}
            alt="arrow"
            className={styles.arrowIcon}
          />
        </div>
      </div>
      {options && (
        <div
          className={`${styles.itemContainer} ${
            isExpanded ? styles.active : ""
          }`}
          style={{
            border: error ? "1px solid red" : "1px solid black",
          }}
        >
          {options.map((item, index) => (
            <div
              key={index}
              className={styles.item}
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};