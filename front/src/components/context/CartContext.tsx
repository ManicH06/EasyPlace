"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  shopName: string;
}

interface CartContextType {
  cart: Record<string, CartItem[]>;
  addItem: (item: CartItem) => void;
  updateQuantity: (id: number, shopName: string, quantity: number) => void;
  removeItem: (id: number, shopName: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Record<string, CartItem[]>>({});

  const addItem = (item: CartItem) => {
    setCart((prevCart) => {
      const shopCart = prevCart[item.shopName] || [];
      const existingItemIndex = shopCart.findIndex((i) => i.id === item.id);

      if (existingItemIndex > -1) {
        shopCart[existingItemIndex].quantity += item.quantity;
      } else {
        shopCart.push(item);
      }

      return { ...prevCart, [item.shopName]: shopCart };
    });
  };

  const updateQuantity = (id: number, shopName: string, quantity: number) => {
    setCart((prevCart) => {
      const shopCart = prevCart[shopName];
      const updatedCart = shopCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      return { ...prevCart, [shopName]: updatedCart };
    });
  };

  const removeItem = (id: number, shopName: string) => {
    setCart((prevCart) => {
      const shopCart = prevCart[shopName].filter((item) => item.id !== id);
      if (shopCart.length === 0) {
        // eslint-disable-next-line
        const { [shopName]: _, ...remainingCart } = prevCart;
        return remainingCart;
      }
      return { ...prevCart, [shopName]: shopCart };
    });
  };
  

  const clearCart = () => setCart({});

  return (
    <CartContext.Provider
      value={{ cart, addItem, updateQuantity, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
