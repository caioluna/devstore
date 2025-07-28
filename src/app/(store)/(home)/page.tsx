import {FeaturedLink} from "@/components/FeaturedLink";
import {api} from "@/data/api";
import {Product} from "@/data/types/products";

async function getFeaturedProducts(): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60,
    },
  });
  return await response.json();
}

export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <div className="grid max-h-[820px] grid-cols-9 grid-rows-6 gap-6">
      <FeaturedLink
        key={products[0].id}
        href={products[0].slug}
        imageUrl={products[0].image}
        label={products[0].title}
        price={products[0].price}
        className="col-span-6 row-span-6"
        size={820}
      />

      <FeaturedLink
        key={products[1].id}
        href={products[1].slug}
        imageUrl={products[1].image}
        label={products[1].title}
        price={products[1].price}
        className="col-span-3 row-span-3"
        size={360}
      />

      <FeaturedLink
        key={products[2].id}
        href={products[2].slug}
        imageUrl={products[2].image}
        label={products[2].title}
        price={products[2].price}
        className="col-span-3 row-span-3"
        size={360}
      />
    </div>
  );
}
