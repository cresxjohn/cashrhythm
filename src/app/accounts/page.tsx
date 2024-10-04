'use client'

import AddIcon from '@/assets/icons/svg/AddIcon'
import SearchNormalIcon from '@/assets/icons/svg/SearchNormalIcon'
import HomeLayout from '@/layout/HomeLayout'
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  cn,
  Input,
  Tab,
  Tabs,
  useDisclosure,
} from '@nextui-org/react'
import { formatMoney } from 'accounting'
import { useCallback, useState } from 'react'
import AccountsAddModal from './(addModal)'
import { ACCOUNT_CATEGORIES } from './constant'

interface Account {
  id: number
  name: string
  category: string
  lastFourDigit?: number | null
  balance: number
  creditLimit?: number
}

const accounts: Account[] = [
  {
    id: 1,
    name: 'General Cash',
    category: 'Cash',
    lastFourDigit: null,
    balance: 2354312.34,
  },
  {
    id: 2,
    name: 'BPI Amore Cashback',
    category: 'Credit Card',
    lastFourDigit: 4532,
    balance: 12645.43,
    creditLimit: 31000,
  },
  {
    id: 3,
    name: 'Own Bank',
    category: 'Savings',
    lastFourDigit: 3535,
    balance: 122645.43,
  },
]

const Accounts = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedAccountID, setSelectedAccountID] = useState(0)
  const [filterValue, setFilterValue] = useState('')

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value)
    } else {
      setFilterValue('')
    }
  }, [])

  const onClear = useCallback(() => {
    setFilterValue('')
  }, [])

  const renderCards = (accounts: Account[]) => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {accounts.map((account) => {
          const hasLimit = account.creditLimit
          const limitUsage = account.creditLimit
            ? Math.floor((account.balance / account.creditLimit) * 100)
            : 0

          return (
            <Card
              key={account.id}
              className={cn('h-[132px] p-1 text-foreground', {
                'bg-color-primary text-white': selectedAccountID === account.id,
              })}
              shadow="none"
            >
              <div className="absolute bottom-0 " />
              <CardHeader className="flex-col items-start">
                <h4 className="opacity-90 font-medium text-md">
                  {account.name}
                </h4>
                <p className="text-tiny opacity-60 font-semibold uppercase">
                  {account.category}
                </p>
                {account.lastFourDigit && (
                  <p className="text-tiny opacity-60 font-bold">
                    •••• {account.lastFourDigit}
                  </p>
                )}
              </CardHeader>

              <CardFooter className="flex flex-row items-end gap-2 absolute bottom-0">
                <p className="text-xl font-medium opacity-60">₱</p>
                <p className="text-xl font-semibold ">
                  {formatMoney(account.balance, '')}
                </p>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    )
  }

  return (
    <HomeLayout>
      <main className="flex min-h-screen flex-col py-10 px-4 gap-6">
        <p className="text-3xl font-semibold mb-2">Accounts</p>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-3 items-end">
            <Input
              isClearable
              className="w-full sm:max-w-[44%]"
              placeholder="Search by name..."
              startContent={<SearchNormalIcon />}
              value={filterValue}
              onClear={() => onClear()}
              onValueChange={onSearchChange}
            />
            <div className="flex gap-3">
              <Button color="primary" endContent={<AddIcon />} onClick={onOpen}>
                Add New
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Tabs aria-label="Accounts">
            <Tab key="all" title="All">
              {renderCards(accounts)}
            </Tab>
            {Object.values(ACCOUNT_CATEGORIES).map((category) => (
              <Tab key={category} title={category}>
                {renderCards(
                  accounts.filter((account) => account.category === category)
                )}
              </Tab>
            ))}
          </Tabs>
        </div>
        <AccountsAddModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </main>
    </HomeLayout>
  )
}

export default Accounts
