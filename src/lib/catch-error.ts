import {
  NextFunction, Request, RequestHandler, Response,
} from 'express';

export default function catchError(routerFunction: RequestHandler): RequestHandler {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function innerCatchError(req: Request, res: Response, next: NextFunction): Promise<any> {
    return routerFunction(req, res, next).catch(next);
  };
}
