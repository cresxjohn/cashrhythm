import Client from '../models/client'
import Payment, { IPayment } from '../models/payment'

export const createPayment = async (
  _: any,
  { clientID, input }: { clientID: string; input: IPayment }
) => {
  const newPayment = await Payment.create(input)

  await Client.findByIdAndUpdate(clientID, {
    $push: { payments: newPayment._id },
  })

  return newPayment
}

export const updatePayment = async (
  _: any,
  { paymentID, input }: { paymentID: string; input: Partial<IPayment> }
) => {
  const updatedPayment = await Payment.findByIdAndUpdate(paymentID, input, {
    new: true,
  })

  return updatedPayment
}

export const archivePayment = async (
  _: any,
  { paymentID }: { paymentID: string }
) => {
  const updatedPayment = await Payment.findByIdAndUpdate(
    paymentID,
    { isArchived: true },
    { new: true }
  )

  return updatedPayment
}

export const unarchivePayment = async (
  _: any,
  { paymentID }: { paymentID: string }
) => {
  const updatedPayment = await Payment.findByIdAndUpdate(
    paymentID,
    { isArchived: false },
    { new: true }
  )

  return updatedPayment
}

export const deletePayment = async (
  _: any,
  { paymentID }: { paymentID: string }
) => {
  const updatedPayment = await Payment.findByIdAndUpdate(
    paymentID,
    { isDeleted: true },
    { new: true }
  )

  return updatedPayment
}

export default {
  Query: {},
  Mutation: {
    createPayment,
    updatePayment,
    archivePayment,
    unarchivePayment,
    deletePayment,
  },
}
