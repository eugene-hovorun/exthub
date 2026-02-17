<script setup>
const title = "FormForge — Smart Form Filler for Developers";
const description =
  "One-click realistic fake data for any form. Smart field detection, locale-aware generation, custom profiles. Built for localhost, works everywhere.";
const chromeWebStoreUrl =
  "https://chromewebstore.google.com/detail/formforge/ikaabnpjebjfenfnpnifmbijmloagiff";

const features = [
  {
    icon: "i-lucide-scan-search",
    title: "Smart Field Detection",
    description:
      "Detects first name, last name, email, phone, address, company, and more using autocomplete attributes, field names, labels, and placeholders. No configuration needed.",
  },
  {
    icon: "i-lucide-user-check",
    title: "Coherent Identities",
    description:
      "Generates a complete, realistic person for each fill — not random junk in every field. Name, email, username, and URL all match the same identity.",
  },
  {
    icon: "i-lucide-globe",
    title: "7 Locales",
    description:
      "Native names, real street patterns, local phone formats, and regional companies for English (US/UK), Deutsch, Polski, Українська, Français, and 日本語.",
  },
  {
    icon: "i-lucide-keyboard",
    title: "Keyboard Shortcuts",
    description:
      "Alt+F to fill, Alt+Shift+F to clear. No popup needed. Customizable via chrome://extensions/shortcuts. Designed for rapid form testing workflows.",
  },
  {
    icon: "i-lucide-user-cog",
    title: "Custom Profiles",
    description:
      "Pin specific values like your test email or company name while randomizing everything else. Save multiple profiles and switch between them instantly.",
  },
  {
    icon: "i-lucide-shield",
    title: "Privacy First",
    description:
      "No data collection. No analytics. No network requests except license validation. All data generation happens locally in your browser.",
  },
];

const screenshots = [
  {
    src: "/formforge/screenshot_1.png",
    alt: "FormForge — Popup with filled form fields highlighted in green",
  },
  {
    src: "/formforge/screenshot_2.png",
    alt: "FormForge — Custom profile editor with field overrides",
  },
  {
    src: "/formforge/screenshot_3.png",
    alt: "FormForge — Multiple locale options for international form testing",
  },
];

const faq = [
  {
    label: "Is FormForge free?",
    content:
      "Yes! The core form filler with English (US) locale is completely free. Custom profiles, field overrides, and 6 additional locales are a one-time $2.99 purchase. No subscriptions.",
  },
  {
    label: "Does it collect any data?",
    content:
      "No. FormForge runs entirely in your browser. All fake data is generated locally and never sent to any server. The only network request is license verification via ExtensionPay. See our privacy policy for full details.",
  },
  {
    label: "How does it detect form fields?",
    content:
      "FormForge checks autocomplete attributes first (highest confidence), then field names and IDs, then associated label text, then placeholder text, and finally input types. It handles inputs, selects, textareas, checkboxes, and radio groups.",
  },
  {
    label: "Does it work with React / Vue / Angular?",
    content:
      "Yes. FormForge uses native value setters and dispatches input, change, and blur events so framework-controlled forms update their state correctly. Works with React synthetic events, Vue v-model, Angular forms, and plain HTML.",
  },
  {
    label: "Does it work on localhost?",
    content:
      "Yes, and that's the primary use case. FormForge uses the activeTab permission so it works on any page you're viewing — localhost, staging, production, or any other URL.",
  },
  {
    label: "Can I fill forms with specific values?",
    content:
      "Yes, with Pro profiles. Create a profile, open the custom fields editor, and pin any values you want (e.g., always use your test email). All other fields will still be randomized. You can create multiple profiles for different testing scenarios.",
  },
  {
    label: "Does it fill password fields?",
    content:
      "No. Password fields are intentionally skipped — developers typically have specific test passwords or use password managers. FormForge focuses on data fields where random realistic values are useful.",
  },
  {
    label: "Which browsers are supported?",
    content:
      "FormForge works in Chrome and Chromium-based browsers (Edge, Brave, Arc, etc.) that support Manifest V3 extensions.",
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
          to="/formforge/policy"
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
      title="Stop typing test@test.com into every form"
      description="Smart detection, realistic data, one click. No setup, no configuration, no DevTools."
      :features="features"
    />

    <UPageSection
      title="Frequently Asked Questions"
      description="Everything you need to know about FormForge."
    >
      <UAccordion :items="faq" class="max-w-3xl mx-auto" />
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Free core filler. Pro for $2.99."
        description="Smart form filling with English (US) is completely free. Unlock 7 locales, custom profiles with field overrides, and more with a one-time $2.99 purchase. No subscriptions."
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
