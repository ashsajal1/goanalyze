import { createClient } from "@supabase/supabase-js";
import { type Database } from '../../database.types'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string);

export default supabase;