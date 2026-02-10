<script setup>
const title = "PickPerfect — Color Picker for Developers";
const description =
  "Pick colors from anywhere on your screen. Advanced Chrome extension with WCAG contrast checker, Tailwind mapping, and palette extraction.";
const chromeWebStoreUrl =
  "https://chromewebstore.google.com/detail/pickperfect-%E2%80%94-color-picke/egnmgmdkcakjkfhjknkdokmmhiaiklhl";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: "summary_large_image",
});

const features = [
  {
    icon: "i-lucide-pipette",
    title: "Native Color Picking",
    description:
      "Uses the browser's native EyeDropper API for pixel-perfect color selection from anywhere on your screen. No content scripts, no permissions overhead.",
  },
  {
    icon: "i-lucide-copy",
    title: "Multiple Formats",
    description:
      "Copy colors in HEX, RGB, or HSL with a single click. Your preferred format is remembered automatically.",
  },
  {
    icon: "i-lucide-history",
    title: "Color History",
    description:
      "Automatically saves your last 20 picked colors. Quickly re-copy any color from your history without picking again.",
  },
  {
    icon: "i-lucide-check-circle",
    title: "WCAG Contrast Checker",
    description:
      "Compare any two colors for accessibility compliance. Instantly see AA and AAA pass/fail badges for normal and large text.",
  },
  {
    icon: "i-lucide-swatch-book",
    title: "Tailwind Color Mapping",
    description:
      "Find the nearest match from 242 Tailwind CSS colors instantly. Stop guessing — get the exact class name you need.",
  },
  {
    icon: "i-lucide-palette",
    title: "Page Palette Extraction",
    description:
      "Extract the dominant color palette from any webpage with one click. See all the colors a site uses at a glance.",
  },
];
</script>

<template>
  <div>
    <UPageHero
      :title="title"
      :description="description"
      :ui="{ title: 'text-4xl sm:text-5xl' }"
    >
      <template #links>
        <UButton
          :to="chromeWebStoreUrl"
          target="_blank"
          label="Add to Chrome — Free"
          trailing-icon="i-lucide-chrome"
          size="xl"
        />
        <UButton
          to="/pickperfect/policy"
          label="Privacy Policy"
          icon="i-lucide-shield-check"
          size="xl"
          color="neutral"
          variant="subtle"
        />
      </template>
    </UPageHero>

    <UPageSection
      title="Everything you need to work with color"
      description="From quick picks to accessibility audits — one extension, zero bloat."
      :features="features"
    />

    <UPageSection>
      <UPageCTA
        title="Free core features. Premium for $2.99."
        description="Color picking, format switching, and history are completely free. Unlock WCAG checker, Tailwind mapping, and palette extraction with a one-time $2.99 purchase. No subscriptions."
        variant="subtle"
        :links="[
          {
            label: 'Install from Chrome Web Store',
            to: chromeWebStoreUrl,
            target: '_blank',
            trailingIcon: 'i-lucide-external-link',
            color: 'neutral',
          },
        ]"
      />
    </UPageSection>
  </div>
</template>
