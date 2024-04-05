import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  return (
    <SearchContext.Provider
      value={{ searchParams, setSearchParams, searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchMenu() {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of ThemeProvier");
  return context;
}
