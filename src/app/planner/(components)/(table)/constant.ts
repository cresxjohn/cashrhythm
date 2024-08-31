const columns = [
  { name: 'ID', uid: 'id', sortable: true },
  { name: 'NAME', uid: 'name', sortable: true },
  { name: 'AMOUNT', uid: 'amount', sortable: true },
  { name: 'TYPE', uid: 'type', sortable: true },
  { name: 'ACCOUNT', uid: 'account', sortable: true },
  { name: 'RECURRING', uid: 'recurring', sortable: true },
  { name: 'START/DUE DATE', uid: 'startDueDate', sortable: true },
  { name: 'FREQUENCY', uid: 'frequency', sortable: true },
  { name: 'END DATE', uid: 'endDate', sortable: true },
  { name: 'LAST PAYMENT DATE', uid: 'lastPaymentDate', sortable: true },
  { name: 'NEXT DUE DATE', uid: 'nextDueDate', sortable: true },
  { name: 'DAYS TO GO', uid: 'daysToGo', sortable: true },
  { name: 'LINK', uid: 'link', sortable: true },
  { name: 'ACTIONS', uid: 'actions' },
]

const typeOptions = [
  { name: 'Income', uid: 'income' },
  { name: 'Expense', uid: 'expense' },
  { name: 'Transfer', uid: 'transfer' },
]

const records = [
  {
    id: 1,
    name: 'EW Salary',
    amount: '₱ 30,000.00',
    account: 'Own Bank',
    type: 'income',
    recurring: 'Yes',
    startDueDate: '2023 Jul 21',
    frequency: 'Fortnightly',
    endDate: null,
    lastPaymentDate: '2024 Aug 16',
    nextDueDate: '2024 Aug 30',
    daysToGo: -4,
    link: 'https://www.online.bayad.com/dashboard',
  },
  {
    id: 2,
    name: 'EW Bank Personal Loan',
    amount: '₱ 14,891.67',
    account: 'Own Bank',
    type: 'expense',
    recurring: 'Yes',
    startDueDate: '2024 Jul 28',
    frequency: 'Monthly',
    endDate: '2026 Jun 28',
    lastPaymentDate: '2024 Jul 28',
    nextDueDate: '2024 Aug 28',
    daysToGo: 2,
    link: 'https://www.online.bayad.com/dashboard',
  },
  {
    id: 3,
    name: 'UB Personal Loan Payment',
    amount: '₱ 30,000.00',
    account: 'Own Bank',
    destinationAccount: 'UnionBank Savings',
    type: 'transfer',
    recurring: 'Yes',
    startDueDate: '2023 Jul 21',
    frequency: 'Monthly',
    endDate: null,
    lastPaymentDate: '2024 Aug 16',
    nextDueDate: '2024 Aug 30',
    daysToGo: -1,
  },
  {
    id: 4,
    name: 'EW Salary',
    amount: '₱ 30,000.00',
    account: 'Own Bank',
    type: 'income',
    recurring: 'Yes',
    startDueDate: '2023 Jul 21',
    frequency: 'Fortnightly',
    endDate: null,
    lastPaymentDate: '2024 Aug 16',
    nextDueDate: '2024 Aug 30',
    daysToGo: 0,
  },
  {
    id: 5,
    name: 'EW Bank Personal Loan',
    amount: '₱ 14,891.67',
    account: 'Own Bank',
    type: 'expense',
    recurring: 'Yes',
    startDueDate: '2024 Jul 28',
    frequency: 'Monthly',
    endDate: '2026 Jun 28',
    lastPaymentDate: '2024 Jul 28',
    nextDueDate: '2024 Aug 28',
    daysToGo: 2,
  },
  {
    id: 6,
    name: 'UB Personal Loan Payment',
    amount: '₱ 30,000.00',
    account: 'Own Bank',
    destinationAccount: 'UnionBank Savings',
    type: 'transfer',
    recurring: 'Yes',
    startDueDate: '2023 Jul 21',
    frequency: 'Monthly',
    endDate: null,
    lastPaymentDate: '2024 Aug 16',
    nextDueDate: '2024 Aug 30',
    daysToGo: 1,
    link: 'https://www.online.bayad.com/dashboard',
  },
]

export { columns, records, typeOptions }