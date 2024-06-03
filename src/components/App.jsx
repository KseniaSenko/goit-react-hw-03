import { useEffect, useState } from "react";
import css from "../components/App.module.css";
import usersList from "../usersList.json";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : usersList;
  });
  const handleInputValue = (newValue) => {
    setInputValue(newValue);
  };

  const addUser = (newUser) => {
    setUsers((prevUser) => {
      const updateUsers = [...prevUser, newUser];
      localStorage.setItem("users", JSON.stringify(updateUsers));
      return updateUsers;
    });
  };

  const filteredUsersList = users.filter((user) =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const deleteUser = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={addUser} />
        <SearchBox text={inputValue} onType={handleInputValue} />
        <ContactList users={filteredUsersList} onDelete={deleteUser} />
      </div>
    </>
  );
};

export default App;
