import express from 'express';
import cors from 'cors'
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from '../routers/_app'
import { createContext } from './app';

const app = express();

app.use(cors())
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});