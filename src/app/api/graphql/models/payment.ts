import { Document, model, models, Schema, Types } from 'mongoose'
import { IAccount } from './account'
import { ITransaction } from './transaction'

export interface IPayment extends Document {
  name: string
  amount: number
  fromAccount: Types.ObjectId | IAccount
  toAccount?: Types.ObjectId | IAccount | null
  isRecurring: boolean
  startDate: Date
  frequency?: Date
  recurringEndType?: string
  endDate?: Date
  noOfEvents?: number
  url?: string
  payee?: string
  note?: string
  transactions: Types.DocumentArray<ITransaction>
  isArchived?: boolean
  isDeleted?: boolean
}

const PaymentSchema = new Schema<IPayment>({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  fromAccount: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  toAccount: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: false,
  },
  isRecurring: {
    type: Boolean,
    default: false,
  },
  startDate: {
    type: Date,
    required: true,
  },
  frequency: {
    type: Date,
    required: false,
  },
  recurringEndType: {
    type: String,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
  noOfEvents: {
    type: Number,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  payee: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
  transactions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Transaction',
      required: false,
    },
  ],
  isArchived: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

const Payment = models.Payment ||  model<IPayment>('Payment', PaymentSchema)

export default Payment
