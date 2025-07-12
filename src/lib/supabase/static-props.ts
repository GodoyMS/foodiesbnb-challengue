import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/config/configEnv'
import { createClient as createClientPrimitive } from '@supabase/supabase-js'

export function createClient() {
  const supabase = createClientPrimitive(
   SUPABASE_URL,
   SUPABASE_ANON_KEY
  )

  return supabase
}