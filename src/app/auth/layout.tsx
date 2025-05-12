// todo: check if user is authenticated and if user is an admin before redirecting to admin page
// todo: if user is authenticated return the children

import { ADMIN } from "@/constants/contants";
import { createClient } from "@/supabase/server"
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthLayout({ children }: Readonly<{ 
    children: ReactNode
}>) {
    const supabase = await createClient();

    const { data: authData }  = await supabase.auth.getUser();
    if (authData?.user) {
        const { data, error } = await supabase
        .from('users')
        .select('*').eq('id', authData.user.id)
        .single();
        if (error || !data) {
            console.log('Error fetching user data:', error);
            return ;
        }
        if (data.type !== ADMIN) {
            // if (data.type !== "admin") {
        
            return redirect('/');
        }
    }
    return <>{children}</>;
}
