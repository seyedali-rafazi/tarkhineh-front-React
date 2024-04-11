import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa";
import { useLocation, useSearchParams } from "react-router-dom";

function Filter({ products }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );
  const location = useLocation();

  const handleClick = (p) => {
    if (p == "all") {
      return setSearchParams("");
    }
    setSearchParams({ foodGroup: p });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ search: searchText });
  };

  return (
    <div className="flex gap-4 flex-col lg:flex-row justify-center items-center mt-4">
      <div className="flex justify-start sm:justify-center lg:justify-start gap-3 whitespace-nowrap overflow-scroll overflow-y-hidden md:overflow-hidden w-screen relative">
        {products.map((product) => (
          <div key={product.id}>
            <button
              onClick={() => handleClick(product.foodGroup)}
              className={`bg-rose-100 px-2 py-1.5 rounded-full flex items-center text-xs gap-2 text-secondery-600 ${
                product.url === location.search
                  ? "bg-tint-100 text-tint-600 duration-300"
                  : ""
              }`}>
              <span>{product.text}</span>
              <FaChevronLeft />
            </button>
          </div>
        ))}
      </div>
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
    </div>
  );
}

export default Filter;
