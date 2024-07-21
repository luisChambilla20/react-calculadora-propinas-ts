import React from "react";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type OrderPropinaProps = {
  settip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};

export const OrderPropina = ({ settip, tip }: OrderPropinaProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina: </h3>

      <form>
        {tipOptions.map((item) => (
          <div key={item.id} className="flex gap-2">
            <label htmlFor={item.id}> {item.label} </label>
            <input
              onChange={(e) => settip(+e.target.value)}
              id={item.id}
              name="tip"
              value={item.value}
              type="radio"
              checked={item.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
