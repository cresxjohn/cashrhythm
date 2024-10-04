import User, { IUser } from '../models/user'
import Client from '../models/client'

export const createUser = async (_: any, { input }: { input: IUser }) => {
  const newUser = await User.create(input)

  const newClient = await Client.create({
    user: newUser._id,
    accounts: [],
    payments: [],
  })

  return { user: newUser, client: newClient }
}

export const deactivateUser = async (
  _: any,
  { userID }: { userID: string }
) => {
  const updatedUser = await User.findByIdAndUpdate(
    userID,
    { isDeactivated: true },
    { new: true }
  )

  return updatedUser
}

export default {
  Query: {},
  Mutation: {
    createUser,
    deactivateUser,
  },
}
