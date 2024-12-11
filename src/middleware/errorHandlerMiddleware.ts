import { NextFunction, Request, Response } from 'express';

const errorHandlerMiddleware = (err: any, req: Request, res: Response, next:NextFunction) => {
    console.error(err.stack);

    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        message: message,
    });
};

export default errorHandlerMiddleware;
