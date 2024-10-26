'use client'

import InfoCircleIcon from '@/assets/icons/svg/InfoCircleIcon'
import { formatMoney } from '@/formats/accounting'
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  Tooltip,
} from '@nextui-org/react'
import { FC } from 'react'

interface Props {
  date: string
}

const itemClasses = {
  base: 'p-0 w-full shadow-none',
  title: 'font-normal text-medium',
  trigger: 'p-4 pr-1 rounded-lg flex items-center',
  indicator: 'text-medium',
  content: 'px-4 pb-4 -mt-2',
}

const CashflowItem: FC<Props> = (props) => {
  const { date } = props

  // TODO: Fetch cashflow data for the given date
  const cashflow = {
    income: formatMoney(70424),
    expense: formatMoney(-3405),
    transfer: formatMoney(37789),
    surplus: formatMoney(302),
    balance: formatMoney(1400),
    breakdown: {
      income: [
        {
          key: 1,
          name: 'Poplar Salary',
          category: 'Wage',
          account: 'Owner Bank',
          amount: formatMoney(37789),
        },
        {
          key: 2,
          name: 'EW Salary',
          category: 'Wage',
          account: 'Owner Bank',
          amount: formatMoney(33786),
        },
      ],
      expenses: [
        {
          key: 1,
          name: 'Electricity',
          category: 'Utilities',
          account: 'Owner Bank',
          amount: formatMoney(3405),
        },
      ],
      transfers: [
        {
          key: 1,
          name: 'Poplar Salary',
          fromAccount: 'BPI Savings',
          toAccount: 'Owner Bank',
          amount: formatMoney(37789),
          feeAmount: formatMoney(-15),
        },
      ],
    },
  }

  return (
    <Accordion
      className="p-0 w-full"
      variant="splitted"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key={date}
        indicator={<div />}
        title={
          <div className="flex">
            <p className="w-[20%]">{date}</p>
            <p className="w-[20%] text-right text-green-400">
              {cashflow.income}
            </p>
            <p className="w-[20%] text-right text-orange-400">
              {cashflow.expense}
            </p>
            <p className="w-[20%] text-right text-purple-400">
              {cashflow.transfer}
            </p>
            <p className="w-[20%] text-right">{cashflow.surplus}</p>
            <p className="w-[20%] text-right">{cashflow.balance}</p>
          </div>
        }
      >
        <Card shadow="none" className="bg-background">
          <CardBody className="p-4">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="flex space-x-1 text-gray-600">
                  <p className="text-xs mb-3">Income Breakdown</p>
                  <Tooltip content="Breaksdown the income transactions for this day.">
                    <InfoCircleIcon className="mt-0.5" size={12} />
                  </Tooltip>
                </div>
                <div className="flex flex-col gap-2">
                  {cashflow.breakdown.income.map((item) => (
                    <Card key={item.key} shadow="none" className="bg-white">
                      <CardBody className="py-3 px-4">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm font-medium mb-1">
                              {item.name}
                            </p>
                            <p className="text-sm font-extralight">
                              {item.category}{' '}
                              <span className="text-green-400">•</span>{' '}
                              {item.account}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-green-400 text-right">
                            {item.amount}
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex space-x-1 text-gray-600">
                  <p className="text-xs mb-3">Expenses Breakdown</p>
                  <InfoCircleIcon className="mt-0.5" size={12} />
                </div>
                <div className="flex flex-col gap-2">
                  {cashflow.breakdown.expenses.map((item) => (
                    <Card key={item.key} shadow="none" className="bg-white">
                      <CardBody className="py-3 px-4">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm font-medium mb-1">
                              {item.name}
                            </p>
                            <p className="text-sm font-extralight">
                              {item.category}{' '}
                              <span className="text-orange-400">•</span>{' '}
                              {item.account}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-orange-400 text-right">
                            {item.amount}
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex space-x-1 text-gray-600">
                  <p className="text-xs mb-3">Transfers Breakdown</p>
                  <InfoCircleIcon className="mt-0.5" size={12} />
                </div>
                <div className="flex flex-col gap-2">
                  {cashflow.breakdown.transfers.map((item) => (
                    <Card key={item.key} shadow="none" className="bg-white">
                      <CardBody className="py-3 px-4">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm font-medium mb-1">
                              {item.name}
                            </p>
                            <p className="text-sm font-extralight">
                              {item.fromAccount}{' '}
                              <span className="font-semibold text-purple-400">
                                {'->'}
                              </span>{' '}
                              {item.toAccount}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-purple-400 mb-1 text-right">
                              {item.amount}
                            </p>
                            {item.feeAmount && (
                              <p className="text-sm font-medium text-red-400 text-right">
                                {item.feeAmount} fee
                              </p>
                            )}
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </AccordionItem>
    </Accordion>
  )
}

export default CashflowItem
