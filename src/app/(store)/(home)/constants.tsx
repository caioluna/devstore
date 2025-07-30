import {Product} from "@/data/types/products";
import {api} from "@/data/api";

export async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60,
    },
  });
  return await response.json();
}