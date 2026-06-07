import React from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { useSearchMenu } from "../../context/SearchContext";

const menuFoods = [
  {
    foodItemName: "غذای اصلی",
    foodItemPhoto: "/styles/main.png",
    pathName: "/branch-menu/mainfood",
  },
  {
    foodItemName: "پیش غذا",
    foodItemPhoto: "/styles/apitizer.png",
    pathName: "/branch-menu/appetizer",
  },
  {
    foodItemName: "دسر",
    foodItemPhoto: "/styles/deser.png",
    pathName: "/branch-menu/dessert",
  },
  {
    foodItemName: "نوشیدنی",
    foodItemPhoto: "/styles/drink.png",
    pathName: "/branch-menu/drink",
  },
];

function MenuItems() {
  const { setSearchParams, searchQuery, setSearchQuery } = useSearchMenu();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ q: searchQuery });
    navigate(`/search-result?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <section className="relative z-0 isolate flex flex-col gap-8 items-center justify-center px-4 py-6">
      <h2 className="font-bold text-lg text-secondery-800 animate-fade-in-up">
        منو رستوران
      </h2>

      <form
        onSubmit={handleSubmit}
        className="lg:hidden flex px-3 py-2 justify-between items-center border border-secondery-300 rounded-lg w-full max-w-sm bg-white shadow-sm animate-fade-in-up animation-delay-100"
      >
        <input
          className="w-full bg-transparent text-sm"
          type="text"
          placeholder="جست و جو"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">
          <CiSearch className="w-5 h-5 text-secondery-600" />
        </button>
      </form>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
        {menuFoods.map((menuFood, index) => (
          <NavLink
            to={menuFood.pathName}
            key={menuFood.foodItemName}
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
            className="group relative overflow-hidden rounded-xl bg-white border border-secondery-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up opacity-0"
          >
            <div className="relative h-28 sm:h-32 bg-gradient-to-b from-tint-100 to-white flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300" />
              <img
                role="presentation"
                onError={(e) => {
                  e.currentTarget.src = "/styles/default.webp";
                }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                src={menuFood.foodItemPhoto}
                alt={menuFood.foodItemName}
              />
            </div>
            <div className="py-3 px-2 text-center border-t border-secondery-200 bg-white">
              <p className="font-semibold text-sm text-secondery-800 group-hover:text-primary transition-colors duration-300">
                {menuFood.foodItemName}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default MenuItems;
