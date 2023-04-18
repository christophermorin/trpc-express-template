import { TRPCError } from '@trpc/server';
import { publicProcedure } from '../src/trpcInit';
import { loggerMiddleware } from './loggerMiddleware'

export const isAdmin = loggerMiddleware.unstable_pipe(async ({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      user: ctx.user
    },
  });
});

export const adminProcedure = publicProcedure.use(isAdmin);