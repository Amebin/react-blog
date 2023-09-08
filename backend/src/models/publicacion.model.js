import { Schema, model } from 'mongoose'
const collection = 'Publicacione'
const PublicationSchema = new Schema({
  imgUrl: {
    type: String
  },
  contenido: {
    type: String,
    require: true
  },
  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    default: 'Admin'
  },
  descripcion: {
    type: String,
    required: true
  },
  aside: {
    type: Boolean,
    default: false,
    required: false
  }
},
{
  timestamps: true,
  versionKey: false
})
export default model(collection, PublicationSchema)
