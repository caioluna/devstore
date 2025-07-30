'use client'

import {ShoppingBag} from "lucide-react";
import {useCart} from "@/contexts/cart-context";

export function CartWidget() {
  const {items} = useCart()
  
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag width={16} className="text-gray-50"/>
      <span>Cart ({items.length})</span>
    </div>
  )
}