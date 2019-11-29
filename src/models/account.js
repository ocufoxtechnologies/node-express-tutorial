import { model, Schema } from "mongoose";

const accountSchema = Schema({
  type: {
    type: String,
    required: true,
    enum: ["savings", "current"]
  },
  balance: {
    type: Number,
    required: true
  },
  accountNumber: {
    type: String,
    required: true
  },
  customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "customer"
  }
});

export default model("account", accountSchema);
