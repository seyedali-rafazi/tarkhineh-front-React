import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa";
import { useLocation, useSearchParams } from "react-router-dom";
import SearchInput from "../../ui/SearchInput";

function Filter({ products }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleClick = (p) => {
    if (p == "all") {
      return setSearchParams("");
    }
    setSearchParams({ foodGroup: p });
  };


  return (
    <div className="flex gap-4 flex-col lg:flex-row justify-center items-center mt-4 px-3">
      <div className="flex justify-start sm:justify-center lg:justify-start gap-3 whitespace-nowrap overflow-scroll overflow-y-hidden no-scrollbar md:overflow-hidden w-screen relative px-3">
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
      <SearchInput/>
    </div>
  );
}

export default Filter;
