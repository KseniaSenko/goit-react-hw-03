import css from "../Contact/Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number }) => {
  return (
    <li className={css.contact_item}>
      <div className={css.contact_info}>
        <span className={css.contact_name}>
          <FaUser className={css.contact_icon} size={16} />
          {name}
        </span>
        <a href={`tel:${number}`}>
          <FaPhoneAlt className={css.contact_icon} size={16} />
          {number}
        </a>
      </div>
      <button type="button" className={css.contact_btn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
