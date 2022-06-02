import mongoose from 'mongoose'
import { Transaction, User } from '../models/Schemas.js'

export const handleTransation = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'It cannot be empty!',
    })
    return
  }
  try {
    const { transactionSender, transactionReceiver, transactionAmount } =
      req.body
    const transaction = {
      _id: new mongoose.Types.ObjectId(),
      transactionSender,
      transactionReceiver,
      transactionAmount,
    }

    const sender = await User.find({ username: transactionSender })
    console.log('sender: ', sender)
    const receiver = await User.find({ username: transactionReceiver })
    console.log('receiver: ', receiver)



    const transactionCreated = await Transaction.create(transaction)
    console.log('Transaction Created::: ', transactionCreated)

    // const transactionInfoJson = {
    //   success: true,
    //   data: transactionCreated,
    // }

    // res.status(200).json(transactionInfoJson)
    // mongoose.disconnect()
  } catch (err) {
    const userErrorJson = {
      success: false,
      message: `Error has occured while creating a transaction - ${err.message}`,
    }
    return res.status(500).json(userErrorJson)
  }
}
