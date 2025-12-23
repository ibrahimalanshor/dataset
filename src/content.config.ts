import { defineCollection } from "astro:content"
import { z } from 'astro/zod'

const dataset = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    source: z.string(),
    latestUpdate: z.coerce.date(),
    fileType: z.string(),
    tags: z.array(z.string()),
    previews: z.array(z.any()),
    urls: z.array(z.object({
      name: z.string(),
      url: z.string()
    })),
    license: z.string()
  })
})

export const collections = { dataset }
