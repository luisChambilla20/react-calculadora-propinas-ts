import { useMemo } from "react";
import { priceFormat } from "../helpers/priceFormar";
import { OrderItem } from "../types";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  resetOrder: () => void;
};

export const OrderTotals = ({ order, tip, resetOrder }: OrderTotalsProps) => {
  const Subtotal = useMemo(() => {
    return order.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [order]);

  const Propina = useMemo(() => {
    return Subtotal * tip;
  }, [tip, order]);

  const TotalPagar = useMemo(() => Propina + Subtotal, [tip, order]);

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
        disabled={order.length === 0}
        onClick={resetOrder}
      >
        Guardar orden
      </button>
    </>
  );
};
