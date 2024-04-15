import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";

function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ search: searchText });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex px-3 py-2 justify-between items-center border border-secondery-400 rounded-lg w-full">
      <input
        className="w-full "
        type="text"
        placeholder="جست و جو"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">
        <CiSearch className="w-6 h-6 text-secondery-600" />
      </button>
    </form>
  );
}

export default SearchInput;
