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
    const { fromUser, toUser, amount } = req.body

    // const sender = await User.find({username: fromUser})
    const sender = await User.where('username').equals(fromUser)
    console.log('sender: ', sender[0].transactions)
    const receiver = await User.where('username').equals(toUser)
    console.log('receiver: ', receiver)

    const transactionData = {
      sender,
      receiver,
      amount,
      transaction: {
        _id: new mongoose.Types.ObjectId(),
        fromUser: sender[0]._id,
        toUser: receiver[0]._id,
        amount,
      },
    }

    const transactionInfoJson = await createTransaction(transactionData)
    console.log('transactionInfoJson: ', transactionInfoJson)

    res.status(200).json(transactionInfoJson)
    mongoose.disconnect()
  } catch (err) {
    const userErrorJson = {
      success: false,
      message: `Error has occured while creating a transaction - ${err.message}`,
    }
    return res.status(500).json(userErrorJson)
  }
}

const createTransaction = async (transactionData) => {
  const { sender, receiver, amount, transaction } = transactionData
  // perform transation from sender to receiver
  sender[0].accountBalance -= Number(amount)
  receiver[0].accountBalance += Number(amount)

  // add new transaction to Sender's transactions history
  sender[0].transactions.push(transaction)

  // save the transaction operation
  await sender[0].save()
  await receiver[0].save()
  const transactionCreated = await Transaction.create(transaction)
  console.log('Transaction Created::: ', transactionCreated)

  const transactionInfoJson = {
    success: true,
    data: transactionCreated,
  }
  return transactionInfoJson
}
