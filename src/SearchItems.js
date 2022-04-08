import React from "react";

function SearchItems({ search, setSearch }) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input onChange={(e) => setSearch(e.target.value)} value={search} id="searct" type="text" role="searchbox" placeholder="Search Items" />
    </form>
  );
}

export default SearchItems;
