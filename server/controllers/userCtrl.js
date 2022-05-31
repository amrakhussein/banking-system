import mongoose from 'mongoose'
import { User } from '../models/Schemas.js'

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

export const createUser = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'It cannot be empty!',
    })
    return
  }
  const { username, email, accountBalance } = req.body
  try {
    const newUser = {
      _id: new mongoose.Types.ObjectId,
      username,
      email,
      accountBalance,
      // transactions,
    }
    // const newUserCreated = await User.create(newUser)
    const newUserCreated = await new User(newUser)
    const result = await newUserCreated.save()
    console.log('newUserCreated: ', result)

    const usersInfoJson = {
      success: true,
      data: newUserCreated,
    }

    res.status(200).json(usersInfoJson)
    mongoose.disconnect()

  } catch (err) {
    const userErrorJson = {
      success: false,
      message: "Error has occured while creating a user",
    }
    return res.status(500).json(userErrorJson)
  }
}
