import { NextFunction, Request, Response } from 'express';
import NotFound from '../exceptions/not-found';
import defaults from '../../lib/http-status-codes.json';

interface ProblemResponse {
  status: number;
  name: string;
  code: string;
  title: string;
  message: string;
  instance: string;
}

export default function defaultErrorHandler(err: Error, req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction): void {
  let problemResponse: ProblemResponse = {
    status: 500,
    name: 'InternalServerErrorAPIException',
    code: 'server.internal_error',
    title: 'Internal Server Error',
    message: 'A server error has been encountered',
    instance: req.url,
  };

  if (err instanceof NotFound) {
    problemResponse = { ...problemResponse, ...defaults[404] };
  }

  res.status(problemResponse.status || 500);
  res.send(problemResponse);
}
