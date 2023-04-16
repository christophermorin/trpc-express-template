import './App.css'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '../../server/routers/_app'

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
      // You can pass any HTTP headers you wish here

    }),
  ],
});

function App() {
  const handleClick = async () => {
    const allUsers = await client.user.getUsers.query()
    console.log(allUsers)
    const createUser = await client.user.createUser.mutate({ name: "Jesus" })
    console.log(createUser)

    const getAllPosts = await client.post.getPosts.query()
    console.log("---------------------")
    console.log(getAllPosts)
    const createPost = await client.post.createPost.mutate({ title: "Hello", content: "World" })
    console.log(createPost)
  }

  return (
    <div>
      <div onClick={handleClick}>Click Me</div>
    </div>
  )
}

export default App
