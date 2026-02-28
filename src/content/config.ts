import { defineCollection, z } from 'astro:content';

const staffers = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    email: z.string().optional(),
    pronouns: z.string().optional(),
    website: z.string().optional(),
    'office-hours': z.string().optional(),
    section: z.string().optional(),
  }),
});

const modules = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const announcements = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    week: z.number().optional(),
    date: z.coerce.date().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { staffers, modules, announcements, pages };
