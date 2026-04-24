import { defineCollection, z } from "astro:content";
import {
  defaultLanguage,
  supportedLanguages,
} from "../utils/languageUtils";
import { AllowedPostTags } from "../utils/postUtils";

const supportedLanguageKeys = supportedLanguages.map((language) => language.key);

const blog = defineCollection({
  schema: z.object({
    featured: z.boolean().optional().default(false),
    images: z.array(z.string().url()).optional(),
    thumbnails: z.array(z.string().url()).optional(),
    title: z.string().min(1),
    description: z.string().min(1),
    accent: z.string().optional().default("#50A536"),
    date: z.coerce.date(),
    languages: z
      .array(z.enum(supportedLanguageKeys as [string, ...string[]]))
      .default([defaultLanguage]),
    currentLanguage: z
      .enum(supportedLanguageKeys as [string, ...string[]])
      .default(defaultLanguage),
    categories: z.array(z.enum(AllowedPostTags)).min(1),
    relatedPosts: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
