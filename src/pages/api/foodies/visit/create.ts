// pages/api/size/update.ts
import createClient from "@/lib/supabase/api";
import { getUser } from "@/lib/supabase/getUser";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const supabase = createClient(req, res);
  const { user } = await getUser(supabase);

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { restaurantId, description,visitDate } = req.body;


  if (!restaurantId || !description|| !visitDate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const { data, error } = await supabase
    .from('visit')
    .insert([
      {
        restaurant_id: restaurantId,
        description: description,
        status: 'Solicitado',
        user_id: user.id,
        visit_date:visitDate
      },
    ])
    .select()
    .single();

  if (error) {
    console.log(error)
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ visit: data });
}
