import { getUser } from '@/lib/supabase/getUser';
import { createClient } from '@/lib/supabase/server-props';
import { GetServerSidePropsContext } from 'next';
import React from 'react'

const favorites = () => {
  return (
    <div></div>
  )
}

export default favorites

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
  
 
    return {
      props: {
        layout: "foodies",
      },
    };
}
