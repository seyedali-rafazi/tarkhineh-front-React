import React from "react";
import Filter from "./Filter";
import Section from "./Section";
import useMainFood from "./useMainfood";
import Loading from "../../ui/Loading";

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
  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div className="container max-w-6xl space-y-6">
      <Filter products={mainFoodGroup} />
      <Section foods={mainFood} />
    </div>
  );
}

export default MainFood;
