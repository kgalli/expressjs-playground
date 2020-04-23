import { Request, Response } from 'express';
import NotFound from '../exceptions/not-found';

export default function notFoundHandler(req: Request, res: Response): void {
  throw new NotFound();
}
