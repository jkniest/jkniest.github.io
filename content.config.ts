import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    experiences: defineCollection({
      type: 'data',
      source: 'experiences/*.md',
      schema: z.object({
        workplace: z.string().describe('The workplace of the experience'),
        role: z.string().describe('The role of the experience'),
        icon: z.string().describe('The icon of the experience'),
        link: z.string().describe('The link to the workplace'),
      }),
    }),
  },
})
