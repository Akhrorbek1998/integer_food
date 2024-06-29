import { useState } from "react";
import OrderFoods from "./OrderFoods";

const Order = () => {
  const [activeOrderBtn, setActiveOrderBtn] = useState("dine in");
  return (
    <div className="w-[409px] min-h-screen p-6 bg-dark-bg fixed top-0 right-0">
      <h2 className="mb-4 text-xl leading-7 font-semibold">Orders #34562</h2>
      <div className="space-x-2 mb-4">
        <button
          className={`text-sm font-semibold leading-5 text-primary-color border border-base-dark-line py-2 px-3 rounded-lg ${
            activeOrderBtn === "dine in"
              ? "bg-primary-color text-white border-primary-color shadow-btn-shadow"
              : ""
          }`}
          onClick={() => setActiveOrderBtn("dine in")}
        >
          Dine In
        </button>
        <button
          className={`text-sm font-semibold leading-5 text-primary-color border border-base-dark-line py-2 px-3 rounded-lg ${
            activeOrderBtn === "to go"
              ? "bg-primary-color text-white border-primary-color shadow-btn-shadow"
              : ""
          }`}
          onClick={() => setActiveOrderBtn("to go")}
        >
          To Go
        </button>
        <button
          className={`text-sm font-semibold leading-5 text-primary-color border border-base-dark-line py-2 px-3 rounded-lg ${
            activeOrderBtn === "delivery"
              ? "bg-primary-color text-white border-primary-color shadow-btn-shadow"
              : ""
          }`}
          onClick={() => setActiveOrderBtn("delivery")}
        >
          Delivery
        </button>
      </div>
      <div className="">
        <div className="flex items-center pb-4 mb-4 border-b border-base-dark-line">
          <p>Item</p>
          <div className="flex items-center gap-11 ms-[224px]">
            <p>Qty</p>
            <p>Price</p>
          </div>
        </div>
        {/* ORDER FOODS */}
        <OrderFoods />
        <div className=" absolute bottom-4 right-6 left-6 pt-6 border-t border-base-dark-line mt-8">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm font-normal leading-5 text-text-light">
              Discount
            </p>
            <p className="text-sm font-normal leading-5">$0</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm font-normal leading-5 text-text-light">
              Subtotal
            </p>
            <p className="text-sm font-normal leading-5"> $ 21,03</p>
          </div>
          <button className="w-full py-[14px] mt-4 border border-primary-color bg-primary-color text-white rounded-lg text-sm font-semibold leading-5 shadow-btn-shadow transition-all divide-purple-300 ease-in hover:bg-transparent hover:text-primary-color">
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
