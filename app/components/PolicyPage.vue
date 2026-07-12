<script setup lang="ts">
interface Fact {
  label: string;
  value: string;
}

defineProps<{
  title: string;
  description: string;
  updatedAt: string;
  summary: string;
  productPath: string;
  facts: Fact[];
}>();
</script>

<template>
  <div>
    <UContainer class="relative py-16 sm:py-20 lg:py-24">
      <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <div class="space-y-6">
          <div class="section-kicker">
            <span class="size-2 rounded-full bg-primary" />
            Privacy Policy
          </div>

          <div class="space-y-4">
            <h1
              class="font-display max-w-4xl text-4xl font-bold text-slate-950 sm:text-5xl dark:text-white"
            >
              {{ title }}
            </h1>
            <p class="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-200">
              {{ description }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <UButton
              :to="productPath"
              label="Back to product"
              icon="i-lucide-arrow-left"
              size="lg"
              color="neutral"
              variant="subtle"
              class="button-icon-20 rounded-lg px-5"
            />
          </div>
        </div>

        <div class="surface-panel rounded-2xl p-5">
          <p
            class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300"
          >
            Document status
          </p>
          <p class="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
            Last updated
          </p>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-200">
            {{ updatedAt }}
          </p>
          <p class="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-200">
            {{ summary }}
          </p>
        </div>
      </div>
    </UContainer>

    <UContainer class="pb-16 sm:pb-20">
      <div class="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
        <aside class="surface-panel self-start rounded-2xl p-5 lg:sticky">
          <p
            class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300"
          >
            Quick facts
          </p>

          <div class="mt-5 space-y-3">
            <div
              v-for="fact in facts"
              :key="fact.label"
              class="rounded-xl border border-slate-200/80 bg-white/70 p-3 dark:border-white/10 dark:bg-slate-900/70"
            >
              <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">
                {{ fact.label }}
              </p>
              <p class="mt-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                {{ fact.value }}
              </p>
            </div>
          </div>
        </aside>

        <article class="surface-panel rounded-2xl p-6 text-slate-700 sm:p-8 dark:text-slate-100">
          <div
            class="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm leading-6 text-slate-700 dark:text-slate-50"
          >
            <p class="font-semibold text-slate-950 dark:text-white">
              The short version
            </p>
            <p class="mt-2">
              {{ summary }}
            </p>
          </div>

          <div class="policy-prose mt-8">
            <slot />
          </div>
        </article>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.policy-prose :deep(h2) {
  margin-top: 2rem;
  font-size: 1.35rem;
  line-height: 1.3;
  font-weight: 600;
  color: rgb(15 23 42);
}

.policy-prose :deep(p),
.policy-prose :deep(li) {
  color: rgb(71 85 105);
  line-height: 1.75;
}

.policy-prose :deep(.policy-contact) {
  color: rgb(51 65 85);
}

.policy-prose :deep(.policy-contact p) {
  color: inherit;
}

.policy-prose :deep(p) + :deep(p) {
  margin-top: 1rem;
}

.policy-prose :deep(ul) {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.25rem;
}

.policy-prose :deep(li + li) {
  margin-top: 0.55rem;
}

.policy-prose :deep(a) {
  color: rgb(2 132 199);
  text-decoration: underline;
  text-underline-offset: 0.18em;
}

.policy-prose :deep(.policy-contact a) {
  color: rgb(2 132 199);
  text-decoration: underline;
  text-underline-offset: 0.18em;
}

.policy-prose :deep(code) {
  border-radius: 0.5rem;
  background: rgba(148, 163, 184, 0.12);
  padding: 0.12rem 0.38rem;
  font-size: 0.9em;
  color: rgb(15 23 42);
}

.policy-prose :deep(strong) {
  color: rgb(15 23 42);
}

</style>

<style>
.dark .policy-prose h2,
.dark .policy-prose strong,
.dark .policy-prose code {
  color: rgb(248 250 252);
}

.dark .policy-prose p,
.dark .policy-prose li {
  color: rgb(241 245 249);
}

.dark .policy-prose .policy-contact {
  color: rgb(241 245 249);
}

.dark .policy-prose .policy-contact p {
  color: inherit;
}

.dark .policy-prose a,
.dark .policy-prose .policy-contact a {
  color: rgb(125 211 252);
}

.dark .policy-prose code {
  background: rgba(148, 163, 184, 0.14);
}
</style>
