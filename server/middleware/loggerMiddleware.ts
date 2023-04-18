import { middleware, publicProcedure } from '../src/trpcInit'

interface LogProps {
  path: string,
  type: "query" | "mutation" | "subscription",
  durationMs: number
}

const logMock = (message: string, { path, type, durationMs }: LogProps) => {
  console.log(message, { path, type, durationMs });
};

export const loggerMiddleware = middleware(async ({ path, type, next }) => {
  const start = Date.now();
  const result = await next();
  const durationMs = Date.now() - start;
  result.ok
    ? logMock('OK request timing:', { path, type, durationMs })
    : logMock('Non-OK request timing', { path, type, durationMs });

  return result;
});

export const loggedProcedure = publicProcedure.use(loggerMiddleware);

