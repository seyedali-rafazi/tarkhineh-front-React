import React from "react";
import Filter from "./Filter";
import Section from "./Section";
import useMainFood from "./useMainfood";
import Loading from "../../ui/Loading";
import FoodLoadingSkeleton from "../../ui/FoodLoadingSkeleton";

const mainFoodGroup = [
  {
    text: "همه",
    foodGroup: "all",
    url: "",
    id: 1,
  },
  {
    text: "غذاهای ایرانی",
    foodGroup: "persianFood",
    url: "?foodGroup=persianFood",
    id: 2,
  },
  {
    text: "غذاهای غیر ایرانی",
    foodGroup: "notPersianFood",
    url: "?foodGroup=notPersianFood",
    id: 3,
  },
  {
    text: "پیتزاها",
    foodGroup: "pizza",
    url: "?foodGroup=pizza",
    id: 4,
  },
  {
    text: "ساندویچ",
    foodGroup: "sandawich",
    url: "?foodGroup=sandawich",
    id: 5,
  },
];

function MainFood() {
  const { mainFood, isLoading } = useMainFood();
  return (
    <div className="container max-w-6xl space-y-6">
      <Filter products={mainFoodGroup} />
      {isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <FoodLoadingSkeleton key={index} />
          ))}
        </div>
      ) : (
        <Section foods={mainFood} />
      )}
    </div>
  );
}

export default MainFood;
