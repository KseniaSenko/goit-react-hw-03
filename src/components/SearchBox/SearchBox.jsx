const SearchBox = ({ text, onType }) => {
  const handleChange = (event) => {
    onType(event.target.value);
  };

  return (
    <div>
      <span>Find contacts by name</span>

      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
