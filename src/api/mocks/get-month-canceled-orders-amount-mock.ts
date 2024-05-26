import { http, HttpResponse } from 'msw'

import { GetMonthCanceledOrdersAmountResponse } from '../get-month-canceled-orders-amount'

export const getMonthCanceledAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>('/metrics/month-canceled-orders-amount', async () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5,
  })
})
