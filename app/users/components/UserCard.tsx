import { User } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { MdCall } from "react-icons/md";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { avatar, email, first_name, id, last_name } = user;
  return (
    <div className="border border-neutral-100 border-solid shadow-md h-[340px] rounded-lg flex flex-col relative overflow-hidden hover:shadow-green-900 hover:border-0 transition">
      <div className="absolute bg-green-400 p-4 h-[105px] w-[55px] rotate-45 -top-10 -left-5 flex items-center justify-center"></div>
      <div className="w-full-h-full pt-10 px-8 flex flex-col items-center sm:items-start gap-4">
        <Image
          src={avatar}
          alt={first_name}
          className="rounded-full"
          width={96}
          height={96}
          priority
        />
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-xs text-neutral-400">#{id}</p>
          <h5>
            {first_name} {last_name}
          </h5>
          <p>{email}</p>
        </div>
        <div className="mt-10 border-b border-neutral-100 w-full" />
        <div className="flex w-full items-center justify-around">
          <AiOutlineMessage
            size={30}
            className="text-neutral-400 hover:text-green-700 cursor-pointer transition"
          />
          <MdCall
            size={30}
            className="text-neutral-400 hover:text-green-700 cursor-pointer transition"
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
