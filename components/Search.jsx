import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.length != 0) {
      router.push(`/search/${searchInput}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-row space-x-2 justify-center"
    >
      <input
        type="text"
        className="focus:outline-none focus:border-gray-300 border-2 border-gray-600 rounded-md bg-gray-900 p-2"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />{" "}
      <button
        onClick={handleSearch}
        className="bg-sky-950 border-2 border-sky-950 px-4 py-3 text-white rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
