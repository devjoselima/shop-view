import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { deliverOrder } from '@/api/deliver-order'
import { updateOrderStatusOnCache } from '@/helpers/update-order-status-on-cache'

export const useDeliverOrderMutation = () => {
  const { mutateAsync: deliverOrderMutation } = useMutation({
    mutationFn: deliverOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, 'delivered')

      toast.success('Status alterado com sucesso!')
    },
  })

  return { deliverOrderMutation }
}
