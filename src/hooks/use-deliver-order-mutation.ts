import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { deliverOrder } from '@/api/deliver-order'
import { updateOrderStatusOnCache } from '@/helpers/update-order-status-on-cache'

export const useDeliverOrderMutation = () => {
  const queryClient = useQueryClient()
  const { mutateAsync: deliverOrderMutation, isPending: isDeliveringOrder } =
    useMutation({
      mutationFn: deliverOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(queryClient, orderId, 'delivered')

        toast.success('Status alterado com sucesso!', {
          description: 'O pedido foi entregue com sucesso',
        })
      },
    })

  return { deliverOrderMutation, isDeliveringOrder }
}
