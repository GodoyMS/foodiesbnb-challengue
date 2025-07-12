import RestaurantFilter from "@/components/foddies/restaurants/RestaurantFilter";
import RestaurantGrid from "@/components/foddies/restaurants/RestaurantGrid";
import { RestaurantProvider } from "@/context/restaurantsContext";
import { IRestaurant } from "@/interfaces/Restaurant.interface";
import { getUser } from "@/lib/supabase/getUser";
import { createClient } from "@/lib/supabase/server-props";
import { GetServerSidePropsContext } from "next";
import React from "react";
interface Props {
  restaurants: IRestaurant[];
}

const Index = ({ restaurants }: Props) => {
  return (
    <RestaurantProvider restaurants={restaurants}>
      <RestaurantFilter />
      <RestaurantGrid />
    </RestaurantProvider>
  );
};

export default Index;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const supabase = createClient(context);
  const { user } = await getUser(supabase);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { data, error } = await supabase.from("restaurant").select(`
      id,
      name,
      country,
      address,
      stars,
      image,
      num_reviews,
      location:location_id (id, name),
      type:type_id (id, name)
    `);

  if (error) {
    console.error("Supabase Error:", error);
    return { props: { restaurants: [] } };
  }
  return {
    props: {
      restaurants: data,
      layout: "foodies",
    },
  };
}
