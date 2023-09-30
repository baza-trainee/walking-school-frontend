import React, { useState } from "react";
import { ReactComponent as Icon } from "../../../../assets/admin/search.svg";

import style from "./Search.module.css";

const Search = ({
  isDisabled = false,
  error = false,
  searchFunc = () => {},
  ...props
}) => {
  const [searchWord, setSearchWord] = useState("");

  const handleChange = (event) => {
    setSearchWord(event.target.value);
    console.log(searchWord);
  };

  const inputClasses = [style.input];
  const buttonClasses = [style.button];

  if (error) {
    inputClasses.push(style.input_error);
    buttonClasses.push(style.button_error);
  }

  const inputClassNames = inputClasses.join(" ");
  const buttonClassNames = buttonClasses.join(" ");

  return (
    <form onSubmit={searchFunc} className={style.form} {...props}>
      <input
        disabled={isDisabled}
        type="text"
        className={inputClassNames}
        placeholder="Введіть ключове слово для пошуку"
        onChange={handleChange}
      />
      <button className={buttonClassNames} disabled={isDisabled} type="submit">
        <Icon />
      </button>
    </form>
  );
};

export default Search;
