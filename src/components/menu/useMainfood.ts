import { useQuery } from "@tanstack/react-query";
import { getMainFood } from "../../services/foodService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useMainFood() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);

  const decodedSearch = decodeURIComponent(search);
  const { data, isLoading } = useQuery({
    queryKey: ["mainFood", queryObject],
    queryFn: () => getMainFood(decodedSearch),
    retry: false,
  });


  const mainFood = data?.products || []; 
  return { mainFood, isLoading };
}
