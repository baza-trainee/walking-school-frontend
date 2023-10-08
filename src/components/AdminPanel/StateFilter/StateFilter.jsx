import React from "react";
import Select from "react-select";

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
  dropdownIndicator: () => ({
    display: "none",
  }),
};

/**
 * StateFilter component
 * @example
 * const Component = () => {
 *  const [filter, setFilter] = useState({ value: "all", label: "Всі" });
 * 
 *  const filteredData = data.filter((project) => {
    if (filter.value === "all") return true;
    return data.status === filter.value;
    });

    const handleChange = (newFilter) => {
    console.log(filter);
    return setFilter(newFilter);
    };

    return (
      <>
        <StateFilter
          currentOption={filter.value}
          placeholder={filter.label}
          handleChange={handleChange}
        />
        {someList}
      </>
    )
 * }
 */
const StateFilter = ({ currentOption, handleChange, placeholder }) => {
  return (
    <div className={style.wrapper} >
      <Select
        openMenuOnClick={true}
        closeMenuOnSelect={true}
        value={currentOption}
        placeholder={placeholder}
        defaultValue={currentOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
        unstyled={true}
        className={style.filter}
        classNames={{
          control: (state) =>
            state.menuIsOpen
              ? `${style.filter__select} ${style.filter__select_focused}`
              : `${style.filter__select}`,
          menu: () => style.filter__menu,
          menuList: () => style.filter__menuList,
          option: () => style.filter__option,
          placeholder: () => style.filter__placeholder,
          singleValue: () => style.filter__single_value,
          valueContainer: () => style.filter__valueContainer,
          input: () => style.filter__input,
          indicatorsContainer: () => style.filter__dropdownIcon,
        }}
      />
    </div>
  );
};

export default StateFilter;
