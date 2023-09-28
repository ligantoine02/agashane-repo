import { getCollection, type CollectionEntry } from "astro:content";

interface GetPostsParams {
  draft?: boolean;
}
export const getPosts = async ({ draft }: GetPostsParams) => {
  if (draft === undefined) return await getCollection("blog");
  return (await getCollection("blog")).filter(
    (post) => post.data.draft === draft
  );
};

export const getFeaturedPosts = async ()
 : Promise<CollectionEntry<"blog">[]> => {
  return (await getCollection("blog")).filter(
    (post) => post.data.featured && !post.data.draft
  );
};

export const filterByTag = (
    posts: unknown,
    tag: string
  ) => {

  let results: CollectionEntry<"blog">[] = [];

  if(posts !== null && typeof posts === "object") {

    let k: keyof posts;
    
    for (k in posts) {
      const post = posts[k] as CollectionEntry<"blog">;
      const lowerTags = post.data.tags.map(t => t.toLowerCase());
      if(lowerTags.includes(tag.toLowerCase()))
        results.push(post);
    }
  }

  return results;
};

export const getTags = async () => {
  const posts = await getPosts({draft: false});
  const tags = [...new Set(posts.map(
    post => post.data.tags
  ).flat())];

  return tags;
}