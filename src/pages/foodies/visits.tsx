import { GetServerSidePropsContext } from "next";
import React from "react";
import { createClient } from "@/lib/supabase/server-props";
import { getUser } from "@/lib/supabase/getUser";
import { IVisit } from "@/interfaces/Visit.interface";
import VisitsContainer from "@/components/foddies/visits/VisitsContainer";

interface Props {
  visits: IVisit[];
}
const VisitsPage = ({ visits }: Props) => {
  return (
    <div className=" mt-6">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Mis visitas </h1>
        <p className="text-muted-foreground mt-2">
         Visualiza tus visitas a restaurantes agendadas
        </p>
      </div>

      <div>
        <VisitsContainer visits={visits}/>
      </div>
    </div>
  );
};

export default VisitsPage;

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

  const { data, error } = await supabase
    .from("visit")
    .select(
      `
      id,
      visit_date,
      status,
      user:user_id(full_name,avatar_url,id),
      restaurant:restaurant_id(
        *,
        type:type_id(*),
        location:location_id(*)
      ),
      reason_rejected,
      description,
      created_at 
    `
    )
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase Error:", error);
    return { props: { visits: [] } };
  }
  return {
    props: {
      visits: data,
      layout: "foodies",
    },
  };
}
