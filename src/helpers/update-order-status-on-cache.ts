/* eslint-disable react-hooks/rules-of-hooks */
import { useQueryClient } from '@tanstack/react-query'

import { GetOrdersResponse } from '@/api/get-orders'
import { OrderStatus } from '@/pages/app/orders/components/order-status'

export type OrderStatus = 'delivered' | 'canceled'

export const updateOrderStatusOnCache = async (
  orderId: string,
  status: OrderStatus,
) => {
  const queryClient = useQueryClient()

  const ordersListCache = await queryClient.getQueriesData<GetOrdersResponse>({
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