const AdminDashboard = () => {
  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard



// import { createClient } from '@/supabase/client';
// import { redirect } from 'next/navigation';

// const supabase = await createClient();
// export default async function DashboardPage() {
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   if (!session) {
//     redirect('/admin/login');
//   }

//   return (
//     <div className='p-4'>
//       <h1 className='text-2xl'>Welcome to Admin Dashboard</h1>
//     </div>
//   );
// }
