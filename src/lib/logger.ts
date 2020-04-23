import { NextFunction, Request, Response } from 'express';

export default function logger(req: Request, res: Response, next: NextFunction) {
  res.on('close', () => {
    console.log(`${req.method} - ${req.url} - (status) ${res.statusCode}`);
  });
  next();
}
