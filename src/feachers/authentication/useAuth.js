import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getOtp } from "../../services/userAuthService";
import toast from "react-hot-toast";

export default function useGetOtp() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createUser } = useMutation({
    mutationFn: getOtp,
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
  return { isCreating, createUser };
}
