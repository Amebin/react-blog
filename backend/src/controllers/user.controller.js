import { registerServices, loginService, updateUserService, deleteUserService } from '../services/users.service.js'

export const registerController = async (req, res) => {
  const { username, password, email, confirmPassword } = req.body
  try {
    const register = await registerServices(username, password, email, confirmPassword)
    res.json(register).status(200)
  } catch (error) {
    console.log(error)
  }
}
export const loginController = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await loginService(username, password)
    res.json(user).status(200)
  } catch (error) {
    console.log(error)
  }
}
export const updateUserController = async (req, res) => {
  const dataUpdate = req.body
  try {
    const update = await updateUserService(dataUpdate)
    res.json(update)
  } catch (error) {
    console.log(error)
  }
}
export const deleteUserController = async (req, res) => {
  const { id } = req.body
  try {
    const deleteUser = await deleteUserService(id)
    res.json(deleteUser)
  } catch (error) {
    console.log(error)
  }
}
// Importa las funciones y servicios desde módulos ESM
import { getAllMovies, getMovieById } from '../services/moviesService.js'
import { catchedAsync } from '../utils/catchedAsync.js'

// Define las funciones con la sintaxis de funciones flecha
const getMovies = async (req, res) => {
  const movies = await getAllMovies()
  res.status(200).json(movies)
}

const getMovieByI2d = async (req, res) => {
  const { id } = req.params
  const movie = await getMovieById(id)
  res.status(200).json(movie)
}

// Exporta las funciones con ESM
export default {
  getMovies,
  getMovieByI2d
}
