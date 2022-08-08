import React, { useState } from 'react';

const SearchBar = ({onSearch}) => {
  const [term, setTerm] = useState("");

  const submitSearch = e => {
    e.preventDefault();
    const searchTerm = term;
    setTerm("");
    onSearch(searchTerm);
  }

  const updateTerm = e => setTerm(e.target.value);

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={submitSearch} >
        <div className="field">
          <label htmlFor="searchTerm">Search for a Video</label>
          <input id="searchTerm" type="text" value={term} onChange={updateTerm} />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;