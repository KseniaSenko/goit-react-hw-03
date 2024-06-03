import css from "../SearchBox/SearchBox.module.css";

const SearchBox = ({ text, onType }) => {
  const handleChange = (event) => {
    onType(event.target.value);
  };

  return (
    <div className={css.search_box}>
      <span>Find contacts by name</span>
      <input
        className={css.search_input}
        type="text"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
