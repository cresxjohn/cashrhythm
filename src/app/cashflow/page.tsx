'use client'

import { DATE_FORMAT } from '@/formats/date'
import HomeLayout from '@/layout/HomeLayout'
import { DateValue, parseDate } from '@internationalized/date'
import { DateRangePicker, RangeValue } from '@nextui-org/react'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { useMemo, useState } from 'react'
import CashflowItem from './(components)/cashflowItem'

dayjs.extend(isSameOrBefore)

const DEFAULT_DATE_RANGE_START = dayjs().format(DATE_FORMAT.server)
const DEFAULT_DATE_RANGE_END = dayjs()
  .add(12, 'months')
  .format(DATE_FORMAT.server)

const getCashflowDates = (start: string, end: string) => {
  const dates = []

  let startDate = dayjs(start)
  const endDate = dayjs(end)

  while (startDate.isSameOrBefore(endDate)) {
    dates.push(startDate.format(DATE_FORMAT.birthday))
    startDate = startDate.add(1, 'day')
  }

  return dates
}

const Cashflow = () => {
  const [dateRange, setDateRange] = useState<RangeValue<DateValue>>({
    start: parseDate(DEFAULT_DATE_RANGE_START),
    end: parseDate(DEFAULT_DATE_RANGE_END),
  })

  const dates = useMemo(
    () =>
      getCashflowDates(dateRange.start.toString(), dateRange.end.toString()),
    [dateRange]
  )

  return (
    <HomeLayout>
      <main className="flex min-h-screen flex-col py-10 px-4 gap-6">
        <div className="flex justify-between items-end mb-2">
          <p className="text-3xl font-semibold">Cashflow</p>
          <DateRangePicker
            className="max-w-[248px]"
            value={dateRange}
            onChange={setDateRange}
            visibleMonths={2}
          />
        </div>

        <div>
          {/* Header */}
          <div className="flex px-4 pb-3 text-xs font-medium text-gray-500 uppercase">
            <p className="w-[20%]">Date</p>
            <p className="w-[20%] text-right">Income</p>
            <p className="w-[20%] text-right">Expenses</p>
            <p className="w-[20%] text-right">Transfers</p>
            <p className="w-[20%] text-right">Surplus</p>
            <p className="w-[20%] text-right">Balance</p>
          </div>
          <div className="flex flex-col gap-0.5">
            {dates.map((date) => (
              <CashflowItem date={date} />
            ))}
          </div>
        </div>
      </main>
    </HomeLayout>
  )
}

export default Cashflow
