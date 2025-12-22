<script setup lang="ts">
import type { ExperienceStepperItem } from '~/types/ExperienceStepperItem'

const { data: experiences } = await useAsyncData('experiences', () => queryCollection('experiences').all())

// TODO: Add other work experiences
const items = computed<ExperienceStepperItem[]>((): ExperienceStepperItem[] => {
  return experiences.value?.map((experience): ExperienceStepperItem => {
    return {
      title: experience.workplace,
      description: experience.role,
      icon: experience.icon,
      link: experience.link,
      item: experience,
    }
  }) ?? []
})
// const items = ref<ExperienceStepperItem[]>([
//     {
//         title: 'basecom',
//         description: 'Head of Development Shopware',
//         icon: 'i-simple-icons-shopware',
//         link: 'https://www.basecom.de',
//     },
//     {
//         title: 'basecom',
//         description: 'Head of Development Frontend',
//         icon: 'mdi:vuejs',
//         link: 'https://www.basecom.de',
//     },
// ])

const stepper = useTemplateRef('stepper')
</script>

<template>
  <UContainer class="p-12">
    <h2 class="text-3xl font-bold text-center mb-10">
      My work journey so far
    </h2>
    <UStepper
      ref="stepper"
      size="xl"
      orientation="vertical"
      :items="items"
    >
      <template #content="{ item }">
        <UCard
          class="ml-12"
          variant="outline"
        >
          <template #header>
            <h3 class="text-lg">
              {{ item.description }} at <a
                :href="item.link"
                target="_blank"
                class="text-indigo-400 hover:text-indigo-500"
              >{{ item.title }}</a>
            </h3>
          </template>

          <!-- TODO: This is not rendering right now -->
          <ContentRenderer
            v-if="item.item"
            :value="item.item"
          />
        </UCard>
      </template>
    </UStepper>
  </UContainer>
</template>
