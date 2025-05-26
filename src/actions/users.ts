'use server';

import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";

export type User = {
  id: string;
  email: string;
  type: "ADMIN" | "USER";
  avatar_url: string;
  created_at: string | null;
};

export const getUsers = async (): Promise<User[]> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);

  return data.map(user => ({
    ...user,
    type: user.type?.toUpperCase() === 'ADMIN' ? 'ADMIN' : 'USER',
  }));
};

export const updateUser = async (
  id: string,
  email: string,
  type: "ADMIN" | "USER",
  avatar_url: string
) => {
  const supabase = await createClient();

  const { error } = await supabase
    .from('users')
    .update({ email, type, avatar_url })
    .eq('id', id);

  if (error) throw new Error(error.message);

  revalidatePath('/admin/users');
};

export const deleteUser = async (id: string) => {
  const supabase = await createClient();

  const { error } = await supabase
    .from('users')
    .delete()
    .eq('id', id);

  if (error) throw new Error(error.message);

  revalidatePath('/admin/users');
};
