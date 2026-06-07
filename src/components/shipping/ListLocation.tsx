import React from "react";
import useDeletFromCart from "../../feachers/food/deleteFromCart";
import { toPersianNumbers } from "../../utils/FormatNumber";
import ModifyQuantity from "../cart/ModifyQuantity";
import { CartProduct } from "../../types";

interface ListLocationProps {
  products: CartProduct[];
}

function ListLocation({ products }: ListLocationProps) {
  const { deleteFood } = useDeletFromCart();
  const handelDelete = (productId: string) => {
    const data = {
      productId: productId,
    };
    deleteFood(data);
  };

  return (
    <div className="w-full flex flex-col gap-3 border border-secondery-400 rounded-lg p-6 max-h-[30vh] overflow-auto">
      {products.map((product) => (
        <div
          key={product._id}
          className="border border-secondery-400 rounded-lg">
          <div className="flex gap-2 w-full">
            <div className="w-full flex justify-between gap-2 p-3">
              <div className="flex flex-col justify-between items-start w-full">
                <p className="font-semibold text-sm">{product.title}</p>
                <span className="font-normal text-sm text-secondery-600">
                  {toPersianNumbers(
                    product.discount == 0 ? product.price : product.offPrice
                  )}
                  &nbsp;تومان
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                  <ModifyQuantity
                    id={product._id}
                    quantity={product.quantity.quantity}
                  />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default ListLocation;
