import { Post } from "../types/types";

const allPosts: Post[] = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post"
  }
];

export const postModel = {
  getAll: async () => allPosts,
  createNewPost: async (data: { title: string, content: string }) => {
    const newPost: Post = {
      id: allPosts.length + 1,
      ...data
    }
    return [...allPosts, newPost]
  }
}