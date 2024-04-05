import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogout } from "../../services/userAuthService";

export default function useLogout() {
  const queryClient = useQueryClient();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: userLogout,
    onSuccess: () => {
      queryClient.removeQueries();
    },
  });

  return { isPending, logout };
}
