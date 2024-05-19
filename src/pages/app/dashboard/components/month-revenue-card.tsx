import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenue } from '@/api/get-month-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

import { MetricCardSkeleton } from './metric-card-skeleton'

export const MonthRevenueCard = () => {
  const { data: monthRevenue } = useQuery({
    queryFn: getMonthRevenue,
    queryKey: ['metrics', 'month-revenue'],
  })

  return (
    <Card>
      <CardHeader className="justi fy-between flex-row items-center space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign size={16} className="text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthRevenue ? (
          <>
            <span className="span text-2xl font-bold tracking-tight">
              {(monthRevenue.receipt / 100).toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthRevenue.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-xs text-emerald-500 dark:text-emerald-400">
                    +{monthRevenue.diffFromLastMonth}%{' '}
                  </span>
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-xs text-rose-500 dark:text-rose-400">
                    {monthRevenue.diffFromLastMonth}%{' '}
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
