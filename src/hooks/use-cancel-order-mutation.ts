import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { cancelOrder } from '@/api/cancel-order'
import { updateOrderStatusOnCache } from '@/helpers/update-order-status-on-cache'

export const useCancelOrderMutation = () => {
  const { mutateAsync: cancelOrderMutation, isPending: isCancelingOrder } =
    useMutation({
      mutationFn: cancelOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'canceled')

        toast.success('Pedido cancelado com sucesso')
      },
    })

  return { cancelOrderMutation, isCancelingOrder }
}
