import React from 'react';

const SearchForm = ({ handleSubmit, searchQuery, setSearchQuery }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your query here, please"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      <button type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;