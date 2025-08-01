import {Header} from "@/components/Header";
import {ReactNode} from "react";
import {CartProvider} from "@/contexts/cart-context";

export default function StoreLayout({children}: { children: ReactNode }) {
  return (
    <CartProvider>
      <div
        className="mx-auto w-full max-w-[1600px] min-h-screen grid grid-rows-[min-content_max-content] gap-5 px-10 py-8">
        <Header/>
        {children}
      </div>
    </CartProvider>
  );
}
