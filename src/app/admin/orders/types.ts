import { createClient } from "@/supabase/server";
import { QueryData } from "@supabase/supabase-js";

const supabase = await createClient();

const ordersWithProductsQuery = supabase
    .from('order')// muon cai nay ko loi phia update types
    .select('*,order_items:order_item(*,product(*)),user(*)') // do co cac moi quan he khac
    .order('created_at', { ascending: false });

export type OrdersWithProducts = QueryData<typeof ordersWithProductsQuery>;