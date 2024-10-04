import { Document, Schema, Types, model, models } from 'mongoose'

export interface IUser extends Document {
  _id: Types.ObjectId
  username: string
  password: string
  email: string
  isDeactivated?: boolean
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isDeactivated: {
    type: Boolean,
    default: false,
  },
})

const User = models.User || model<IUser>('User', UserSchema)

export default User
