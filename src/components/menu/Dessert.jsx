import React from "react";
import Loading from "../../ui/Loading";
import useDessert from "./useDessert";
import Filter from "./Filter";
import Section from "./Section";
import FoodLoadingSkeleton from "../../ui/FoodLoadingSkeleton";

const dessertGroup = [
  {
    text: "همه",
    foodGroup: "all",
    url: "",
    id: 1,
  },
  {
    text: "کیک",
    foodGroup: "cake",
    url: "?foodGroup=cake",
    id: 2,
  },
  {
    text: "بستنی",
    foodGroup: "iceCream",
    url: "?foodGroup=iceCream",
    id: 3,
  },
];

function Dessert() {
  const { dessert, isLoading } = useDessert();
  return (
    <div className="container max-w-6xl space-y-6">
      <Filter products={dessertGroup} />
      {isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <FoodLoadingSkeleton key={index} />
          ))}
        </div>
      ) : (
        <Section foods={dessert} />
      )}
    </div>
  );
}

export default Dessert;
