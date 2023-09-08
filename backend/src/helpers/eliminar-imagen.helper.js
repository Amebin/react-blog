import fs from 'fs'

export const borrarImagen = async (nombreDeLaImagen) => {
  console.log(nombreDeLaImagen)
  try {
    fs.unlinkSync(nombreDeLaImagen)
  } catch (err) {
    return err
  }
}
