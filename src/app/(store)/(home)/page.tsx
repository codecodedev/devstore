import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 30,
    },
  })

  const products = await response.json()

  return products
}

export default async function Home() {
  const [highLightedProducts, ...otherProducts] = await getFeaturedProducts()

  return (
    <div>
      <section>
        <div className="grid h-[var(--size-page)] grid-cols-9 grid-rows-6 gap-6">
          <Link
            href={`/product/${highLightedProducts.slug}`}
            className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex flex-row justify-center items-start"
          >
            <Image
              src={highLightedProducts.image}
              className="group-hover:scale-105 transition-transform duration-500"
              width={920}
              height={920}
              quality={100}
              alt=""
            />

            <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{highLightedProducts.title}</span>
              <span className="flex items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {highLightedProducts.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>

          {otherProducts.map((product, idx) => (
            <Link
              key={idx}
              href={`/product/${product.slug}`}
              className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex flex-row justify-center items-start"
            >
              <Image
                src={product.image}
                className="group-hover:scale-105 transition-transform duration-500"
                width={920}
                height={920}
                quality={100}
                alt=""
              />
              <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="text-sm truncate">{product.title}</span>
                <span className="flex items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <div className="grid h-screen grid-cols-9 grid-rows-6 gap-6 py-8">
          <Link
            href={`/product/${highLightedProducts.slug}`}
            className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex flex-row justify-center items-start"
          >
            <Image
              src={highLightedProducts.image}
              className="group-hover:scale-105 transition-transform duration-500"
              width={920}
              height={920}
              quality={100}
              alt=""
            />

            <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{highLightedProducts.title}</span>
              <span className="flex items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {highLightedProducts.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>

          {otherProducts.map((product, idx) => (
            <Link
              key={idx}
              href={`/product/${product.slug}`}
              className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex flex-row justify-center items-start"
            >
              <Image
                src={product.image}
                className="group-hover:scale-105 transition-transform duration-500"
                width={920}
                height={920}
                quality={100}
                alt=""
              />
              <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
                <span className="text-sm truncate">{product.title}</span>
                <span className="flex items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
