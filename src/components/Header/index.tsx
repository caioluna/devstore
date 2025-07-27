import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <form className="flex bg-zinc-900 w-[320px] rounded-full h-[44px] px-5 py-3 gap-3 items-center ring-zinc-700">
          <Search className="text-zinc-500 w-5 h-5" />
          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag width={16} className="text-gray-50" />
          <span>Cart (3)</span>
        </div>

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/caioluna.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
