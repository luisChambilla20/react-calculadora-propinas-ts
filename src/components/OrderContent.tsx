import { MenuItem, OrderItem } from "../types";
import { priceFormat } from "../helpers/priceFormar";
import { OrderTotals } from "./OrderTotals";
import { OrderPropina } from "./OrderPropina";
import React from "react";

type OrderContentProps = {
  order: OrderItem[];
  deleteOrder: (id: MenuItem["id"]) => void;
  settip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
  resetOrder: () => void;
};

export const OrderContent = ({
  order,
  deleteOrder,
  tip,
  settip,
  resetOrder,
}: OrderContentProps) => {
  return (
    <div>
      <h1 className="font-black text-3xl mb-5">Consumo</h1>

      {order.length === 0 ? (
        <p className="text-center"> La orden esta vacía </p>
      ) : (
        <>
          {order.map((item, index) => (
            <div
              key={item.id}
              className={`flex justify-between items-center py-4  border-t ${
                index === order.length - 1 ? "border-b" : ""
              }`}
            >
              <div>
                <p className="text-lg">
                  {item.name} - {priceFormat(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} - Total:{" "}
                  {priceFormat(item.price * item.quantity)}
                </p>
              </div>
              <button
                onClick={() => deleteOrder(item.id)}
                className="bg-red-500 w-8 h-8 border rounded-full text-white font-black "
              >
                X
              </button>
            </div>
          ))}
          <OrderPropina settip={settip} tip={tip} />
          <OrderTotals order={order} tip={tip} resetOrder={resetOrder} />
        </>
      )}
    </div>
  );
};
