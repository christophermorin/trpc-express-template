import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  const getUser = () => {
    if (req.headers.authorization !== 'secret') {
      return null;
    }
    return {
      name: 'alex',
    };
  };

  return {
    req,
    res,
    user: getUser(),
  };
};
type Context = inferAsyncReturnType<typeof createContext>;
const t = initTRPC.context<Context>().create(
  {
    errorFormatter({ shape, error }) {
      return {
        ...shape,
        data: {
          ...shape.data,
        },
      };
    },
  }
);

export const router = t.router
export const middleware = t.middleware
export const publicProcedure = t.procedure
