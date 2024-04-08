'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface CartItem {
  productId: number
  qauntity: number
}

interface CardContetType {
  items: CartItem[]
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as CardContetType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.productId === productId)
      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, qauntity: item.qauntity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { productId, qauntity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
