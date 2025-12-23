import { defineCollection } from "astro:content"
import { file } from "astro/loaders"
import { z } from 'astro/zod'

const dataset = defineCollection({
  loader: file('src/data/dataset.json'),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    source: z.string(),
    sourceUrl: z.string().url(),
    projectUrl: z.string().url(),
    latestUpdate: z.coerce.date(),
    fileTypes: z.array(z.string()),
    tags: z.array(z.string()),
    items: z.array(z.object({
      name: z.string(),
      description: z.string(),
      total: z.number(),
      fileType: z.string(),
      downloadUrl: z.string().url()
    })),
  })
})

export const collections = { dataset }
