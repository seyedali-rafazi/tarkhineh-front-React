import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addToCard } from "../../services/foodService";

export default function useAddToCard() {
  const queryClient = useQueryClient();

  const { isPending, mutate: addFood } = useMutation({
    mutationFn: addToCard,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err: Error) => {
      toast.error(err.message || "خطایی رخ داد");
    },
  });
  return { isPending, addFood };
}
