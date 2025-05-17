// import { createClient } from '@supabase/supabase-js'
// import * as SecureStore from 'expo-secure-store'
// import { Database } from '@/supabase/types'

// const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
// const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!

// export const supabase = createClient<Database>(
//   supabaseUrl,
//   supabaseAnonKey,
//   {
//     auth: {
//       storage: {
//         getItem: SecureStore.getItemAsync,
//         setItem: SecureStore.setItemAsync,
//         removeItem: SecureStore.deleteItemAsync,
//       },
//       storageKey: 'supabase.auth.token',
//     },
//   }
// )
