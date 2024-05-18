import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { dispatchOrder } from '@/api/dispatch-order'
import { updateOrderStatusOnCache } from '@/helpers/update-order-status-on-cache'

export const useDispatchOrderMutation = () => {
  const queryClient = useQueryClient()
  const { mutateAsync: dispatchOrderMutation, isPending: isDispatchingOrder } =
    useMutation({
      mutationFn: dispatchOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(queryClient, orderId, 'delivering')

        toast.success('Status alterado com sucesso!', {
          description: 'O pedido está em processo de entrega',
        })
      },
    })

  return { dispatchOrderMutation, isDispatchingOrder }
}
