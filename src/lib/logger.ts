import { NextFunction, Request, Response } from 'express';

export default function logger(req: Request, res: Response, next: NextFunction): void {
  res.on('close', () => {
    // eslint-disable-next-line no-console
    console.log(`${req.method} - ${req.url} - (status) ${res.statusCode}`);
  });
  next();
}
