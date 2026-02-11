<script setup>
const title = "PickPerfect — Color Picker for Developers";
const description =
  "Pick colors from anywhere on your screen. Advanced Chrome extension with WCAG contrast checker, Tailwind mapping, and palette extraction.";
const chromeWebStoreUrl =
  "https://chromewebstore.google.com/detail/pickperfect-%E2%80%94-color-picke/egnmgmdkcakjkfhjknkdokmmhiaiklhl";

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

const screenshots = [
  {
    src: "/pickperfect/screenshot_1.png",
    alt: "PickPerfect — Color picking with history",
  },
  {
    src: "/pickperfect/screenshot_2.png",
    alt: "PickPerfect — Tailwind CSS color mapping",
  },
  {
    src: "/pickperfect/screenshot_3.png",
    alt: "PickPerfect — WCAG contrast checker",
  },
  {
    src: "/pickperfect/screenshot_4.png",
    alt: "PickPerfect — Page palette extraction",
  },
];

const faq = [
  {
    label: "Is PickPerfect free?",
    content:
      "Yes! Core features — color picking, format switching, and color history — are completely free. Premium features (WCAG checker, Tailwind mapping, palette extraction) are a one-time $2.99 purchase. No subscriptions.",
  },
  {
    label: "Does it collect any data?",
    content:
      "No. PickPerfect stores your color history and preferences locally on your device using Chrome's storage API. Nothing is ever sent to any server. See our privacy policy for full details.",
  },
  {
    label: "How does the color picker work?",
    content:
      "PickPerfect uses the browser's native EyeDropper API, which means it can pick colors from anywhere on your screen — not just the browser window. No content scripts are injected into pages for basic color picking.",
  },
  {
    label: "What color formats are supported?",
    content:
      "HEX, RGB, and HSL. You can switch between them with one click, and your preferred format is remembered for next time.",
  },
  {
    label: "How does the Tailwind color mapping work?",
    content:
      "When you pick a color, PickPerfect compares it against all 242 Tailwind CSS colors and shows you the nearest match with its class name. Great for converting design colors to Tailwind utilities.",
  },
  {
    label: "What does the WCAG contrast checker do?",
    content:
      "It lets you compare any two colors and instantly shows whether the combination passes WCAG AA and AAA standards for both normal and large text. Essential for building accessible interfaces.",
  },
  {
    label: "How does page palette extraction work?",
    content:
      "Click \"Extract Palette\" and PickPerfect reads the computed CSS colors from visible elements on the active tab. It groups and deduplicates them to show you the page's color palette. The script runs once and doesn't persist.",
  },
  {
    label: "Which browsers are supported?",
    content:
      "PickPerfect works in Chrome and Chromium-based browsers (Edge, Brave, Arc, etc.) that support the EyeDropper API.",
  },
];

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: "summary_large_image",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.label,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.content,
          },
        })),
      }),
    },
  ],
});
</script>

<template>
  <div>
    <UPageHero
      :title="title"
      :description="description"
      :ui="{
        title: 'text-4xl sm:text-5xl',
      }"
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

    <UPageSection :ui="{ container: 'py-12 sm:py-16 lg:py-20' }">
      <UCarousel
        v-slot="{ item }"
        :items="screenshots"
        loop
        arrows
        dots
        :autoplay="{ delay: 4000 }"
        :prev="{ variant: 'solid', color: 'neutral' }"
        :next="{ variant: 'solid', color: 'neutral' }"
        :ui="{
          item: 'basis-full px-4',
          dots: '-bottom-8',
        }"
        class="max-w-4xl mx-auto"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          class="w-full rounded-lg shadow-lg"
          loading="lazy"
        />
      </UCarousel>
    </UPageSection>

    <UPageSection
      title="Everything you need to work with color"
      description="From quick picks to accessibility audits — one extension, zero bloat."
      :features="features"
    />

    <UPageSection
      title="Frequently Asked Questions"
      description="Everything you need to know about PickPerfect."
    >
      <UAccordion :items="faq" class="max-w-3xl mx-auto" />
    </UPageSection>

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
