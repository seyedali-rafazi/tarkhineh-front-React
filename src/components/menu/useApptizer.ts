import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { getApptizer } from "../../services/foodService";
import { useQuery } from "@tanstack/react-query";

export default function useApptizer() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);

  const decodedSearch = decodeURIComponent(search);
  const { data, isLoading } = useQuery({
    queryKey: ["appetizer", queryObject],
    queryFn: () => getApptizer(decodedSearch),
    retry: false,
  });

  const apptizer = data?.products || [];
  return { apptizer, isLoading };
}
