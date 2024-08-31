import { Document, Schema, model, models } from 'mongoose'

export interface ITransaction extends Document {
  amount: number
  dueDate: Date
  paymentDate?: Date
  isSkipped?: boolean
  isPaid?: boolean
}

const TransactionSchema = new Schema<ITransaction>({
  amount: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: false,
  },
  isSkipped: {
    type: Boolean,
    default: false,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
})

const Transaction =
  models.Transaction || model<ITransaction>('Transaction', TransactionSchema)

export default Transaction
