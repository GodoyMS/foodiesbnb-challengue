import { useRestaurantsContext } from "@/context/restaurantsContext";
import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { IRestaurant } from "@/interfaces/Restaurant.interface";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import RestaurantVisitSheet from "./RestaurantVisitSheet";

const RestaurantGrid = () => {
  const {
    restaurants,
    search,
    selectedLocation,
    selectedTypeCooking,
    setSelectedRestaurant,
    setIsSheetOpen
  } = useRestaurantsContext();


  const filteredRestaurants = restaurants.filter((restaurant: IRestaurant) => {
    const matchesSearch =
      search.trim() === "" ||
      restaurant.name.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      selectedLocation === "" || restaurant.location.id === selectedLocation;

    const matchesType =
      selectedTypeCooking === "" || restaurant.type.id === selectedTypeCooking;

    return matchesSearch && matchesLocation && matchesType;
  });

  const onClickOpenRegisterVisit = (restaurantId: IRestaurant) => {
    setIsSheetOpen(true);
    setSelectedRestaurant(restaurantId)
  };

  return (
    <>
    <RestaurantVisitSheet/>
      
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredRestaurants.map((e) => (
          <RestaurantCard
            onClick={() => onClickOpenRegisterVisit(e)}
            data={e}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantGrid;
