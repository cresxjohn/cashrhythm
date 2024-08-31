import Transaction, { ITransaction } from '../models/transaction'

export const updateTransaction = async (
  _: any,
  {
    transactionId,
    input,
  }: { transactionId: string; input: Partial<ITransaction> }
) => {
  const updatedTransaction = await Transaction.findByIdAndUpdate(
    transactionId,
    input,
    { new: true }
  )

  return updatedTransaction
}

export const skipTransaction = async (
  _: any,
  { transactionId }: { transactionId: string }
) => {
  const updatedTransaction = await Transaction.findByIdAndUpdate(
    transactionId,
    { isSkipped: true },
    { new: true }
  )

  return updatedTransaction
}

export const voidTransaction = async (
  _: any,
  { transactionId }: { transactionId: string }
) => {
  const updatedTransaction = await Transaction.findByIdAndUpdate(
    transactionId,
    { isVoided: true },
    { new: true }
  )

  return updatedTransaction
}

export const deleteTransaction = async (
  _: any,
  { transactionId }: { transactionId: string }
) => {
  const updatedTransaction = await Transaction.findByIdAndUpdate(
    transactionId,
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
