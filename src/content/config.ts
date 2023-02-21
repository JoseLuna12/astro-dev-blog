import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        featured: z.boolean().optional().default(false),
        thumbnail: z.string(),
        date: z.date().default(new Date()),
        languages: z.array(z.string().default("en")),
        currentLanguage: z.string().default("en"),
        image: z.string(),
        title: z.string(),
        description: z.string(),
        categories: z.array(z.string())
    }),
});

export const collections = { blog };