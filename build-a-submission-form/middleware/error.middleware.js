const notFoundHandler = (req, res, next) => {
    const error = new Error(`Not found: ${req.originalUrl}`);
    error.status = 404;
    next(error);
};