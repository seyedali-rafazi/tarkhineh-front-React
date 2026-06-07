import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeOneCard } from "../../services/foodService";
import toast from "react-hot-toast";

export default function useRemoveOneCard() {
    const queryClient = useQueryClient();
  
    const { isPending, mutate: removeFood } = useMutation({
      mutationFn: removeOneCard,
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
    return { isPending, removeFood };
  }
  