import {
  getPublicationsService,
  createPublicationService,
  deletePublicationService,
  updatePublicationService,
  solicitudesService,
  getPublicationService,
} from '../services/publications.service.js'
export const getPublicationsCTRL = async (req, res) => {
  try {
    const publications = await getPublicationsService()
    res.json(publications)
  } catch (error) {
    console.log(error)
  }
}
export const createPublicationCTRL = async (req, res) => {
  try {
    await createPublicationService(req.body)
    res.json({ message: 'publicacion creada', status: 201 })
  } catch (error) {
    console.log(error)
  }
}
export const deletePublicationCTRL = async (req, res) => {
  try {
    const { id } = req.body
    await deletePublicationService(id)
    res.json({ message: 'publicacion eliminada' })
  } catch (error) {

  }
}
export const updatePublicationCTRL = async (req, res) => {
  try {
    const data = req.body
    await updatePublicationCTRL({ data })
    res.json({ message: 'update' })
  } catch (error) {
    throw new Error(error)
  }
}
export const solicitudesCTRL = async (req, res) => { res.json({ message: 'solicitudes' }) }
export const getPublicationCTRL = async (req, res) => { res.json({ message: '1 publicacion' }) }
