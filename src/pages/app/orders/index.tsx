import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getOrders } from '@/api/get-orders'
import { Pagination } from '@/components/pagination'
import { Table, TableBody } from '@/components/ui'

import { OrderTableFilters, OrderTableHead, OrderTableRow } from './components'

export const Orders = () => {
  const { data: result } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  })

  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="tracking-light text-3xl font-bold">Pedidos</h1>
        <div className="5 flex flex-col gap-1 space-y-2">
          <OrderTableFilters />

          <div className="rounded-md border">
            <Table>
              <OrderTableHead />

              <TableBody>
                {result &&
                  result.orders.map((order) => {
                    return <OrderTableRow key={order.orderId} order={order} />
                  })}
                {/* {Array.from({ length: 10 }).map((_, i) => {
                  return <OrderTableRow key={i} />
                })} */}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
