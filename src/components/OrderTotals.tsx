import { useMemo } from "react";
import { priceFormat } from "../helpers/priceFormar";
import { PropinasActions, PropinaState } from "../reducers/propinas-reducer";

type OrderTotalsProps = {
  state: PropinaState;
  dispatch: React.Dispatch<PropinasActions>;
};

export const OrderTotals = ({ state, dispatch }: OrderTotalsProps) => {
  const Subtotal = useMemo(() => {
    return state.order.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }, [state.order]);

  const Propina = useMemo(() => {
    return Subtotal * state.tip;
  }, [state]);

  const TotalPagar = useMemo(() => Propina + Subtotal, [state]);

  return (
    <>
      <div className=" space-y-3 mt-5">
        <h2 className="font-black text-2xl">Totales y propinas</h2>
        <p className="font-bold">
          Subtotal a pagar: <span> {priceFormat(Subtotal)}</span>
        </p>
        <p className="font-bold">
          Propina: <span> {priceFormat(Propina)}</span>
        </p>
        <p className="font-bold">
          Total a pagar: <span> {priceFormat(TotalPagar)}</span>
        </p>
      </div>

      <button
        className="uppercase font-black text-white bg-black w-full py-4 mt-6 border rounded-lg disabled:opacity-10"
        disabled={state.order.length === 0}
        onClick={() => dispatch({ type: "reset-order" })}
      >
        Guardar orden
      </button>
    </>
  );
};
