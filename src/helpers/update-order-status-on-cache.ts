/* eslint-disable react-hooks/rules-of-hooks */
import { QueryClient } from '@tanstack/react-query'

import { GetOrdersResponse } from '@/api/get-orders'
import { OrderStatus } from '@/pages/app/orders/components/order-status'

export const updateOrderStatusOnCache = (
  queryClient: QueryClient,
  orderId: string,
  status: OrderStatus,
) => {
  const ordersListCache = queryClient.getQueriesData<GetOrdersResponse>({
    queryKey: ['orders'],
  })

  ordersListCache.forEach(([cacheKey, cacheData]) => {
    if (!cacheData) {
      return
    }

    queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
      ...cacheData,
      orders: cacheData.orders.map((order) => {
        if (order.orderId === orderId) {
          return {
            ...order,
            status,
          }
        }

        return order
      }),
    })
  })
}
