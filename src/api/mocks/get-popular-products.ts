import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', async () => {
  return HttpResponse.json([
    { product: 'Item 1', amount: 30 },
    { product: 'Item 2', amount: 12 },
    { product: 'Item 3', amount: 46 },
    { product: 'Item 4', amount: 4 },
    { product: 'Item 5', amount: 10 },
  ])
})
