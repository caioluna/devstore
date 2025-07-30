'use client'

import {useCart} from "@/contexts/cart-context";

export function AddToCartButton({productId}: { productId: number }) {
  const {addToCart} = useCart();

  function handleAddToCart() {
    addToCart(productId)
  }

  return (
    <button
      type='button'
      className='bg-emerald-500 text-white rounded-full py-3.5 font-semibold cursor-pointer hover:bg-emerald-400'
      onClick={handleAddToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}