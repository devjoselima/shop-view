import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period'
import { getDayOrdersAmountMock } from './get-day-orders-amount'
import { getMonthCanceledAmountMock } from './get-month-canceled-orders-amount'
import { getMonthOrdersAmountMock } from './get-month-orders-amount'
import { getMonthRevenueMock } from './get-month-revenue'
import { getPopularProductsMock } from './get-popular-products'
import { signInMock } from './sign-in-mock'
import { signUpMock } from './sign-up-mock'

export const worker = setupWorker(
  signInMock,
  signUpMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
