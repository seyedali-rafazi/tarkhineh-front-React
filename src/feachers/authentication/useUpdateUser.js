import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { setupdateUser } from "../../services/userAuthService";

export default function useUpdateUser() {
    const queryClient = useQueryClient();
  
    const { isPending: isUpdating, mutate: updateUser } = useMutation({
      mutationFn: setupdateUser,
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
    return { isUpdating, updateUser };
  }
  