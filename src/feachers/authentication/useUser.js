import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/userAuthService";

export default function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  const { user , cart } = data || {};
  return { user, cart , isLoading };
}
