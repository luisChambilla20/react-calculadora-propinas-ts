import { PropinasActions } from "../reducers/propinas-reducer";
import type { MenuItem } from "../types";

type MenuListProps = {
  item: MenuItem;
  dispatch: React.Dispatch<PropinasActions>;
};

export const MenuList = ({ item, dispatch }: MenuListProps) => {
  return (
    <button
      onClick={() => dispatch({ type: "add-order", payload: { item } })}
      className="border-2 border-teal-400 w-full flex justify-between p-4 hover:bg-teal-300 rounded-lg"
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};
