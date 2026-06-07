import React from "react";
import Footer from "../../ui/Footer";
import Section from "../menu/Section";
import useAllFood from "../../feachers/food/useAllFood";
import Loading from "../../ui/Loading";
import EmptySection from "../../ui/EmptySection";

function SearchResult() {
  const { isLoading, mainFood } = useAllFood();

  return (
    <div className="container xl:max-w-7xl min-h-screen max-w-full">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="min-h-[calc(100vh-91px)]">
          {mainFood.length == 0 ? (
            <div className="flex justify-center items-center w-full min-h-[calc(100vh-91px)]">
              <EmptySection text="غذایی یافت نشد" />
            </div>
          ) : (
            <Section foods={mainFood} />
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default SearchResult;
