import Client from '../models/client'
import Payment, { IPayment } from '../models/payment'

export const createPayment = async (
  _: any,
  { clientId, input }: { clientId: string; input: IPayment }
) => {
  const newPayment = await Payment.create(input)

  await Client.findByIdAndUpdate(clientId, {
    $push: { payments: newPayment._id },
  })

  return newPayment
}

export const updatePayment = async (
  _: any,
  { paymentId, input }: { paymentId: string; input: Partial<IPayment> }
) => {
  const updatedPayment = await Payment.findByIdAndUpdate(paymentId, input, {
    new: true,
  })

  return updatedPayment
}

export const archivePayment = async (
  _: any,
  { paymentId }: { paymentId: string }
) => {
  const updatedPayment = await Payment.findByIdAndUpdate(
    paymentId,
    { isArchived: true },
    { new: true }
  )

  return updatedPayment
}

export const unarchivePayment = async (
  _: any,
  { paymentId }: { paymentId: string }
) => {
  const updatedPayment = await Payment.findByIdAndUpdate(
    paymentId,
    { isArchived: false },
    { new: true }
  )

  return updatedPayment
}

export const deletePayment = async (
  _: any,
  { paymentId }: { paymentId: string }
) => {
  const updatedPayment = await Payment.findByIdAndUpdate(
    paymentId,
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
