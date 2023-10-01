import React from "react";
import Close from "./Close/Close";
import Search from "./Search/Search";
import PropTypes from "prop-types";

import style from "./AdminHeader.module.css";
import AdminButton from "../UI/Button/AdminButton";

/**
 * Header for admin page
 * @param {string} heading string, heading that will be displayed (required)
 * @param {boolean} withSearch bool, adds a search field to the header
 * @param {boolean} withButton bool, adds a button to the header
 * @param {boolean} withClose bool, adds a close button to the header
 *
 * @example
 * // will return the header with a search field and a button
 * <AdminHeader heading="heading" withSearch withButton />
 *
 * @returns {React.JSX.Element} header component with specified parameters
 */
const AdminHeader = (props) => {
  const { withSearch, withButton, withClose, heading } = props;
  return (
    <header className={style.header}>
      <div className={style.header__heading}>{heading}</div>
      <div className={style.header__content}>
        {withSearch ? <Search /> : null}
        {withButton ? (
          <AdminButton
            variant="primary"
            tabindex="0"
            className={style.header__button}
          >
            Додати
          </AdminButton>
        ) : null}
        {withClose ? <Close tabindex="0" /> : null}
      </div>
    </header>
  );
};

AdminHeader.defaultProps = {
  withSearch: false,
  withButton: false,
  withClose: false,
};

export default AdminHeader;
