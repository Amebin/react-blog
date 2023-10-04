export const response = async (res, status, data) => {
  res.status(status).json({
    error: false,
    data
  })
}
