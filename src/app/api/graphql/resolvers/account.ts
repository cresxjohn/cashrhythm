import { Query } from 'mongoose'
import Account, { IAccount } from '../models/account'
import Client from '../models/client'

export const createAccount = async (
  _: any,
  { clientId, input }: { clientId: string; input: IAccount }
) => {
  const newAccount = await Account.create(input)

  await Client.findByIdAndUpdate(clientId, {
    $push: { accounts: newAccount._id },
  })

  return newAccount
}

export const updateAccount = async (
  _: any,
  { accountId, input }: { accountId: string; input: Partial<IAccount> }
) => {
  const updatedAccount = await Account.findByIdAndUpdate(accountId, input, {
    new: true,
  })

  return updatedAccount
}

export const archiveAccount = async (
  _: any,
  { accountId }: { accountId: string }
) => {
  const updatedAccount = await Account.findByIdAndUpdate(
    accountId,
    { isArchived: true },
    { new: true }
  )

  return updatedAccount
}

export const unarchiveAccount = async (
  _: any,
  { accountId }: { accountId: string }
) => {
  const updatedAccount = await Account.findByIdAndUpdate(
    accountId,
    { isArchived: false },
    { new: true }
  )

  return updatedAccount
}

export const deleteAccount = async (
  _: any,
  { accountId }: { accountId: string }
) => {
  const updatedAccount = await Account.findByIdAndUpdate(
    accountId,
    { isDeleted: true },
    { new: true }
  )

  return updatedAccount
}

export default {
  Query: {},
  Mutation: {
    createAccount,
    updateAccount,
    archiveAccount,
    unarchiveAccount,
    deleteAccount,
  },
}
