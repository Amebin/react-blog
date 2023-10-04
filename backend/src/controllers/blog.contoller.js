import blogService from '../services/publications.service.js'
import { response } from '../helpers/response.helper.js'
import { catchedAsync } from '../helpers/catchedasync.js'
const getAllPublications = async (req, res) => {
  const publications = await blogService.getPublications()
  response(res, 200, publications)
}
const getPublication = async (req, res) => {
  const { id } = req.params
  const publication = await blogService.getPublication(id)
  response(res, 200, publication)
}
const createPublication = async (req, res) => {
  const newPublication = req.body
  await blogService.createPublication(newPublication)
  res.json({ message: 'publicacion creada', status: 201 })
}
const deletePublication = async (req, res) => {
  const { id } = req.params
  await blogService.deletePublication(id)
  res.json({ message: 'publicacion eliminada' })
}
const updatePublication = async (req, res) => {
  const dataUpdate = req.body
  const { id } = req.params
  await blogService.updatePublication(id, dataUpdate)
  res.json({ message: 'update' })
}

export default {
  getAllPublications: catchedAsync(getAllPublications),
  getPublication: catchedAsync(getPublication),
  createPublication: catchedAsync(createPublication),
  deletePublication: catchedAsync(deletePublication),
  updatePublication: catchedAsync(updatePublication)
}
