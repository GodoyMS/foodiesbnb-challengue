// lib/supabase/getAdminUser.ts
import { SupabaseClient } from "@supabase/supabase-js";


export async function getUser(supabase:SupabaseClient<any, "public", any>) {

  const {
    data: { session  },
    error,
  } =  await supabase.auth.getSession();
  

  if (error || !session?.user) return { user: null };


  return { user: session.user };

}
