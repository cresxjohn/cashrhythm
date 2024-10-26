import Transaction, { ITransaction } from '../models/transaction'

export const updateTransaction = async (
  _: any,
  {
    transactionID,
    input,
  }: { transactionID: string; input: Partial<ITransaction> }
) => {
  const updatedTransaction = await Transaction.findByIdAndUpdate(
    transactionID,
    input,
    { new: true }
  )

  return updatedTransaction
}

export const skipTransaction = async (
  _: any,
  { transactionID }: { transactionID: string }
) => {
  const updatedTransaction = await Transaction.findByIdAndUpdate(
    transactionID,
    { isSkipped: true },
    { new: true }
  )

  return updatedTransaction
}

export const voidTransaction = async (
  _: any,
  { transactionID }: { transactionID: string }
) => {
  const updatedTransaction = await Transaction.findByIdAndUpdate(
    transactionID,
    { isVoided: true },
    { new: true }
  )

  return updatedTransaction
}

export const deleteTransaction = async (
  _: any,
  { transactionID }: { transactionID: string }
) => {
  const updatedTransaction = await Transaction.findByIdAndUpdate(
    transactionID,
    { isDeleted: true },
    { new: true }
  )

  return updatedTransaction
}

export default {
  Query: {},
  Mutation: {
    updateTransaction,
    skipTransaction,
    voidTransaction,
    deleteTransaction,
  },
}
