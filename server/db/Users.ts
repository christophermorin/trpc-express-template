import { User } from "../types/types";

const usersDb: User[] = [
  {
    id: 1,
    name: "First User"
  }
]

export const userModel = {
  getAll: async () => usersDb,
  createNewUser: async (data: { name: string }) => {
    const user: User = {
      id: usersDb.length + 1,
      ...data
    }
    return [...usersDb, user]
  }
}