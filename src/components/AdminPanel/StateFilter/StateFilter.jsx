import React from "react";
import Select from "react-select";
import { ReactComponent as MainIcon } from "../../../assets/images/filterIcon.svg";

import style from "./StateFilter.module.css";

const options = [
  { value: "all", label: "Всі" },
  { value: "Активний", label: "Активний" },
  { value: "Неактивний", label: "Неактивний" },
];

const customStyles = {
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const StateFilter = ({ currentOption, handleChange, placeholder }) => {
  return (
    <div className={style.wrapper}>
      <Select
        value={currentOption}
        placeholder={placeholder}
        defaultValue={currentOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        menuIsOpen={true}
        className={style.filter}
        classNames={{
          control: (state) => (
            state.isFocused ? `${style.filter__select} ${style.filter__select_focused}` : `${style.filter__select}`
          ),
          menu: () => style.filter__menu,
          menuList: () => style.filter__menuList,
          option: () => style.filter__option,
          placeholder: () => style.filter__placeholder,
          singleValue: () => style.filter__single_value,
        }}
        components={{
          DropdownIndicator: IconClosed,
        }}
      />
    </div>
  );
};

const IconClosed = ({ innerRef, innerProps }) => {
  return (
    <div ref={innerRef} {...innerProps}>
      <MainIcon />
    </div>
  );
};

export default StateFilter;
