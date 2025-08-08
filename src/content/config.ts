import { z, defineCollection } from "astro:content";

const galleryCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    hidden: z.boolean().optional(),
    order: z.number(),
  }),
});

export const collections = {
  gallery: galleryCollection,
};
