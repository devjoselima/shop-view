import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthOrdersAmount } from '@/api/get-month-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

import { MetricCardSkeleton } from './metric-card-skeleton'

export const MonthOrdersAmountCard = () => {
  const { data: monthOrdersAmount } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ['metrics', 'month-orders-amount'],
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils size={16} className="text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthOrdersAmount ? (
          <>
            <span className="span text-2xl font-bold tracking-tight">
              {monthOrdersAmount.amount.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p className="text-xs text-rose-500 dark:text-rose-400">
              {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-xs text-emerald-500 dark:text-emerald-400 ">
                    +{monthOrdersAmount.diffFromLastMonth}%{' '}
                  </span>
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-xs text-rose-500 dark:text-rose-400">
                    {monthOrdersAmount.diffFromLastMonth}%{' '}
                  </span>
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
