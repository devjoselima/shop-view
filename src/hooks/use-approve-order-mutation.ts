import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { approveOrder } from '@/api/approve-order'
import { updateOrderStatusOnCache } from '@/helpers/update-order-status-on-cache'

export const useApproveOrderMutation = () => {
  const queryClient = useQueryClient()
  const { mutateAsync: approveOrderMutation, isPending: isApprovingOrder } =
    useMutation({
      mutationFn: approveOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(queryClient, orderId, 'processing')

        toast.success('Status alterado com sucesso!', {
          description: 'O pedido foi aprovado com sucesso',
        })
      },
    })

  return { approveOrderMutation, isApprovingOrder }
}
