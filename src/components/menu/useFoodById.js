import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getFoodById } from "../../services/foodService";

export default function useFoodById() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["food", id],
    queryFn: () => getFoodById(id),
    retry: false,
  });

  const { product } = data || {};
  return { product, isLoading };
}
