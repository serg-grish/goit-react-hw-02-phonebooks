import s from "./ContactListItem.module.css";
import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({
  contactName,
  contactNumber,
  onClickDeleteContact,
}) => {
  return (
    <li className={s.listItem}>
      <span className={s.listItemText}>{contactName}:</span>
      <span className={s.listItemText}>{contactNumber}</span>
      <button className={s.button} type="button" onClick={onClickDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onClickDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
