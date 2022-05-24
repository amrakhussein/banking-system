import { User } from '../models/Schemas'

export const fetchUsers = async (req, res) => {
  try {
    const users = await User.find({})

    const usersInfoJson = {
      success: true,
      data: users,
    }

    return res.status(200).json(usersInfoJson)
  } catch (err) {
    const userErrorJson = {
      success: false,
      message: "Error has occured while fetching users' data",
    }
    return res.status(500).json(userErrorJson)
  }
}
