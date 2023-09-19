import Publication from '../models/publicacion.model.js'

export const getPublicationsService = async (req, res) => {
  try {
    const publications = await Publication.find()
    return publications
  } catch (error) {
    console.log(error)
  }
}
export const createPublicationService = async (req, res) => {
  const { descripcion, titulo, contenido } = req.body
  const sessionPromise = Publication.startSession()
  const publication = new Publication({
    titulo,
    descripcion,
    contenido
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
      res.json(publication).status(200)
    })
    .catch((error) => { console.log(error) })
}
export const deletePublicationService = async (req, res) => {
  const { id } = req.params
  const publication = Publication.findById({ _id: id }).then((publicacion) => {
  }).catch((error) => res.render('error404', { error }))
  if (!publication) return 'xd'
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
export const getPublicationService = async (req, res) => {
  const { id } = req.params
  Publication.findById(id).then((publicacion) => {
    res.render('publicacion', { publicacion })
  }).catch((error) => res.render('error404', { error }))
}
