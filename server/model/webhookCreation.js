
 
import mongoose  from "mongoose";
const webhookCreationSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  shop_name: {
    type: String,
    required: true,
  },
  shop_id: {
   type: String,
  },
  created_at: {
    type: Date
  }

}, {collection: 'webhook_creation'})

const webhookCreation = mongoose.model("webhookCreationSchema", webhookCreationSchema)

export default webhookCreation;
 