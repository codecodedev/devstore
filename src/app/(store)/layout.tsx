import { ReactNode } from 'react'
import Header from '../../components/header'
import { CartProvider } from '@/contexts/card-context'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8 pb-0">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
