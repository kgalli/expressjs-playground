import { Request, Response } from 'express';
import NotFound from '../exceptions/not-found';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function notFoundHandler(req: Request, res: Response): void {
  throw new NotFound();
}
