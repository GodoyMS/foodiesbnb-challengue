import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/config/configEnv'
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabase = createBrowserClient(
   SUPABASE_URL,
    SUPABASE_ANON_KEY
  )

  return supabase
}