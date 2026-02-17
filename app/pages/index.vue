<script setup lang="ts">
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

const extensions = [
  {
    name: "pickperfect",
    label: "PickPerfect",
    description:
      "Pick colors from anywhere on your screen. Extension with Tailwind mapping and palette extraction.",
    to: "/pickperfect",
    screenshotCount: 3,
  },
  {
    name: "devpulse",
    label: "DevPulse",
    description:
      "Real-time performance overlay for developers. Monitor Core Web Vitals — right on the page.",
    to: "/devpulse",
    screenshotCount: 3,
  },
  {
    name: "formforge",
    label: "FormForge",
    description:
      "One-click realistic fake data for any form. Smart field detection, locale-aware generation, custom profiles.",
    to: "/formforge",
    screenshotCount: 3,
  },
];
</script>

<template>
  <UPageHero
    title="ExtHub"
    description="A collection of thoughtfully crafted browser extensions for developers and designers."
    :ui="{ title: 'text-5xl sm:text-6xl' }"
  />

  <UContainer>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
      <ExtensionCard v-for="ext in extensions" :key="ext.name" v-bind="ext" />
    </div>

    <p class="text-sm text-muted text-center pb-12">
      More extensions coming soon.
    </p>
  </UContainer>

  <AppGradient />
</template>
