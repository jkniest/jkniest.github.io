import type { ExperiencesCollectionItem } from '@nuxt/content'

export type ExperienceStepperItem = StepperItem & {
  link: string
  item: ExperiencesCollectionItem
}
