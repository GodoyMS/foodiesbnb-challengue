import { IRestaurant } from "@/interfaces/Restaurant.interface";
import { createClient } from "@/lib/supabase/component";
import { User } from "@supabase/supabase-js";
import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface RestaurantsContextProps {
  selectedLocation: string;
  setSelectedLocation: (value: string) => void;
  selectedTypeCooking: string;
  setSelectedTypeCooking: (value: string) => void;

  search:string;
    setSearch: (value: string) => void;


  restaurants: IRestaurant[];
  selectedRestaurant:IRestaurant | null;
  setSelectedRestaurant: Dispatch<SetStateAction<IRestaurant | null>>
  isSheetOpen:boolean;
  setIsSheetOpen:Dispatch<SetStateAction<boolean>>
}

const RestaurantsContext = createContext<RestaurantsContextProps | null>(null);

const RestaurantProvider = ({ children,restaurants }: { children: ReactNode,restaurants:IRestaurant[] }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const[search,setSearch]=useState("")
  const [selectedTypeCooking, setSelectedTypeCooking] = useState<string>("");
  const [selectedRestaurant, setSelectedRestaurant] = useState<IRestaurant | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  return (
    <RestaurantsContext.Provider
      value={{
        selectedLocation,
        setSelectedLocation,
        selectedTypeCooking,
        setSelectedTypeCooking,
        restaurants,
        search,
        setSearch,
        selectedRestaurant,
        setSelectedRestaurant,
        isSheetOpen,
        setIsSheetOpen
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
const useRestaurantsContext = () => {
  const context = useContext(RestaurantsContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
export { RestaurantProvider, useRestaurantsContext };
