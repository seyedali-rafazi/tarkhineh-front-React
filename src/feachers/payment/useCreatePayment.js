import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { userPayment } from "../../services/paymantService";

export default function useCreatePayment() {
  const queryClient = useQueryClient();

  const { isPending, mutate: createPayment } = useMutation({
    mutationFn: userPayment,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      toast.error(err?.message || "خطایی رخ داد");
    },
  });
  return { isPending, createPayment };
}
