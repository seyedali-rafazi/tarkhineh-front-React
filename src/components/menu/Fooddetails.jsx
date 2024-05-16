import React from "react";
import { useNavigate } from "react-router-dom";
import useFoodById from "./useFoodById";
import Footer from "../../ui/Footer";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import LikeFood from "../../ui/LikeFood";
import { toPersianNumbersWithComma } from "../../utils/FormatNumber";
import { OrderButton } from "../../ui/Button";
import Loading from "../../ui/Loading";

function Fooddetails() {
  const { isLoading, product } = useFoodById();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <div className="flex justify-center items-center bg-primary h-16 px-3">
          <button>
            <FaArrowRight
              onClick={() => navigate(-1)}
              className="w-6 h-6 text-secondery-50"
            />
          </button>
          <h2 className="w-full text-center font-bold text-xl text-secondery-50">
            جزيیات محصول
          </h2>
        </div>
        <div className="flex flex-col min-h-96 sm:flex-row justify-center items-center p-5 gap-5">
          <div className="w-48 sm:w-96 rounded-lg">
            <img
              className="w-full h-full rounded-lg object-cover object-center"
              src={product.imageLink}
              alt=""
            />
          </div>
          <div className="flex flex-col w-full gap-3">
            <div className="flex w-full justify-between items-center">
              <h2 className="font-bold text-xl text-secondery-900">
                {product.title}
              </h2>
              <LikeFood id={product._id} />
            </div>
            <div className="flex flex-col border rounded-lg p-3">
              <div className="space-y-2 border-b-2 pb-3">
                <p className="font-bold text-secondery-700">محتویات</p>
                <p className="text-xs text-secondery-600">
                  {product.description}
                </p>
              </div>
              <div className="flex justify-between items-center py-3 border-b-2">
                <p className="font-bold text-secondery-600">امتیاز</p>
                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center py-3">
                <p className="font-bold text-secondery-600">قیمت</p>
                <p>{toPersianNumbersWithComma(product.offPrice)}&nbsp;تومن</p>
              </div>
            </div>
            <div className="flex justify-end">
              <OrderButton id={product._id} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Fooddetails;
