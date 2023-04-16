import { client } from "@/trpc/trpc"
import { useState } from "react"
import { User } from '../../../server/types/types'

export default function TestPage() {
  const [users, setUsers] = useState<User[]>([])

  const handleGetUser = async () => {
    const allUsers = await client.user.getUsers.query()
    setUsers(allUsers)
  }

  const handleCreateUser = async () => {
    const createdUser = await client.user.createUser.mutate({ name: "Billy Bob" })
    setUsers(createdUser)
  }
  return (
    <div className="flex flex-col items-center gap-5 text-center w-full h-screen">
      <h1 className="text-red-300">Just a Test</h1>
      <section className="text-blue-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, nostrum magni, repudiandae dolore alias ad, tempore unde illo dolorum consequatur earum odit libero. Deserunt,
      </section>
      <button
        className="w-12 h-12 border border-red-600 text-blue-600"
        onClick={handleGetUser}
      >
        Get Users
      </button>
      <button
        className="w-12 h-12 border border-red-600 text-blue-600"
        onClick={handleCreateUser}
      >
        Create Users
      </button>
      <div>
        <h2>Here be Users</h2>
        {users.map(user => {
          return (
            <div key={user.id}>
              <span>{user.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}