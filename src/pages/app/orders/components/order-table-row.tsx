import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import { useState } from 'react'

import {
  Button,
  Dialog,
  DialogTrigger,
  TableCell,
  TableRow,
} from '@/components/ui'
import { useApproveOrderMutation } from '@/hooks/use-approve-order-mutation'
import { useCancelOrderMutation } from '@/hooks/use-cancel-order-mutation'
import { useDeliverOrderMutation } from '@/hooks/use-deliver-order-mutation'
import { useDispatchOrderMutation } from '@/hooks/use-dispatch-order-mutation'

import { OrderDetails } from './order-details'
import { OrderStatus } from './order-status'

export interface OrderTableRowProps {
  order: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }
}

export const OrderTableRow = ({ order }: OrderTableRowProps) => {
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false)

  const { cancelOrderMutation, isCancelingOrder } = useCancelOrderMutation()
  const { approveOrderMutation, isApprovingOrder } = useApproveOrderMutation()
  const { dispatchOrderMutation, isDispatchingOrder } =
    useDispatchOrderMutation()
  const { deliverOrderMutation, isDeliveringOrder } = useDeliverOrderMutation()

  return (
    <TableRow>
      <TableCell>
        <Dialog
          open={isDetailsDialogOpen}
          onOpenChange={setIsDetailsDialogOpen}
        >
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search size={12} />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails
            isDialogOpen={isDetailsDialogOpen}
            orderId={order.orderId}
          />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>

      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>

      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>

      <TableCell className="font-medium">{order.customerName}</TableCell>

      <TableCell className="font-medium">
        {(order.total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>

      <TableCell>
        {order.status === 'pending' && (
          <Button
            onClick={() => approveOrderMutation({ orderId: order.orderId })}
            disabled={isApprovingOrder}
            variant="success"
            className="text-xs"
            size="xs"
          >
            <ArrowRight size={12} className="mr-2" />
            Aprovar
          </Button>
        )}

        {order.status === 'processing' && (
          <Button
            onClick={() => dispatchOrderMutation({ orderId: order.orderId })}
            disabled={isDispatchingOrder}
            variant="success"
            className="text-xs"
            size="xs"
          >
            <ArrowRight size={12} className="mr-2" />
            Em entrega
          </Button>
        )}

        {order.status === 'delivering' && (
          <Button
            onClick={() => deliverOrderMutation({ orderId: order.orderId })}
            disabled={isDeliveringOrder}
            variant="success"
            className="text-xs"
            size="xs"
          >
            <ArrowRight size={12} className="mr-2" />
            Entregue
          </Button>
        )}
      </TableCell>

      <TableCell>
        <Button
          disabled={
            !['pending', 'processing'].includes(order.status) ||
            isCancelingOrder
          }
          variant="destructive"
          onClick={() => cancelOrderMutation({ orderId: order.orderId })}
          className="text-xs"
          size="xs"
        >
          <X size={12} className="mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
