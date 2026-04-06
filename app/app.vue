<template>
	<NuxtRouteAnnouncer />

	<NuxtLayout>
		<UApp>
			<LayoutHeader />
			<UMain class="bg-linear-to-br from-gray-900 to-indigo-950">
				<NuxtPage />
			</UMain>
			<LayoutFooter />
		</UApp>
	</NuxtLayout>
</template>
