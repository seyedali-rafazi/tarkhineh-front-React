import React from "react";
import Loading from "../../ui/Loading";
import useDessert from "./useDessert";
import Filter from "./Filter";
import Section from "./Section";

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
  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div className="container max-w-6xl space-y-6">
      <Filter products={dessertGroup} />
      <Section foods={dessert} />
    </div>
  );
}

export default Dessert;
