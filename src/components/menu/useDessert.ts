import { useQuery } from "@tanstack/react-query";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { getDessert } from "../../services/foodService";

export default function useDessert() {
    const { search } = useLocation();
    const queryObject = queryString.parse(search);
  
    const decodedSearch = decodeURIComponent(search);
    const { data, isLoading } = useQuery({
      queryKey: ["dessert", queryObject],
      queryFn: () => getDessert(decodedSearch),
      retry: false,
    });
  
    const dessert = data?.products || [];
    return { dessert, isLoading };
  }
  