import { useQuery } from "@tanstack/react-query";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { getDrink } from "../../services/foodService";

export default function useDrink() {
    const { search } = useLocation();
    const queryObject = queryString.parse(search);
  
    const decodedSearch = decodeURIComponent(search);
    const { data, isLoading } = useQuery({
      queryKey: ["drink", queryObject],
      queryFn: () => getDrink(decodedSearch),
      retry: false,
    });
  
    const drink = data?.products || [];
    return { drink, isLoading };
  }