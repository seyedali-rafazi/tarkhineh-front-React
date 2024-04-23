import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogout } from "../../services/userAuthService";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: userLogout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
    },
  });

  return { isPending, logout };
}
