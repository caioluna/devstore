import data from "../data.json"
import type {NextRequest} from "next/server";
import {z} from "zod";

export async function GET(request: NextRequest) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const {searchParams} = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter(product => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}