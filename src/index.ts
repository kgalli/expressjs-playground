import http from 'http';
import createApp from './app/app';
import health from './app/handlers/health-handler';

const router = [];

router.push(health);

const app = createApp(router);
const server = http.createServer(app);

server.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${app.get('port')}`);
});
