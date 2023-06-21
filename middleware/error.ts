const errorMiddleware = (err, req, res, next) => {
    // Log the error to the console
    console.error(err.stack);
  
    // Send a JSON response with the error details
    res.status(500).json({
      message: err.message,
      error: err,
    });
  };
  export default errorMiddleware