import Image from "next/image";
import Link from "next/link";
import {twMerge} from "tailwind-merge";

interface FeaturedLinkProps {
  size: number;
  quality?: number;
  href: string;
  imageUrl: string;
  label: string;
  price: number;
  className?: string;
}

export function FeaturedLink({
                               size,
                               quality,
                               href,
                               imageUrl,
                               label,
                               price,
                               className,
                             }: FeaturedLinkProps) {
  const sizeStyle = `h-[${size}] w-[${size}]`;

  return (
    <Link
      href={`/product/${href}`}
      className={twMerge(
        "relative group bg-zinc-900 rounded-lg overflow-hidden flex justify-center items-end",
        className)
      }
    >
      <Image
        className={twMerge(
          "group-hover:scale-105 transition-transform duration-300", sizeStyle
        )}
        src={imageUrl}
        alt=""
        height={size}
        width={size}
        quality={quality}
      />

      <div
        className="absolute bottom-1/8 right-1/8 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
        <span className="text-sm truncate">{label}</span>
        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
          {Intl.NumberFormat("pt-BR", {
            currency: "BRL",
            style: "currency",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          }).format(price)}
        </span>
      </div>
    </Link>
  );
}
