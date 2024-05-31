import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ usersList }) => {
  return (
    <ul className={css.contact_list}>
      {usersList.map((user) => {
        return <Contact key={user.id} name={user.name} number={user.number} />;
      })}
    </ul>
  );
};

export default ContactList;
