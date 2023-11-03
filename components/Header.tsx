import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";

const Header = () => {
  return (
    <div className="py-8 flex items-center justify-center">
      <div className="flex items-center justify-start gap-3 group cursor-pointer">
        <HiOutlineUserGroup
          className="text-neutral-500 group-hover:text-green-800"
          size={24}
        />
        <p className="sm:block hidden font-semibold text-neutral-500 group-hover:text-green-800">
          Evelan Users
        </p>
      </div>
    </div>
  );
};

export default Header;
