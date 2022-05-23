import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  accountBalance: {
    type: Number,
    required: true,
  },
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'transaction',
    },
  ],
})

const transactionSchema = new Schema({
  transactionTime: {
    type: Date,
    default: Date.now,
  },
  transactionGrand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  transactionReceive: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  transactionAmount: {
    type: Number,
    required: true,
  },
})

export const User = mongoose.model('user', userSchema)
export const Transaction = mongoose.model('transaction', transactionSchema)
