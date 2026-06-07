import React, { createContext, useContext, useState, ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

interface SearchContextValue {
  searchParams: URLSearchParams;
  setSearchParams: ReturnType<typeof useSearchParams>[1];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("q") || ""
  );

  return (
    <SearchContext.Provider
      value={{ searchParams, setSearchParams, searchQuery, setSearchQuery }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchMenu(): SearchContextValue {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchMenu was used outside of SearchProvider");
  }
  return context;
}
