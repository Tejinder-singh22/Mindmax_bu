
 
import { Double } from "mongodb";
import mongoose  from "mongoose";
const orderCheckoutSchema = new mongoose.Schema({
  checkout_id: {
    type: Number,
    required: true,
  },
 checkout_token: {
    type: String
  },
  shop_name: {
    type: String,
    required: true,
  },
  cart_token: {
    type: String,
  }, 
  checkout_order_data: {
      type: Array,
  },
  created_at: {
    type: Date
  }

}, {collection: 'checkout_information'})

const OrderCheckout = mongoose.model("orderCheckoutSchema", orderCheckoutSchema)

export default OrderCheckout;
 