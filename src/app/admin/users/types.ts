import { createClient } from "@/supabase/server";
import { QueryData } from "@supabase/supabase-js";

const supabase = await createClient();

const usersQuery = supabase
  .from('users')
  .select('*')
  .order('created_at', { ascending: false });

export type User = {
  id: string;
  email: string;
  type: "ADMIN" | "USER";
  avatar_url: string;
  created_at: string | null;
};

export type Users = QueryData<typeof usersQuery>;
