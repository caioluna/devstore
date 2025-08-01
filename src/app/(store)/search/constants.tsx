import {Product} from "@/data/types/products";
import {api} from "@/data/api";

export async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    // next: {
    //   revalidate: 60 * 60,
    // },
  });

  return await response.json();
}