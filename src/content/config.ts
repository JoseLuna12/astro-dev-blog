import { defineCollection, z } from 'astro:content';
import { AllowedPostTags } from '../utils/postUtils';

const blog = defineCollection({
    schema: z.object({
        featured: z.boolean().optional().default(false),
        image: z.string(),
        thumbnail: z.string(),
        title: z.string(),
        description: z.string(),
        accent: z.string().optional().default("#50A536"),
        date: z.string(),
        languages: z.array(z.string().default("en")),
        currentLanguage: z.string().default("en"),
        categories: z.array(z.enum(AllowedPostTags)),
        relatedPosts: z.array(z.string()).optional()
    }),
});

export const collections = { blog };