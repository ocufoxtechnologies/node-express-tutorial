import { model, Schema } from "mongoose";

const transactionSchema = Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["debit", "credit"]
    },
    amount: {
      type: Number,
      required: true
    },
    account: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "account"
    }
  },
  { timestamps: true }
);

export default model("transaction", transactionSchema);
