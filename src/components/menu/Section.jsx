import React from "react";
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
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 p-4 sm:p-5">
        {foods.map((food, index) => (
          <div
            key={food._id}
            style={{ animationDelay: `${Math.min(index * 60, 300)}ms` }}
            className="border rounded-xl border-secondery-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex overflow-hidden min-h-[7.5rem] animate-fade-in-up opacity-0"
          >
            <Link
              to={`/food-details/${food._id}`}
              className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 overflow-hidden"
            >
              <img
                role="presentation"
                onError={(e) => {
                  e.currentTarget.src = "/styles/default.webp";
                }}
                className="w-full h-full object-cover object-center"
                src={food.imageLink}
                alt={food.title}
              />
            </Link>

            <div className="flex flex-col justify-between gap-2 p-3 flex-1 min-w-0">
              <div className="flex gap-2 justify-between items-start">
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="font-semibold text-sm text-secondery-800 truncate">
                      {food.title}
                    </h3>
                    <span className="hidden sm:block flex-shrink-0">
                      <LikeFood id={food._id} />
                    </span>
                  </div>
                  <p className="hidden sm:block text-xs text-secondery-600 line-clamp-2">
                    {truncateText(food.description, 40)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-end gap-2">
                <div className="hidden sm:flex gap-0.5 text-yellow-400 text-xs">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2 w-full sm:w-auto">
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1.5">
                      {food.discount !== 0 && (
                        <>
                          <s className="text-xs text-secondery-500">
                            {toPersianNumbersWithComma(food.price)}
                          </s>
                          <span className="bg-rose-100 text-rose-500 px-1.5 py-0.5 rounded-full text-xs">
                            {toPersianNumbers(food.discount)}%
                          </span>
                        </>
                      )}
                    </div>
                    <span className="text-sm font-medium text-secondery-800">
                      {food.offPrice === 0
                        ? toPersianNumbersWithComma(food.price)
                        : toPersianNumbersWithComma(food.offPrice)}
                      &nbsp;تومان
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="sm:hidden">
                      <LikeFood id={food._id} />
                    </span>
                    <OrderButton id={food._id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
