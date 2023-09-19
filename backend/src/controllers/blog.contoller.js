import {
  getPublicationsService,
  createPublicationService,
  deletePublicationService,
  updatePublicationService,
  getPublicationService
} from '../services/publications.service.js'
export const getAllPublications = async (req, res) => {
  try {
    const publications = await getPublicationsService()
    res.json(publications)
  } catch (error) {
    throw new Error(error)
  }
}
export const getPublication = async (req, res) => {
  try {
    const { id } = req.body
    const publication = await getPublicationService(id)
    res.json(publication)
  } catch (error) {
    throw new Error(error)
  }
}
export const createPublication = async (req, res) => {
  try {
    const publication = req.body.publication
    await createPublicationService(publication)
    res.json({ message: 'publicacion creada', status: 201 })
  } catch (error) {
    throw new Error(error)
  }
}
export const deletePublication = async (req, res) => {
  try {
    const { id } = req.param
    await deletePublicationService(id)
    res.json({ message: 'publicacion eliminada' })
  } catch (error) {
    throw new Error(error)
  }
}
export const updatePublication = async (req, res) => {
  try {
    const data = req.body
    await updatePublicationService({ data })
    res.json({ message: 'update' })
  } catch (error) {
    throw new Error(error)
  }
}
