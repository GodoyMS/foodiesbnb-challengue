import { ProfileHeader } from "@/components/foddies/profile/ProfileHeader";
import { StatsGrid } from "@/components/foddies/profile/StatsGrid";
import { mockUserProfile } from "@/lib/constants/profile";
import { getUser } from "@/lib/supabase/getUser";
import { createClient } from "@/lib/supabase/server-props";
import { GetServerSidePropsContext } from "next";
import React, { useState } from "react";

const Profile = () => {
  const [profile] = useState(mockUserProfile);

  return (
    <div className=" space-y-8">
      <ProfileHeader profile={profile} />
      <StatsGrid stats={profile.stats} />
    </div>
  );
};

export default Profile;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const supabase = createClient(context);
  const { user } = await getUser(supabase);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: {
      layout: "foodies",
    },
  };
}
