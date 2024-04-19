import React from "react";
import { toPersianNumbers } from "../../utils/FormatNumber";
import useAddToCard from "../../feachers/food/addToCart";
import { LoadingBars } from "../../ui/Loading";
import useRemoveOneCard from "../../feachers/food/removeFromCard";
import { GoTrash } from "react-icons/go";

function ModifyQuantity({ quantity, id }) {
  const { addFood, isPending: addLoading } = useAddToCard();
  const { isPending: removeLoading, removeFood } = useRemoveOneCard();
  const handelPLus = () => {
    addFood(id);
  };
  const handelMinus = () => {
    removeFood(id);
  };
  return (
    <div className="flex px-1 rounded-md gap-2 text-lg text-primary bg-gray-200">
      <button onClick={handelPLus}>+</button>
      <span>
        {addLoading || removeLoading ? (
          <LoadingBars width={"20"} />
        ) : (
          toPersianNumbers(quantity)
        )}
      </span>
      <button onClick={handelMinus}>
        {quantity == 1 ? <GoTrash className="w-3 h-3 text-primary" /> : "-"}
      </button>
    </div>
  );
}

export default ModifyQuantity;
