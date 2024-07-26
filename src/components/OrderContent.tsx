import { priceFormat } from "../helpers/priceFormar";
import { OrderTotals } from "./OrderTotals";
import { OrderPropina } from "./OrderPropina";
import React from "react";
import { PropinasActions, PropinaState } from "../reducers/propinas-reducer";

type OrderContentProps = {
  state: PropinaState;
  dispatch: React.Dispatch<PropinasActions>;
};

export const OrderContent = ({ state, dispatch }: OrderContentProps) => {
  return (
    <div>
      <h1 className="font-black text-3xl mb-5">Consumo</h1>

      {state.order.length === 0 ? (
        <p className="text-center"> La orden esta vacía </p>
      ) : (
        <>
          {Array.isArray(state.order) &&
            state.order.map((item, index) => (
              <div
                key={item.id}
                className={`flex justify-between items-center py-4 border-t ${
                  index === state.order.length - 1 ? "border-b" : ""
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
                  onClick={() =>
                    dispatch({ type: "delete-order", payload: { id: item.id } })
                  }
                  className="bg-red-500 w-8 h-8 border rounded-full text-white font-black "
                >
                  X
                </button>
              </div>
            ))}
          <OrderPropina dispatch={dispatch} tip={state.tip} />
          <OrderTotals state={state} dispatch={dispatch} />
        </>
      )}
    </div>
  );
};
