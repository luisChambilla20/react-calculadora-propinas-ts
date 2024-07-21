import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, settip] = useState(0);

  const addOrder = (item: MenuItem) => {
    const orderItem = order.find((orderItem) => orderItem.id === item.id);

    if (orderItem) {
      const newOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );

      setOrder(newOrder);
    } else {
      const newOrder = [...order, { ...item, quantity: 1 }];
      setOrder(newOrder);
    }
  };

  const deleteOrder = (id: MenuItem["id"]) => {
    const orderActual = order.filter((item) => item.id !== id);
    setOrder(orderActual);
  };

  const resetOrder = () => {
    setOrder([]);
    settip(0);
  };

  return {
    order,
    tip,
    settip,
    addOrder,
    deleteOrder,
    resetOrder,
  };
};
