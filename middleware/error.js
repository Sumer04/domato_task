export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "internal server error";
  err.status = err.status || 500;
  res.status(err.status).json({ success: false, message: err.message });
};
