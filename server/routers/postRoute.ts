import { router, publicProcedure } from '../src/app'
import { z } from 'zod'
import { postModel } from '../db/Posts'

export const postRouter = router({
  getPosts: publicProcedure.query(async (req) => {
    return await postModel.getAll()
  }),
  createPost: publicProcedure.input(z.object({ title: z.string(), content: z.string() }))
    .mutation(async (req) => {
      return await postModel.createNewPost(req.input)
    })
})