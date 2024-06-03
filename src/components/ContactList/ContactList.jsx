import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ users, onDelete }) => {
  return (
    <ul className={css.contact_list}>
      {users.map((user) => (
        <li className={css.contact_item} key={user.id}>
          <Contact data={user} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
