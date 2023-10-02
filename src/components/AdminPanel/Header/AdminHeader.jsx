import React from "react";
import Close from "./Close/Close";
import Search from "./Search/Search";

import style from "./AdminHeader.module.css";
import AdminButton from "../UI/Button/AdminButton";

/**
 * Header for admin page
 * @param {string} heading string, heading that will be displayed (required)
 * @param {boolean} withSearch bool, adds a search field to the header
 * @param {boolean} withButton bool, adds a button to the header
 * @param {boolean} withClose bool, adds a close button to the header
 * @param {string} searchWord string, will be passed as value to the search field
 * @param {function} setSearchWord function, useState function
 * @param {function} buttonFunc function that will be executed when the button is clicked
 * @param {function} closeFunc function that will be executed when the close button is clicked
 *
 * @example
 * // will return the header with a search field and a button
 * <AdminHeader heading="heading" withSearch withButton />
 *
 * @returns {React.JSX.Element} header component with specified parameters
 */
const AdminHeader = ({
  withSearch = false,
  withButton = false,
  withClose = false,
  heading = "",
  searchWord = "",
  setSearchWord,
  buttonFunc,
  closeFunc,
}) => {
  return (
    <header data-testid="header" className={style.header}>
      <h4 className={style.header__heading}>{heading}</h4>
      <div className={style.header__content}>
        {withSearch ? (
          <Search searchWord={searchWord} setSearchWord={setSearchWord} />
        ) : null}
        {withButton ? (
          <AdminButton
            data-testid="header-button"
            variant="primary"
            tabIndex="0"
            onClick={buttonFunc}
            onKeyDown={buttonFunc}
            className={style.header__button}
          >
            Додати
          </AdminButton>
        ) : null}
        {withClose ? (
          <Close
            data-testid="header-close"
            onClick={closeFunc}
            onKeyDown={closeFunc}
            tabIndex="0"
          />
        ) : null}
      </div>
    </header>
  );
};

export default AdminHeader;
