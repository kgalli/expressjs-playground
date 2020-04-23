import { Request, Response, Router } from 'express';
import catchError from '../../lib/catch-error';

const appVersion = '0.0.3';

export async function getHealth(req: Request, res: Response): Promise<void> {
  const response = { app_version: appVersion };

  res.status(200).json(response);
}

const router = Router();

router.get('/health', catchError(getHealth));

export default router;
