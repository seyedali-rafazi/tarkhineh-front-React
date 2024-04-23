import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getAllFood } from "../../services/foodService";
import queryString from "query-string";


export default function useAllFood() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);

  const decodedSearch = decodeURIComponent(search);
  const { data, isLoading } = useQuery({
    queryKey: ["mainFood", queryObject],
    queryFn: () => getAllFood(decodedSearch),
    retry: false,
  });


  const mainFood = data?.products || []; 
  return { mainFood, isLoading };
}
