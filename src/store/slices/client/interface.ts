import { DateValue } from '@nextui-org/react'

export interface Client {
  user: User
  accounts: Account[]
  payments: Payment[]
}

export interface User {
  username: string
  email: string
}

export interface Account {
  _id?: number | string
  name: string
  category: string
  balance: number
  accountNumber?: string
  creditLimit?: number
  onHoldAmount?: number
  statementDate?: Date | DateValue | string
  daysFromStatementToDueDate?: number
  annualFee?: number
  dateIssued?: Date | DateValue
  excludeInStats?: boolean
  isArchived?: boolean
  isDeleted?: boolean
}

export interface Payment {
  name: string
  amount: number
  fromAccount: Account
  toAccount?: Account
  isRecurring: boolean
  startDate: Date
  frequency?: Date
  recurringEndType?: string
  endDate?: Date
  noOfEvents?: number
  url?: string
  payee?: string
  note?: string
  transactions: Transaction[]
  isArchived?: boolean
  isDeleted?: boolean
}

export interface Transaction {
  amount: number
  dueDate: Date
  paymentDate?: Date
  isSkipped?: boolean
  isPaid?: boolean
}
