import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getUserFavourit } from "../../../services/foodService";
import { useParams } from "react-router-dom";

export default function useFavourit() {
  const queryClient = useQueryClient();

  const { isPending, mutate: userFavourit } = useMutation({
    mutationFn: getUserFavourit,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { isPending, userFavourit };
}
