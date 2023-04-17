import { router } from '../src/trpcInit'
import { z } from 'zod'
import { userModel } from '../db/Users';
import { loggedProcedure } from '../middleware/loggerMiddleware'
import { adminProcedure } from '../middleware/adminMiddleware'

export const userRouter = router({
  getUsers: loggedProcedure.query(async (req) => {
    return await userModel.getAll()
  }),
  createUser: adminProcedure.input(z.object({ name: z.string() }))
    .mutation(async (req) => {
      return userModel.createNewUser(req.input)
    }),
})