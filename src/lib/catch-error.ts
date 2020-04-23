import {
  NextFunction, Request, RequestHandler, Response,
} from 'express';

export default function catchError(routerFunction: RequestHandler): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): Promise<any> {
    return routerFunction(req, res, next).catch(next);
  };
}
