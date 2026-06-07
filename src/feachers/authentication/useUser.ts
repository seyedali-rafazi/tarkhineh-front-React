import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/userAuthService";

export default function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });
  const { user, cart, payments } = data || {};
  return { user, cart, payments, isLoading };
}
