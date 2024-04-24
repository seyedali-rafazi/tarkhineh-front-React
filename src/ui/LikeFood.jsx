import React from "react";
import useFavourit from "../feachers/user/favourits/useFavourit";
import useUser from "../feachers/authentication/useUser";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

function LikeFood({ id }) {
  const { userFavourit, isPending } = useFavourit();
  const { user, isLoading } = useUser();

  const handelClick = (id, index) => {
    userFavourit(id);
  };
  return !user ? (
    <button>
      <CiHeart className="w-6 h-6" />
    </button>
  ) : (
    <button onClick={() => handelClick(id)}>
      {user.favoriteProduct.map((favourit) => favourit._id).includes(id) ? (
        <FaHeart className="h-5 w-5 text-primary" />
      ) : (
        <CiHeart className="w-6 h-6" />
      )}
    </button>
  );
}

export default LikeFood;
