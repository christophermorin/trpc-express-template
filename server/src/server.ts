import express from 'express';
import cors from 'cors'
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from '../routers/_app'
import { createContext } from './trpcInit';

const app = express();


app.use(cors())
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
    // onError: () => console.log('error'),

  }),
);


app.listen(4000, () => {
  console.log('Server is listening on port 4000!');
});