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
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    });
    return { isPending, deleteFood };
  }
  