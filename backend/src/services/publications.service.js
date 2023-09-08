import Publication from '../models/publicacion.model.js'
import { borrarImagen } from '../helpers/eliminar-imagen.helper.js'
import path from 'path'

export const getPublicationsService = async (req, res) => {
  try {
    const publications = await Publication.find()
    return publications
  } catch (error) {
    console.log(error)
  }
}
export const createPublicationService = async (req, res) => {
  const imgUrl = './images/' + req.file.filename
  const { descripcion, titulo, contenido } = req.body
  const sessionPromise = Publication.startSession()
  const publication = new Publication({
    titulo,
    descripcion,
    contenido,
    imgUrl
  })
  sessionPromise.then((session) => {
    session.startTransaction()
    publication.save({ session }).then(() => {
      session.commitTransaction()
    }).catch((error) => {
      session.abortTransaction().then(() => { throw error })
    }).finally(() => {
      session.endSession()
    })
  })
    .then(() => {
      res.redirect('/solicitud')
    })
    .catch((error) => {
      res.render('error404', { error })
    })
}
export const deletePublicationService = async (req, res) => {
  const { id } = req.params
  Publication.findById({ _id: id }).then((publicacion) => {
    const imgUrl = path.join('../../public', publicacion.imgUrl)
    borrarImagen(imgUrl)
  }).catch((error) => res.render('error404', { error }))
  Publication.deleteOne({ _id: id })
    .then(() => {
      res.redirect('/')
    })
    .catch((error) => res.render('error404', { error }))
}
export const updatePublicationService = async (req, res) => {
  const id = req.params.id
  const publicacion = Publication.findById(id)
  if (!publicacion) res.status(404).json('publicacion no encontrada')
  const dataUpdate = req.body
  Publication.updateOne({ _id: id }, dataUpdate)
    .then(() => {
      res.redirect('/')
    }).catch((error) => res.render('error404', { error }))
}
export const solicitudesService = async (req, res) => {
  res.render('solicitudes')
  console.log('hola')
}
export const getPublicationService = async (req, res) => {
  const { id } = req.params
  Publication.findById(id).then((publicacion) => {
    res.render('publicacion', { publicacion })
  }).catch((error) => res.render('error404', { error }))
}
