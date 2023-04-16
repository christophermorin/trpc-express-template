import { router, publicProcedure } from '../src/app'
import { z } from 'zod'
import { userModel } from "../db/Users";

export const userRouter = router({
  getUsers: publicProcedure.query(async (req) => {
    return await userModel.getAll()
  }),
  createUser: publicProcedure.input(z.object({ name: z.string() }))
    .mutation(async (req) => {
      return userModel.createNewUser(req.input)
    }),
})