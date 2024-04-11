import React from "react";
import Loading from "../../ui/Loading";
import Filter from "./Filter";
import Section from "./Section";
import useDrink from "./useDrink";

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
  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div className="container max-w-6xl space-y-6">
      <Filter products={drinkGroup} />
      <Section foods={drink} />
    </div>
  );
}

export default Drink;
