import { Input } from "@/components/ui/input";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RestaurantLocation from "./RestaurantLocation";
import RestaurantType from "./RestaurantType";
import { useRestaurantsContext } from "@/context/restaurantsContext";
const RestaurantFilter = () => {
  const { search, setSearch } = useRestaurantsContext();

  return (
    <div className=" flex justify-start items-center gap-4">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" flex-1 bg-white "
        placeholder="Buscar restaurantes por nombre..."
      />
      <RestaurantLocation />
      <RestaurantType />
    </div>
  );
};

export default RestaurantFilter;
