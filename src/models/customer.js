import { model, Schema } from "mongoose";

const customerSchema = Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  }
});

export default model("customer", customerSchema);
