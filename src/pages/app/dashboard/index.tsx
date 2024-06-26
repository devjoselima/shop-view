import { Helmet } from 'react-helmet-async'

import {
  DayOrdersAmountCard,
  MonthCanceledOrdersCard,
  MonthOrdersAmountCard,
  MonthRevenueCard,
  PopularChart,
  RevenueChart,
} from './components'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularChart />
        </div>
      </div>
    </>
  )
}
