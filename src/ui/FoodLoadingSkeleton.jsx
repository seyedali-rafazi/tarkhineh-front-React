import React from "react";

function FoodLoadingSkeleton() {
  return (
    <div>
      <div className="grid gap-3 grid-cols-1">
        <div className="border rounded-lg border-rose-100 flex min-h-36 animate-pulse">
          <div className="min-w-28 h-full bg-secondery-400 rounded-r-lg"></div>
          <div className="flex flex-col justify-between gap-2 p-2 w-full">
            <div className="flex gap-2 justify-between items-center sm:flex-col">
              <div className="w-full h-6 rounded-full bg-secondery-400"></div>
              <div className="w-full h-6 rounded-full bg-secondery-400"></div>
            </div>

            <div className="w-full h-6 rounded-full bg-secondery-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodLoadingSkeleton;
