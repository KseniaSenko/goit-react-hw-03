import { useState } from "react";
import "../components/App.css";
import usersList from "../usersList.json";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (newValue) => {
    setInputValue(newValue);
  };
  // const filterUsers = usersList.filter((user) => {
  //   user.name.toLowerCase().includes(inputValue.toLowerCase());
  // });
  const filteredUsersList = inputValue
    ? usersList.filter((user) =>
        user.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    : usersList;

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <SearchBox text={inputValue} onType={handleInputValue} />
        <ContactList usersList={filteredUsersList} />
      </div>
    </>
  );
};

export default App;
