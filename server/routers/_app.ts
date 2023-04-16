import { router } from '../src/app'
import { postRouter } from './postRoute'
import { userRouter } from './userRoute'

export const appRouter = router({
  post: postRouter,
  user: userRouter
})

export type AppRouter = typeof appRouter

