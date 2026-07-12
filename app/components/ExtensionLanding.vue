<script setup lang="ts">
interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Screenshot {
  src: string;
  alt: string;
}

interface FaqItem {
  label: string;
  content: string;
}

interface Metric {
  value: string;
  label: string;
}

const props = defineProps<{
  eyebrow: string;
  title: string;
  description: string;
  chromeWebStoreUrl?: string;
  policyPath: string;
  screenshots: Screenshot[];
  features: Feature[];
  faq: FaqItem[];
  metrics: Metric[];
  featureTitle: string;
  featureDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  accentClass: string;
  previewLabel: string;
  previewDescription?: string;
}>();

const heroScreenshot = computed(() => props.screenshots[0]);
const hasStoreUrl = computed(() => Boolean(props.chromeWebStoreUrl));
</script>

<template>
  <div>
    <UContainer class="relative py-16 sm:py-20 lg:py-24">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_30rem] lg:items-stretch">
        <div class="space-y-8">
          <div class="section-kicker">
            <span class="size-2 rounded-full bg-primary" />
            {{ eyebrow }}
          </div>

          <div class="space-y-5">
            <h1
              class="font-display max-w-4xl text-4xl font-bold text-slate-950 sm:text-5xl lg:text-6xl dark:text-white"
            >
              {{ title }}
            </h1>
            <p class="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {{ description }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <UButton
              v-if="hasStoreUrl"
              :to="chromeWebStoreUrl"
              target="_blank"
              label="Add to Chrome"
              trailing-icon="i-lucide-chrome"
              size="xl"
              class="button-icon-20 rounded-lg px-6"
            />
            <UButton
              :to="policyPath"
              label="Privacy Policy"
              icon="i-lucide-shield-check"
              size="xl"
              color="neutral"
              variant="subtle"
              class="button-icon-20 rounded-lg px-6"
            />
          </div>

          <div class="grid gap-3 sm:grid-cols-3">
            <div
              v-for="metric in metrics"
              :key="metric.label"
              class="surface-panel rounded-2xl p-4"
            >
              <p class="font-display text-3xl font-bold text-slate-950 dark:text-white">
                {{ metric.value }}
              </p>
              <p
                class="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400"
              >
                {{ metric.label }}
              </p>
            </div>
          </div>
        </div>

        <div class="surface-panel flex h-full flex-col rounded-2xl p-4 sm:p-5">
          <div class="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-950">
            <div class="absolute inset-0 bg-gradient-to-br opacity-90" :class="accentClass" />
            <img
              v-if="heroScreenshot"
              :src="heroScreenshot.src"
              :alt="heroScreenshot.alt"
              class="absolute inset-0 h-full w-full object-cover object-top"
            >
          </div>

          <div class="mt-4">
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
              >
                Live preview
              </p>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {{ previewLabel }}
              </p>
              <p
                v-if="previewDescription"
                class="mt-2 text-sm text-slate-600 dark:text-slate-300"
              >
                {{ previewDescription }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <UContainer class="pb-10 sm:pb-14">
      <div class="surface-panel rounded-2xl p-5 sm:p-6">
        <div class="mb-5 flex items-end justify-between gap-4">
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
            >
              Product tour
            </p>
            <h2 class="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
              See the extension in action.
            </h2>
          </div>

          <div
            class="hidden rounded-xl border border-slate-200/80 px-4 py-2 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 md:block"
          >
            Hover, inspect, install
          </div>
        </div>

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
            item: 'basis-full px-2 sm:px-3',
            dots: 'bottom-4',
          }"
          class="mx-auto max-w-5xl"
        >
          <div
            class="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/70 dark:border-white/10"
          >
            <img
              :src="item.src"
              :alt="item.alt"
              class="absolute inset-0 h-full w-full object-cover object-top"
              loading="lazy"
            >
          </div>
        </UCarousel>
      </div>
    </UContainer>

    <UContainer class="py-10 sm:py-14">
      <div class="mb-8 max-w-2xl">
        <p
          class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
        >
          Feature set
        </p>
        <h2 class="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
          {{ featureTitle }}
        </h2>
        <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
          {{ featureDescription }}
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="surface-panel rounded-2xl p-5"
        >
          <div
            class="flex size-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/85 text-slate-700 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200"
          >
            <UIcon :name="feature.icon" class="size-5" />
          </div>
          <h3 class="mt-4 text-lg font-semibold text-slate-950 dark:text-white">
            {{ feature.title }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </UContainer>

    <UContainer class="py-10 sm:py-14">
      <div class="surface-panel rounded-2xl p-5 sm:p-6">
        <div class="max-w-2xl">
          <p
            class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
          >
            FAQ
          </p>
          <h2 class="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
            Everything you need to know.
          </h2>
          <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            Straight answers on pricing, privacy, browser support, and how the
            extension behaves in real workflows.
          </p>
        </div>

        <UAccordion
          :items="faq"
          class="mt-8"
          :ui="{
            item: 'border-b border-slate-200/80 dark:border-white/10',
            trigger: 'py-4 text-left font-medium text-slate-900 dark:text-white',
            body: 'pb-4 text-sm leading-6 text-slate-600 dark:text-slate-300',
          }"
        />
      </div>
    </UContainer>

    <UContainer class="py-10 sm:py-14 pb-16 sm:pb-20">
      <div class="surface-panel rounded-2xl p-6 sm:p-7">
        <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-2xl">
            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
            >
              Install
            </p>
            <h2 class="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
              {{ ctaTitle }}
            </h2>
            <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              {{ ctaDescription }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <UButton
              v-if="hasStoreUrl"
              :to="chromeWebStoreUrl"
              target="_blank"
              label="Install from Chrome Web Store"
              trailing-icon="i-lucide-external-link"
              size="lg"
              class="button-icon-20 rounded-lg px-5"
            />
            <UButton
              :to="policyPath"
              label="Read privacy policy"
              color="neutral"
              variant="subtle"
              size="lg"
              class="button-icon-20 rounded-lg px-5"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
