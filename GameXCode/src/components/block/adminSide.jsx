import React from "react";
import { GoHomeFill } from "react-icons/go"; // Home icon
import { FaGamepad, FaPlus, FaListAlt, FaThLarge } from "react-icons/fa"; // Other icons
import Link from "next/link";

const AdminSide = () => {
  return (
    <div className="px-4 box-shadow-game-1 h-full py-3">
      <ul className="flex flex-col gap-4">
        <li className="flex gap-2 items-center justify-start text-lg">
          <div className="bg-blue-500 p-1 rounded-md">
            <GoHomeFill />
          </div>
          <Link href={"/admin"}>Dashboard</Link>
        </li>
        <li className="flex gap-2 items-center justify-start text-lg">
          <div className="bg-green-500 p-1 rounded-md">
            <FaGamepad />
          </div>
          <Link href={"/admin/game"}>Game</Link>
        </li>
        <li className="flex gap-2 items-center justify-start text-lg">
          <div className="bg-purple-500 p-1 rounded-md">
            <FaPlus />
          </div>
          <Link href={"/admin/game/add"}>New Game</Link>
        </li>
        <li className="flex gap-2 items-center justify-start text-lg">
          <div className="bg-red-500 p-1 rounded-md">
            <FaListAlt />
          </div>
          <Link href={"/admin/game/add/category"}>Category</Link>
        </li>
        {/* <li className="flex gap-2 items-center justify-start text-lg">
          <div className="bg-teal-500 p-1 rounded-md">
            <FaThLarge />
          </div>
          <Link href={"/layout"}>Layout</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default AdminSide;
