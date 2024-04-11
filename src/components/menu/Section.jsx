import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/FormatNumber";
import { truncateText } from "../../utils/truncateText";

function Section({ foods }) {
  return (
    <div>
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
        {foods.map((food) => (
          <div
            key={food._id}
            className="border rounded-lg border-rose-100 flex min-h-36 ">
            <div className="">
              <img
                className="min-w-28 h-full w-full"
                src={food.imageLink}
                alt={food.title}
              />
            </div>
            <div className="flex flex-col justify-between gap-2 p-2 w-full">
              <div className="flex gap-2 justify-between items-center sm:flex-col">
                <div className="flex sm:justify-between sm:items-center w-full h-full">
                  <h3 className="font-semibold text-sm sm:text-lg text-secondery-800">
                    {food.title}
                  </h3>
                  <span className="hidden sm:block">
                    <CiHeart className="w-6 h-6" />
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
                        }`}>
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
                  <CiHeart className="w-6 h-6" />
                </span>
                <button className="text-xs sm:text-sm md:text:text-md bg-primary text-secondery-50 rounded-lg px-5 py-2">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
