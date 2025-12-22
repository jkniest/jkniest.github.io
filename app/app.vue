<template>
  <NuxtRouteAnnouncer />

  <NuxtLayout>
    <UApp>
      <LayoutHeader />
      <UMain class="bg-gradient-to-br from-gray-900 to-indigo-950">
        <NuxtPage />
      </UMain>
      <LayoutFooter />
    </UApp>
  </NuxtLayout>
</template>
