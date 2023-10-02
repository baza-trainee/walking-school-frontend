import React, { useRef } from "react";
import { ReactComponent as Icon } from "../../../../assets/admin/search.svg";

import style from "./Search.module.css";

const Search = ({
  isDisabled = false,
  error = false,
  searchWord,
  setSearchWord,
  ...props
}) => {
  const inputClasses = [style.input];
  const buttonClasses = [style.button];

  if (error) {
    inputClasses.push(style.input_error);
    buttonClasses.push(style.button_error);
  }

  const inputClassNames = inputClasses.join(" ");
  const buttonClassNames = buttonClasses.join(" ");

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const submitFunc = (event) => {
    event.preventDefault()
    focusInput()
  }

  return (
    <form onSubmit={submitFunc} role="search" className={style.form} {...props}>
      <input
        data-testid="input"
        disabled={isDisabled}
        type="text"
        className={inputClassNames}
        placeholder="Введіть ключове слово для пошуку"
        onChange={(e) => setSearchWord(e.target.value)}
        value={searchWord}
        ref={inputRef}
      />
      <button className={buttonClassNames} disabled={isDisabled} type="submit">
        <Icon />
      </button>
    </form>
  );
};

export default Search;
