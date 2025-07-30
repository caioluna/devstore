import Image from "next/image";
import {Metadata} from "next";
import {AddToCartButton} from "@/components/AddToCartButton";
import {getProduct} from "@/app/(store)/product/[slug]/constants";
import {ProductProps} from "@/app/(store)/product/[slug]/types";

export async function generateMetadata({params}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

export default async function ProductPage({params}: ProductProps) {
  const product = await getProduct(params.slug)

  return (
    <div className='relative max-h-[860px] grid grid-cols-3'>

      <div className='col-span-2 overflow-hidden'>
        <Image src={product.image} alt='' height={1000} width={1000} quality={100}/>
      </div>

      <div className='flex flex-col justify-center px-12 gap-8'>

        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold leading-none'>{product.title}</h1>
          <p className='mt-2 leading-[140%] text-zinc-400'>{product.description}</p>
        </div>

        <div className='flex items-center gap-3'>
          <span
            className='inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold'
          >
            {product.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })}
          </span>
          <span className='text-sm text-zinc-400'>
            Em 12x s/ juros de {(product.price / 12).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })}

          </span>
        </div>

        <div className='space-y-4'>
          <p className='block font-semibold'>Tamanhos</p>

          <div className='flex gap-2'>
            <button
              type='button'
              className='flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold'
            >
              P
            </button>
            <button
              type='button'
              className='flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold'
            >
              M
            </button>
            <button
              type='button'
              className='flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold'
            >
              G
            </button>
            <button
              type='button'
              className='flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold'
            >
              GG
            </button>
          </div>
        </div>

        <AddToCartButton productId={product.id}/>
      </div>
    </div>
  )
}