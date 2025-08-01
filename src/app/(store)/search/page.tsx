import {FeaturedLink} from "@/components/FeaturedLink";
import {SearchPageProps} from "@/app/(store)/search/types";
import {redirect} from "next/navigation";
import {searchProducts} from "@/app/(store)/search/constants";

export default async function SearchPage({searchParams}: SearchPageProps) {
  const {q: query} = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className='flex flex-col gap-4'>
      <p className='text-sm'>
        Resultados para: <span className='font-semibold'>{query}</span>
      </p>

      <div className='grid grid-cols-3 gap-6'>
        {products.map(product => (
          <FeaturedLink
            key={product.id}
            href={product.slug}
            imageUrl={product.image}
            label={product.title}
            price={product.price}
            size={460}
          />
        ))}
      </div>
    </div>
  )
}
