import { Document, model, models, Schema, Types } from 'mongoose'
import { IAccount } from './account'
import { IPayment } from './payment'
import { IUser } from './user'

export interface IClient extends Document {
  user: Types.ObjectId | IUser
  accounts: Types.DocumentArray<IAccount>
  payments: Types.DocumentArray<IPayment>
}

const ClientSchema = new Schema<IClient>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  accounts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Account',
      required: true,
    },
  ],
  payments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Payment',
      required: true,
    },
  ],
})

const Client = models.Client ||  model<IClient>('Client', ClientSchema)

export default Client