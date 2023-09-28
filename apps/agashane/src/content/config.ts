import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    categories: z.array(z.string()),
    date: z.date(),
    preview: z.string(),
    draft: z.boolean(),
    updated: z.date(),
    featured: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
};
