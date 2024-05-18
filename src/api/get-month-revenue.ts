import { api } from '@/lib/axios'

interface GetMonthRevenueResponse {
  amount: number
  diffFromLastMonth: number
}

export const getMonthRevenue = async () => {
  const response = await api.get<GetMonthRevenueResponse>(
    '/metrics/month-receipt',
  )

  return response.data
}
