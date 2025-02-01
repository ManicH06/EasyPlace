"use client";

import {  FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function FloatingCart() {
  const { cart, updateQuantity, removeItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = Object.values(cart).flat().reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems === 0) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg z-50"
      >
        <FaShoppingCart className="inline-block"/> {totalItems}
      </button>
      {isOpen && (
        <div className="fixed top-16 right-4 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
          {Object.keys(cart).map((shopName) => (
            <div key={shopName}>
              <h3 className="text-lg font-bold mb-2">{shopName}</h3>
              {cart[shopName].map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-2">
                  <span>{item.name}</span>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, shopName, parseInt(e.target.value))}
                      className="w-12 text-center border border-gray-300 rounded mr-2"
                    />
                    <button
                      onClick={() => removeItem(item.id, shopName)}
                      className="text-red-600"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <button
            className="bg-green-600 text-white w-full py-2 rounded mt-4"
            onClick={() => alert("Proceeding to payment...")}
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </>
  );
}
