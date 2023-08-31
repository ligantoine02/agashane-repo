import { getCollection } from "astro:content";

export const getPosts = async (draft = false) => {
  if (draft) return await getCollection("blog");
  return (await getCollection("blog")).filter((post) => post.data.draft);
};
