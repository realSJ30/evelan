"use client";
import { getUsers } from "@/api/users";
import Button from "@/components/Button";
import { User } from "@/utils/types";
import React, { useState } from "react";
import UserCard from "./UserCard";

interface UserListProps {
  initialUsers: User[];
  totalPage: number;
}

const UserList: React.FC<UserListProps> = ({ initialUsers, totalPage }) => {
  const [users, setUsers] = useState(initialUsers);
  const [page, setPage] = useState(1);

  const fetchMoreUsers = async () => {
    if (page < totalPage) {
      const next = page + 1;
      const { data } = await getUsers({ page: next });
      setPage(next);
      setUsers((prevUsers) => [...prevUsers, ...data]);
    }
  };

  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto text-black flex flex-col">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-2">
        {users.map((user, indx) => (
          <UserCard key={indx} user={user} />
        ))}
      </div>
      <Button
        disabled={page >= totalPage}
        className="place-self-center mt-8"
        onClick={fetchMoreUsers}
      >
        {page >= totalPage ? "No more" : "Load more"}
      </Button>
    </div>
  );
};

export default UserList;
