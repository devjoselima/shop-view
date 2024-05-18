import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

export const MonthCanceledOrdersCard = () => {
  const { data: monthCanceledOrders } = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ['metrics', 'month-canceled-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign size={16} className="text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthCanceledOrders && (
          <>
            <span className="span text-2xl font-bold tracking-tight">
              {monthCanceledOrders.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCanceledOrders.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-xs text-rose-500 dark:text-rose-400">
                    {monthCanceledOrders.diffFromLastMonth}%{' '}
                  </span>
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-xs text-emerald-500 dark:text-emerald-400">
                    +{monthCanceledOrders.diffFromLastMonth}%{' '}
                  </span>
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
