import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

export const MonthRevenueCard = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign size={16} className="text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="span text-2xl font-bold tracking-tight">
          R$ 1248,68
        </span>
        <p className="text-xs text-emerald-500 dark:text-emerald-400">
          +2%{' '}
          <span className="text-xs text-muted-foreground">
            em relação ao mês passado
          </span>
        </p>
      </CardContent>
    </Card>
  )
}
