<script setup>
const title = "ExtHub — Browser Extensions";
const description =
  "A collection of thoughtfully crafted browser extensions for developers and designers.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <UPageHero
    title="ExtHub"
    description="A collection of thoughtfully crafted browser extensions for developers and designers."
    :ui="{ title: 'text-5xl sm:text-6xl' }"
  >
    <template #links>
      <UButton
        to="/pickperfect"
        label="PickPerfect — Color Picker"
        trailing-icon="i-lucide-arrow-right"
        size="xl"
      />
    </template>

    <template #bottom>
      <p class="text-sm text-muted text-center">More extensions coming soon.</p>
    </template>
  </UPageHero>
</template>
