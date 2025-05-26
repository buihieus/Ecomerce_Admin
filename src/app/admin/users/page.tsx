import { getUsers } from "@/actions/users";
import PageComponent from "./page.component";


const UsersPage = async () => {
  const users = await getUsers();

  if (!users || users.length === 0)
    return <div className="text-center font-bold text-2xl">No users found</div>;

  return <PageComponent users={users} />;
};

export default UsersPage;
