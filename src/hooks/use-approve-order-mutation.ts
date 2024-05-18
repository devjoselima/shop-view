import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { approveOrder } from '@/api/approve-order'
import { updateOrderStatusOnCache } from '@/helpers/update-order-status-on-cache'

export const useApproveOrderMutation = () => {
  const { mutateAsync: approveOrderMutation, isPending: isApprovingOrder } =
    useMutation({
      mutationFn: approveOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'processing')

        toast.success('O pedido foi aprovado com sucesso')
      },
    })

  return { approveOrderMutation, isApprovingOrder }
}
