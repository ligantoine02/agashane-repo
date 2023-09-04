import { getCollection } from "astro:content";

interface GetPostsParams {
  draft?: boolean;
}
export const getPosts = async ({ draft }: GetPostsParams) => {
  if (draft === undefined) return await getCollection("blog");
  return (await getCollection("blog")).filter(
    (post) => post.data.draft === draft
  );
};

export const filterByTag = async (tag: string) => {
  return (await getCollection("blog")).filter((post) =>
    post.data.tags.includes(tag)
  );
};
