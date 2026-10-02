const notFoundHandler = (req, res, next) => {
    const error = new Error(`Not found: ${req.originalUrl}`);
    error.status = 404;
    next(error);
};

const finalErrorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    
    console.log(err);

    res.status(status).json({
        error: true,
        status: status,
        message: status === 500 ? 'Internal Server Error (Check Server Logs)' : err.message
    });
};

export {notFoundHandler, finalErrorHandler};