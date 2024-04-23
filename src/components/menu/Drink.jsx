import React from "react";
import Loading from "../../ui/Loading";
import Filter from "./Filter";
import Section from "./Section";
import useDrink from "./useDrink";
import FoodLoadingSkeleton from "../../ui/FoodLoadingSkeleton";

const drinkGroup = [
  {
    text: "همه",
    foodGroup: "all",
    url: "",
    id: 1,
  },
  {
    text: "نوشیدنی گرم",
    foodGroup: "warmDrink",
    url: "?foodGroup=warmDrink",
    id: 2,
  },
  {
    text: "نوشیدنی سرد",
    foodGroup: "coldDrink",
    url: "?foodGroup=coldDrink",
    id: 3,
  },
];

function Drink() {
  const { drink, isLoading } = useDrink();
  return (
    <div className="container max-w-6xl space-y-6">
      <Filter products={drinkGroup} />
      {isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <FoodLoadingSkeleton key={index} />
          ))}
        </div>
      ) : (
        <Section foods={drink} />
      )}
    </div>
  );
}

export default Drink;
