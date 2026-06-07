import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteFromCart } from "../../services/foodService";

export default function useDeletFromCart() {
    const queryClient = useQueryClient();
  
    const { isPending, mutate: deleteFood } = useMutation({
      mutationFn: deleteFromCart,
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
    return { isPending, deleteFood };
  }
  