import mongoose from 'mongoose'

const { Schema } = mongoose
// const toID = mongoose.Types.ObjectId

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    accountBalance: {
      type: Number,
      required: true,
    },
    transactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'TransactionModal',
      },
    ],
  }
  // { collection: 'user-schema' }
  
)

const transactionSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
    fromUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModal',
      required: true
    },
    toUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModal',
      required: true
    },
    amount: {
      type: Number,
      required: true,
    },
  }
  // { collection: 'transaction-schema' }
)

export const User = mongoose.model('UserModal', userSchema)
export const Transaction = mongoose.model('TransactionModal', transactionSchema)
