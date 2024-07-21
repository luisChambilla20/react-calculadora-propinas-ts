// import { useState } from "react";
import { MenuList } from "./components/MenuList";
import { OrderContent } from "./components/OrderContent";
import { menuItems } from "./db/db";
import { useOrder } from "./hooks/useOrder";

export const App = () => {
  const { order, tip, settip, addOrder, deleteOrder, resetOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-4xl text-center font-black">
          Calculadora de propinas
        </h1>
      </header>

      <main className="max-w-5xl mx-auto py-20 grid md:grid-cols-2 space-x-5">
        <div className="py-5 ">
          <h1 className="font-black text-3xl mb-6">Menu</h1>

          <div className="space-y-2 mt-2 px-3">
            {menuItems.map((item) => (
              <MenuList key={item.id} item={item} addOrder={addOrder} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-400 p-5 rounded-lg space-y-10">
          <OrderContent
            order={order}
            deleteOrder={deleteOrder}
            settip={settip}
            tip={tip}
            resetOrder={resetOrder}
          />
        </div>
      </main>
    </>
  );
};
