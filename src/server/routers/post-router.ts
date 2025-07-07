import { z } from "zod";
import { j, publicProcedure } from "../jstack";
import { databases } from "@/lib/appwrite";
import { type Posts } from "@/types/appwrite";
import { ID, Query } from "appwrite";

const DATABASE_ID = "main";
const POSTS_COLLECTION_ID = "posts";

export const postRouter = j.router({
  recent: publicProcedure.query(async ({ c }) => {
    const posts = await databases.listDocuments<Posts>(
      DATABASE_ID,
      POSTS_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(1)],
    );
    return c.superjson(posts.documents.at(-1) ?? null);
  }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ c, input }) => {
      const post = await databases.createDocument<Posts>(
        DATABASE_ID,
        POSTS_COLLECTION_ID,
        ID.unique(),
        {
          name: input.name,
        },
      );

      return c.superjson(post);
    }),
});
