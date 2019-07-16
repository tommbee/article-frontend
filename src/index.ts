import Koa from 'koa';
import { config } from './config';
import { routes } from './routes/article';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

app.use(bodyParser())
app.use(routes);

app.listen(config.port);

console.log(`Server running on port ${config.port}`);
