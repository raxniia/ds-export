import { createClient } from "@supabase/supabase-js";

// Publishable (public) values — safe to ship to the browser. RLS protects the data.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://gxmdnzkchzvotzagxjop.supabase.co";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_xjDrJKHSCWa_XdZI8ADDzA__3Vjhv1P";

export const supabase = createClient(url, key, { auth: { persistSession: false } });
