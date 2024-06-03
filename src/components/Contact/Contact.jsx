import css from "../Contact/Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ data: { name, number, id }, onDelete }) => {
  return (
    <div className={css.contact_data}>
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
      <button className={css.contact_btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
