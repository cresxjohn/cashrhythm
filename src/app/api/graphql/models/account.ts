import { Document, Schema, model, models } from 'mongoose'

export interface IAccount extends Document {
  name: string
  category: string
  balance: number
  creditLimit?: number
  onHoldAmount?: number
  statementDate?: Date
  daysFromStatementToDueDate?: number
  dateIssued?: Date
  excludeInStats?: boolean
  isArchived?: boolean
  isDeleted?: boolean
}

const AccountSchema = new Schema<IAccount>({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  creditLimit: {
    type: Number,
    required: false,
  },
  onHoldAmount: {
    type: Number,
    required: false,
  },
  statementDate: {
    type: Date,
    required: false,
  },
  daysFromStatementToDueDate: {
    type: Number,
    required: false,
  },
  dateIssued: {
    type: Date,
    required: false,
  },
  excludeInStats: {
    type: Boolean,
    default: false,
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

const Account = models.Account || model<IAccount>('Account', AccountSchema)

export default Account
