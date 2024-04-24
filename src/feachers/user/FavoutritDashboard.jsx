import React from "react";
import { FaArrowRight, FaChevronLeft } from "react-icons/fa6";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchInput from "../../ui/SearchInput";
import EmptySection from "../../ui/EmptySection";
import useUser from "../authentication/useUser";
import FillFavourit from "./FillFavourit";
import PanelSceleton from "../../ui/PanelSceleton";

const categoryGroups = [
  {
    text: "همه",
    category: "all",
    url: "",
    id: 1,
  },
  {
    text: "غذای اصلی",
    category: "mainFood",
    url: "?category=mainFood",
    id: 2,
  },
  {
    text: "پیش غذا",
    category: "appetizer",
    url: "?category=appetizer",
    id: 3,
  },
  {
    text: "دسر",
    category: "dessert",
    url: "?category=dessert",
    id: 4,
  },
  {
    text: "نوشیدنی",
    category: "deinks",
    url: "?category=deinks",
    id: 5,
  },
];

function FavoutritDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isLoading, user } = useUser();

  const handleClick = (p) => {
    if (p == "all") {
      return setSearchParams("");
    }
    setSearchParams({ category: p });
  };

  return isLoading ? (
    <PanelSceleton />
  ) : (
    <div className="flex flex-col items-center gap-5 border border-secondery-500 rounded-lg p-2">
      <button
        onClick={() => navigate(-1)}
        className="lg:hidden flex justify-start w-full"
      >
        <FaArrowRight />
      </button>
      <p className="flex justify-start w-full font-bold text-lg">
        علاقه مندی ها{" "}
      </p>
      <span className="w-full block h-0.5 bg-secondery-500 rounded-full"></span>
      <div className="hidden lg:flex justify-center items-center gap-4 w-full">
        <div className="flex gap-1">
          {categoryGroups.map((categoryGroup) => (
            <div key={categoryGroup.id}>
              <button
                onClick={() => handleClick(categoryGroup.category)}
                className={`bg-rose-100 px-2 py-1.5 rounded-full flex items-center text-xs gap-2 text-secondery-600 ${
                  categoryGroup.url === location.search
                    ? "bg-tint-100 text-tint-600 duration-300"
                    : ""
                }`}
              >
                <span>{categoryGroup.text}</span>
                <FaChevronLeft />
              </button>
            </div>
          ))}
        </div>
        <div>
          <SearchInput />
        </div>
      </div>
      {user.favoriteProduct.length == 0 ? (
        <EmptySection text="شما در حال حاضر هیچ غذای مورد علاقه ای ثبت نکرده اید !" />
      ) : (
        <FillFavourit favourits={user.favoriteProduct} />
      )}
    </div>
  );
}

export default FavoutritDashboard;
