import {Product} from "@/data/types/products";
import {api} from "@/data/api";

export async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  });
  return await response.json();
}