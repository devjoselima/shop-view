import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

export const MonthOrdersAmountCard = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils size={16} className="text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="span text-2xl font-bold tracking-tight">246</span>
        <p className="text-xs text-emerald-500 dark:text-emerald-400">
          +6%{' '}
          <span className="text-xs text-muted-foreground">
            em relação ao mês passado
          </span>
        </p>
      </CardContent>
    </Card>
  )
}
