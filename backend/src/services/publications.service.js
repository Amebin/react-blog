import ClientError from '../errors/client.error.js'
import Publication from '../models/publicacion.model.js'

const getPublications = async () => {
  try {
    const publications = await Publication.find()
    if (!publications) throw new ClientError('no hay publicaciones')
    return publications
  } catch (error) {
    throw new ClientError(error.message)
  }
}
const getPublication = async (id) => {
  try {
    const publication = await Publication.findById(id)
    if (!publication) throw new ClientError('la publicacion no existe')
    return (publication)
  } catch (error) {
    throw new ClientError('la publicacion no existe')
  }
}
const createPublication = async (publication) => {
  const { description, title, content } = publication

  try {
    const session = await Publication.startSession()
    session.startTransaction()

    const publication = Publication.create({
      description,
      title,
      content
    })
    await session.commitTransaction()
    session.endSession()

    return publication
  } catch (error) {
    console.error(error)
    return { error: 'Hubo un error al guardar la publicación.' }
  }
}
const deletePublication = async (id) => {
  try {
    const session = await Publication.startSession()
    session.startTransaction()

    const publication = Publication.findById({ _id: id })
    if (!publication) return 'la publicacion no existe'
    await Publication.deleteOne({ _id: id })

    await session.commitTransaction()
    session.endSession()

    return 'la publicacion fue eliminada con exito'
  } catch (error) {
    console.log(error)
  }
}
const updatePublication = async (id, dataUpdate) => {
  try {
    const publicacion = Publication.findById(id)
    if (!publicacion) return 'publicacion no encontrada'

    const session = await Publication.startSession()
    session.startSession()

    await Publication.updateOne({ _id: id }, { dataUpdate })

    await session.commitTransaction()
    await session.endSession()

    return 'la actualizacion fue exitosa'
  } catch (error) {
    console.log(error)
  }
}

export default {
  getPublication,
  createPublication,
  deletePublication,
  updatePublication,
  getPublications
}
