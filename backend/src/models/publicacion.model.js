import { Schema, model } from 'mongoose'
const collection = 'Publication'
const PublicationSchema = new Schema({
  content: {
    type: String,
    require: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    default: 'Admin'
  },
  description: {
    type: String,
    required: true
  }
},
{
  timestamps: true,
  versionKey: false
})
export default model(collection, PublicationSchema)
