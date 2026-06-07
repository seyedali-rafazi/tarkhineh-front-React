import React from "react";
import useApptizer from "./useApptizer";
import Loading from "../../ui/Loading";
import Filter from "./Filter";
import Section from "./Section";
import FoodLoadingSkeleton from "../../ui/FoodLoadingSkeleton";

const apptizerGroup = [
  {
    text: "همه",
    foodGroup: "all",
    url: "",
    id: 1,
  },
  {
    text: "پیش غذا",
    foodGroup: "specialApptizer",
    url: "?foodGroup=specialApptizer",
    id: 2,
  },
  {
    text: "سوپ ",
    foodGroup: "soup",
    url: "?foodGroup=soup",
    id: 3,
  },
];

function Appetizer() {
  const { apptizer, isLoading } = useApptizer();
  return (
    <div className="container max-w-6xl space-y-6">
      <Filter products={apptizerGroup} />
      {isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <FoodLoadingSkeleton key={index} />
          ))}
        </div>
      ) : (
        <Section foods={apptizer} />
      )}
    </div>
  );
}

export default Appetizer;
