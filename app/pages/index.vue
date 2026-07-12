<script setup lang="ts">
import { extensions } from "~/data/extensions";

const recentExtensions = extensions.slice(-4);

const title = "ExtHub - Browser Extensions";
const description =
  "A collection of thoughtfully crafted browser extensions for developers and designers.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: "summary_large_image",
});

const stats = [
  {
    value: String(extensions.length),
    label: "live extensions",
    note: "Focused utilities already shipping",
  },
  {
    value: "$2.99",
    label: "one-time upgrades",
    note: "No subscriptions or account walls",
  },
  {
    value: "100%",
    label: "client-side processing",
    note: "All data stays in your browser",
  },
];

const principles = [
  "Built for real dev and design workflows",
  "Fast, focused, and intentionally small",
  "Chrome-first with clean product polish",
];
</script>

<template>
  <div>
    <UContainer class="relative py-16 sm:py-20 lg:py-24">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_26rem] lg:items-stretch">
        <div class="space-y-8">
          <div class="section-kicker">
            <span class="size-2 rounded-full bg-primary" />
            Independent Chrome extension lab
          </div>

          <div class="space-y-5">
            <h1
              class="font-display max-w-4xl text-5xl font-bold text-slate-950 sm:text-6xl lg:text-7xl dark:text-white"
            >
              Chrome extensions for people who live in devtools.
            </h1>
            <p
              class="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
            >
              ExtHub is a growing collection of focused browser tools for
              developers and designers: color workflows, performance overlays,
              smarter form filling, selector inspection, and other utilities
              that earn a permanent place in your toolbar.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <UButton
              to="#extensions"
              label="Browse extensions"
              icon="i-lucide-arrow-down"
              size="xl"
              class="button-icon-20 rounded-lg px-6"
            />
            <UButton
              to="mailto:5797565@gmail.com"
              label="Get in touch"
              icon="i-lucide-mail"
              size="xl"
              color="neutral"
              variant="subtle"
              class="button-icon-20 rounded-lg px-6"
            />
          </div>

          <div class="grid gap-3 sm:grid-cols-3">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="surface-panel rounded-2xl p-4"
            >
              <p class="font-display text-3xl font-bold text-slate-950 dark:text-white">
                {{ stat.value }}
              </p>
              <p
                class="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400"
              >
                {{ stat.label }}
              </p>
              <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {{ stat.note }}
              </p>
            </div>
          </div>
        </div>

        <div class="surface-panel flex h-full flex-col rounded-2xl p-5 sm:p-6">
          <div>
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
              >
                Inside the hub
              </p>
              <h2 class="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                Small tools with product-level care.
              </h2>
            </div>
          </div>

          <div class="mt-6 flex-1 space-y-3">
            <NuxtLink
              v-for="ext in recentExtensions"
              :key="ext.name"
              :to="ext.to"
              class="block rounded-xl border border-white/70 bg-white/70 p-3 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-primary/30 hover:shadow-md dark:border-white/10 dark:bg-slate-900/70 dark:hover:border-primary/40"
            >
              <div class="flex items-center justify-between gap-3">
                <div class="flex min-w-0 items-center gap-3">
                  <span
                    class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg dark:bg-slate-800"
                  >
                    <UIcon :name="ext.icon" class="size-5" />
                  </span>
                  <div class="min-w-0">
                    <p class="font-semibold text-slate-900 dark:text-white">
                      {{ ext.label }}
                    </p>
                    <p class="truncate text-sm text-slate-500 dark:text-slate-400">
                      {{ ext.badge }}
                    </p>
                  </div>
                </div>

                <span
                  class="rounded-xl border border-slate-200/80 px-4 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"
                >
                  {{ ext.eyebrow }}
                </span>
              </div>
            </NuxtLink>
          </div>

          <div class="mt-5">
            <UButton
              to="#extensions"
              label="View more"
              icon="i-lucide-arrow-down"
              color="neutral"
              variant="subtle"
              class="button-icon-20 rounded-lg px-5"
            />
          </div>

          <div class="mt-6 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
            <div
              v-for="principle in principles"
              :key="principle"
              class="flex items-center gap-2"
            >
              <UIcon name="i-lucide-check" class="size-4 text-primary" />
              <span>{{ principle }}</span>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <UContainer id="extensions" class="pb-16 sm:pb-20">
      <div
        class="mb-8 flex flex-col gap-5 rounded-2xl border border-white/70 bg-white/65 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/55 lg:flex-row lg:items-end lg:justify-between"
      >
        <div class="max-w-2xl">
          <p
            class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400"
          >
            Extension lineup
          </p>
          <h2 class="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
            A toolkit shelf for modern web work.
          </h2>
          <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            Every extension here is built to solve a specific workflow problem
            cleanly: fewer clicks, clearer signal, and no unnecessary clutter.
          </p>
        </div>

        <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <UIcon name="i-lucide-sparkles" class="size-4 text-primary" />
          More extensions are on the way.
        </div>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <ExtensionCard
          v-for="ext in extensions"
          :key="ext.name"
          v-bind="ext"
        />
      </div>
    </UContainer>
  </div>
</template>
