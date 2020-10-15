import express, { Application, RequestHandler, Router } from 'express';
import defaultErrorHandler from './handlers/default-error-handler';
import defaultLogger from '../lib/logger';
import notFoundHandler from './handlers/not-found-handler';

const defaultAppConfig = {
  port: 7777,
  environment: 'development',
};

export interface AppConfig {
  port: number;
  environment: string;
}

export default function createApp(
  routers: Router[],
  logger: RequestHandler = defaultLogger,
  appConfig: AppConfig = defaultAppConfig,
): Application {
  const app = express();

  app.set('port', appConfig.port);
  app.set('env', appConfig.environment);

  app.use(logger);

  routers.forEach((router) => {
    app.use('/', router);
  });

  app.use(notFoundHandler);
  app.use(defaultErrorHandler);

  return app;
}
