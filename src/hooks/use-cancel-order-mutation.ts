import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { cancelOrder } from '@/api/cancel-order'
import { updateOrderStatusOnCache } from '@/helpers/update-order-status-on-cache'

export const useCancelOrderMutation = () => {
  const queryClient = useQueryClient()
  const { mutateAsync: cancelOrderMutation, isPending: isCancelingOrder } =
    useMutation({
      mutationFn: cancelOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(queryClient, orderId, 'canceled')

        toast.success('Status alterado com sucesso!', {
          description: 'O pedido foi cancelado com sucesso',
        })
      },
    })

  return { cancelOrderMutation, isCancelingOrder }
}
