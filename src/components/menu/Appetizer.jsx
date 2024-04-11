import React from "react";
import useApptizer from "./useApptizer";
import Loading from "../../ui/Loading";
import Filter from "./Filter";
import Section from "./Section";

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
  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div className="container max-w-6xl space-y-6">
      <Filter products={apptizerGroup} />
      <Section foods={apptizer} />
    </div>
  );
}

export default Appetizer;
