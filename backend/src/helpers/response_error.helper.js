export const errorResponso = async (res, status = 400, message) => {
  res.status(status).json({
    error: true,
    message
  })
}
