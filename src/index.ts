import http from 'http';
import process from 'process';
import createApp from './app/app';
import healthRouter from './app/handlers/health-handler';

const routers = [healthRouter];

const app = createApp(routers);
const server = http.createServer(app);

server.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Server started listening on port: ${app.get('port')}`);

  process.on('SIGINT', () => {
    // eslint-disable-next-line no-console
    console.info('Shutting down due to user request (CTRL-C)');
    process.exit(0);
  });
});
