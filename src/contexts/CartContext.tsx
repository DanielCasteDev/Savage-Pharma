import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity?: number;
  [key: string]: any; // Para admitir propiedades adicionales si es necesario
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string | number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]); // Estado inicial del carrito

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]); // Agrega un elemento al carrito
  };

  const removeFromCart = (itemId: string | number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId)); // Elimina un elemento
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
