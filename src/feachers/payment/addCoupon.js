import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOff } from "../../services/paymantService";
import toast from "react-hot-toast";


export default function useAddOff() {
    const queryClient = useQueryClient();
  
    const { isPending, mutate: addCoupon } = useMutation({
      mutationFn: addOff,
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
    return { isPending, addCoupon };
  }
  