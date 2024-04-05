import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearchMenu } from "../../context/SearchContext";

const menuFoods = [
  {
    foodItemName: "غذای اصلی",
    foodItemPhoto: "/styles/main.png",
  },
  {
    foodItemName: "پیش غذا",
    foodItemPhoto: "/styles/apitizer.png",
  },
  {
    foodItemName: "دسر",
    foodItemPhoto: "/styles/deser.png",
  },
  {
    foodItemName: "نوشیدنی",
    foodItemPhoto: "/styles/drink.png",
  },
];

function MenuItems() {
  const { searchParams, setSearchParams, searchQuery, setSearchQuery }=useSearchMenu()
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ q: searchQuery });
    navigate(`/menu?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h2 className="font-bold text-xl text-secondery-800">منو رستوران</h2>
      <form
        onSubmit={handleSubmit}
        className="lg:hidden flex px-3 py-2 justify-between items-center border border-secondery-400 rounded-lg w-2/3">
        <input
          className="w-full "
          type="text"
          placeholder="جست و جو"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">
          <CiSearch className="w-6 h-6 text-secondery-600" />
        </button>
      </form>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {menuFoods.map((menuFood) => (
          <div
            key={menuFood.foodItemName}
            className=" w-36 h-32 sm:w-48 sm:h-40  md:w-56 md:h-52 bg-secondery-50 flex flex-col-reverse items-center rounded-b-lg relative ">
            <img
              className="w-24 sm:w-32 lg:w-48 absolute bottom-9 z-50"
              src={menuFood.foodItemPhoto}
              alt=""
            />
            <div className="h-2/3 w-full bg-primary rounded-t-lg rounded-b-lg shadow-xl relative flex justify-center items-center">
              <p className="px-5 py-2 absolute bg-secondery-50 rounded-lg -bottom-2 ">
                {menuFood.foodItemName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuItems;
