<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }} Jordan Kniest
      </p>
    </template>

    <template #right>
      <UButton
        icon="i-simple-icons-linkedin"
        color="neutral"
        variant="ghost"
        to="https://www.linkedin.com/in/jordan-kniest-a5a175211/"
        target="_blank"
        aria-label="LinkedIn"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/jkniest"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
