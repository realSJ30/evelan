import { getUsers } from "@/api/users";
import UserList from "./components/UserList";

const UserListPage = async () => {
  const { data, total_pages } = await getUsers({ page: 1 });
  return (
    <div className="h-full w-full py-12">
      <UserList initialUsers={data} totalPage={total_pages} />
    </div>
  );
};

export default UserListPage;
