import { MenuItem, OrderItem } from "../types";

export type PropinasActions =
  | { type: "add-order"; payload: { item: MenuItem } }
  | { type: "delete-order"; payload: { id: MenuItem["id"] } }
  | { type: "reset-order" }
  | { type: "set-tip"; payload: { tip: number } };

export type PropinaState = {
  order: OrderItem[];
  tip: number;
};

const initialProp = (): OrderItem[] => {
  const localData = localStorage.getItem("propinas");
  return localData ? JSON.parse(localData).order : [];
};

const initialTip = (): number => {
  const localData = localStorage.getItem("propinas");
  return localData ? JSON.parse(localData).tip : 0;
};

export const initialState: PropinaState = {
  order: initialProp(),
  tip: initialTip(),
};
export const propinasReducer = (
  state: PropinaState = initialState,
  action: PropinasActions
): PropinaState => {
  switch (action.type) {
    case "add-order": {
      const orderItem = state.order.find(
        (orderItem) => orderItem.id === action.payload.item.id
      );

      if (orderItem) {
        const newOrder = state.order.map((orderItem) =>
          orderItem.id === action.payload.item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );

        return { ...state, order: newOrder };
      } else {
        const newOrder = [
          ...state.order,
          { ...action.payload.item, quantity: 1 },
        ];
        return { ...state, order: newOrder };
      }
    }
    case "delete-order": {
      const orderActual = state.order.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, order: orderActual };
    }
    case "set-tip":
      return { ...state, tip: action.payload.tip };
    case "reset-order":
      return { ...state, order: [], tip: 0 };
    default:
      return state;
  }
};
