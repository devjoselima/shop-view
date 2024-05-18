import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { cancelOrder } from '@/api/cancel-order'
import { GetOrdersResponse } from '@/api/get-orders'

export const useCancelOrderMutation = () => {
  const queryClient = useQueryClient()
  const { mutateAsync: cancelOrderMutation } = useMutation({
    mutationFn: cancelOrder,
    async onSuccess(_, { orderId }) {
      const ordersListCache =
        await queryClient.getQueriesData<GetOrdersResponse>({
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
                status: 'canceled',
              }
            }

            return order
          }),
        })
      })

      toast.success('Pedido cancelado com sucesso')
    },
  })

  return { cancelOrderMutation }
}
