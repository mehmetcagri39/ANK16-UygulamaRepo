import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import "../assets/style/search.scss"

const SearchBar = () => {
  const { setSearch } = useContext(DataContext);
  return (
    <div className="search">
      <h3 style={{ marginLeft: "25px" }}></h3>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search for the recipe you like..."
      />
    </div>
  );
};

export default SearchBar;
