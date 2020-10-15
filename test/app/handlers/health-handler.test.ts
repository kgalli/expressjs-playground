import chai from 'chai';
import request from 'supertest';

import { NextFunction, Request, Response } from 'express';
import createApp from '../../../src/app/app';
import healthRouter from '../../../src/app/handlers/health-handler';

const { expect } = chai;
const dummyLogger = (req: Request, res: Response, next: NextFunction) => { next(); };
const app = createApp([healthRouter], dummyLogger);

describe('Health handler', async () => {
  context('GET /health', () => {
    it('responds with status code 200', async () => {
      const response = await request(app).get('/health');

      expect(response.status)
        .to.eql(200);
    });

    it('responds with app version', async () => {
      const response = await request(app).get('/health');

      expect(response.body)
        .have.property('app_version')
        .and.to.be.a('string')
        .and.to.match(/[0-9]*\.[0-9]*\.[0-9]*/);
    });
  });
});
