"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRestaurantsContext } from "@/context/restaurantsContext";
import { ITypeCooking } from "@/interfaces/TypeCooking";
import { createClient } from "@/lib/supabase/component";
import { FilterIcon } from "lucide-react";
import { useEffect, useState } from "react";



const RestaurantType = () => {
  const { setSelectedTypeCooking, selectedTypeCooking } = useRestaurantsContext();
  const [typeCooking, setTypeCooking] = useState<ITypeCooking[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();
  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase
        .from("type_cooking")
        .select("id, name")
        .order("name", { ascending: true });

      if (!error && data) {
        setTypeCooking(data);
      }
      setLoading(false);
    };

    fetchLocations();
  }, []);

  return (
    <div>
      <Select
        onValueChange={(value) => setSelectedTypeCooking(value)}
        value={selectedTypeCooking || ""}
      >
        <SelectTrigger  className="  bg-white w-[180px]">
         <FilterIcon className=" text-foreground"/> <SelectValue placeholder={loading ? "Cargando..." : "Tipo de cocina"} />
        </SelectTrigger>
        <SelectContent>
          {typeCooking.map((loc) => (
            <SelectItem key={loc.id} value={loc.id}>
              {loc.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RestaurantType;
