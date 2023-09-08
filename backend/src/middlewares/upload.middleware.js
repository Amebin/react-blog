import multer from 'multer'
import path from 'path'

const TYPE_IMAGES = {
  'image/jpg': 'jpg',
  'image/png': 'png',
  'image/jpeg': 'jpeg'
}
// con la propiedad Filename establecemos como se llamaran las imagenes y donde se guardarans
const storage = multer.diskStorage({
  destination: path.join('../../public/images'),
  filename: (req, file, cb) => {
    const extension = TYPE_IMAGES[file.mimetype]
    const name = file.originalname.split(' ').join('_')
    cb(null, name + Date.now() + '.' + extension)
  }
})
// Le indicamos a multer donde debe dejar las imagenes
export const upload = multer({ storage, dest: path.join('../../public/images') }).single('img')
