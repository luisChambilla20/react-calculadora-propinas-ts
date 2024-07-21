import type { MenuItem } from "../types";

type MenuListProps = {
  item: MenuItem;
  addOrder: (item: MenuItem) => void;
};

export const MenuList = ({ item, addOrder }: MenuListProps) => {
  return (
    <button
      onClick={() => addOrder(item)}
      className="border-2 border-teal-400 w-full flex justify-between p-4 hover:bg-teal-300 rounded-lg"
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};
