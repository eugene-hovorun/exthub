<script setup>
const title = "DevPulse — Performance HUD for Developers";
const description =
  "Real-time performance overlay for web developers. Monitor FPS, DOM nodes, memory, long tasks, and Core Web Vitals — right on the page.";
const chromeWebStoreUrl =
  "https://chromewebstore.google.com/detail/devpulse/bmbloihfnfclfohdbbapheglhhpbbagp";

const features = [
  {
    icon: "i-lucide-gauge",
    title: "Real-Time FPS & DOM",
    description:
      "Monitor frames per second and DOM node count with live sparkline history. Color-coded thresholds highlight performance issues instantly.",
  },
  {
    icon: "i-lucide-memory-stick",
    title: "Memory & Long Tasks",
    description:
      "Track JS heap memory usage and detect long tasks blocking the main thread. A live badge shows recent long task activity.",
  },
  {
    icon: "i-lucide-activity",
    title: "Core Web Vitals",
    description:
      "Monitor First Contentful Paint and Largest Contentful Paint with color-coded thresholds matching Google's performance guidelines.",
  },
  {
    icon: "i-lucide-globe",
    title: "Network Overview",
    description:
      "See total request count and transfer size at a glance. Spot unexpected network activity without opening DevTools.",
  },
  {
    icon: "i-lucide-sun-moon",
    title: "Dark & Light Themes",
    description:
      "Switch between dark, light, and system themes. The HUD adapts to your preference and remembers it across sessions.",
  },
  {
    icon: "i-lucide-shield",
    title: "Shadow DOM Isolation",
    description:
      "The HUD runs inside a closed shadow DOM — it won't interfere with your app's styles, frameworks, or DOM structure.",
  },
];

const screenshots = [
  {
    src: "/devpulse/screenshot_1.png",
    alt: "DevPulse — Dark theme performance HUD on a code editor",
  },
  {
    src: "/devpulse/screenshot_2.png",
    alt: "DevPulse — Light theme performance HUD",
  },
  {
    src: "/devpulse/screenshot_3.png",
    alt: "DevPulse — JSON export of performance metrics",
  },
];

const faq = [
  {
    label: "Is DevPulse free?",
    content:
      "Yes! FPS and DOM monitoring are completely free. Premium metrics — memory, long tasks, network, FCP, LCP, and JSON export — are a one-time $2.99 purchase. No subscriptions.",
  },
  {
    label: "Does it collect any data?",
    content:
      "No. DevPulse runs entirely in your browser. Performance metrics are computed locally and never sent to any server. See our privacy policy for full details.",
  },
  {
    label: "How does it work?",
    content:
      "Click the DevPulse toolbar icon to inject a lightweight HUD overlay onto the current page. It uses requestAnimationFrame for FPS, PerformanceObserver for Web Vitals, and standard browser APIs for everything else.",
  },
  {
    label: "Will it affect my page's performance?",
    content:
      "DevPulse is designed to be lightweight. The rAF loop adds negligible overhead, and all metric collection is throttled. The HUD runs inside a shadow DOM, completely isolated from your page.",
  },
  {
    label: "Does it work on localhost?",
    content:
      "Yes, and it's optimized for local development. On localhost the HUD auto-restores after page refresh so you don't have to re-enable it every time you save a file.",
  },
  {
    label: "Can I drag and reposition the HUD?",
    content:
      "Yes. Drag the header bar to move the HUD anywhere on screen. Your position is remembered on the current page. You can also collapse it to a minimal bar showing just FPS and DOM count.",
  },
  {
    label: "What does the JSON export include?",
    content:
      "The export snapshot includes all current metrics plus sparkline history arrays, timestamped with the current URL. Useful for performance reports and regression tracking.",
  },
  {
    label: "Which browsers are supported?",
    content:
      "DevPulse works in Chrome and Chromium-based browsers (Edge, Brave, Arc, etc.) that support Manifest V3 extensions.",
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
          to="/devpulse/policy"
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
      title="Performance monitoring without the overhead"
      description="Real-time metrics on the page — no DevTools panel, no context switching, no setup."
      :features="features"
    />

    <UPageSection
      title="Frequently Asked Questions"
      description="Everything you need to know about DevPulse."
    >
      <UAccordion :items="faq" class="max-w-3xl mx-auto" />
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Free core metrics. Premium for $2.99."
        description="FPS and DOM monitoring are completely free. Unlock memory, long tasks, Web Vitals, network stats, and JSON export with a one-time $2.99 purchase. No subscriptions."
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
    <AppGradient />
  </div>
</template>
