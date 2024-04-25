import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/FormatNumber";
import { truncateText } from "../../utils/truncateText";
import LikeFood from "../../ui/LikeFood";
import { OrderButton } from "../../ui/Button";
import { Link } from "react-router-dom";

function Section({ foods }) {
  return (
    <div>
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 p-5">
        {foods.map((food) => (
          <div
            key={food._id}
            className="border rounded-lg border-rose-100 flex min-h-36"
          >
            <Link to={`/food-details/${food._id}`} className="rounded-r-lg">
              <img
                className="min-w-28 h-full w-full rounded-r-lg"
                src={food.imageLink}
                alt={food.title}
              />
            </Link>
            <div className="flex flex-col justify-between gap-2 p-2 w-full">
              <div className="flex gap-2 justify-between items-center sm:flex-col">
                <div className="flex sm:justify-between sm:items-center w-full h-full">
                  <h3 className="font-semibold text-sm sm:text-lg text-secondery-800">
                    {food.title}
                  </h3>
                  <span className="hidden sm:block">
                    <LikeFood id={food._id} />
                  </span>
                </div>

                <div className="flex justify-end sm:justify-between items-center w-full">
                  <p className="hidden sm:block text-sm text-secondery-600">
                    {truncateText(food.description, 30)}
                  </p>
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-sm text-secondery-600">
                        {food.discount == 0 ? (
                          ""
                        ) : (
                          <s>{toPersianNumbersWithComma(food.price)}</s>
                        )}
                      </span>
                      <span
                        className={`${
                          food.discount == 0
                            ? ""
                            : "bg-rose-200 text-rose-500 px-1 py-0.5 rounded-full text-sm"
                        }`}
                      >
                        {food.discount == 0 ? (
                          ""
                        ) : (
                          <span>{toPersianNumbers(food.discount)}%</span>
                        )}
                      </span>
                    </div>
                    <span>
                      {food.offPrice == 0
                        ? toPersianNumbersWithComma(food.price)
                        : toPersianNumbersWithComma(food.offPrice)}
                      &nbsp;تومان
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="hidden sm:flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="sm:hidden">
                  <LikeFood id={food._id} />
                </span>
                <OrderButton id={food._id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
