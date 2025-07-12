"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRestaurantsContext } from "@/context/restaurantsContext";
import { createClient } from "@/lib/supabase/component";
import { MapIcon } from "lucide-react";
import { useEffect, useState } from "react";

type Location = {
  id: string;
  name: string;
};

const RestaurantLocation = () => {
  const { setSelectedLocation, selectedLocation } = useRestaurantsContext();
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();
  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase
        .from("location")
        .select("id, name")
        .order("name", { ascending: true });

      if (!error && data) {
        setLocations(data);
      }

      setLoading(false);
    };

    fetchLocations();
  }, []);

  return (
    <div>
      <Select
        onValueChange={(value) => setSelectedLocation(value)}
        value={selectedLocation || ""}
      >
        <SelectTrigger  className="  bg-white w-[180px]">
         <MapIcon className=" text-foreground"/> <SelectValue placeholder={loading ? "Cargando..." : "Ubicación"} />
        </SelectTrigger>
        <SelectContent>
          {locations.map((loc) => (
            <SelectItem key={loc.id} value={loc.id}>
              {loc.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RestaurantLocation;
