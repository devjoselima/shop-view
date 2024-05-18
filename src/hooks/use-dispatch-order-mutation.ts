import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { dispatchOrder } from '@/api/dispatch-order'
import { updateOrderStatusOnCache } from '@/helpers/update-order-status-on-cache'

export const useDispatchOrderMutation = () => {
  const { mutateAsync: dispatchOrderMutation } = useMutation({
    mutationFn: dispatchOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, 'delivering')

      toast.success('Status alterado com sucesso!')
    },
  })

  return { dispatchOrderMutation }
}
