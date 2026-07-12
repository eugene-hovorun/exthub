<script setup>
import { extensions } from "~/data/extensions";

const liveToolsLabel = `${extensions.length} live tools`;

useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "google-site-verification",
      content: "U8zxSVGjAJ9QUZ563SsyJBXAMuc3rgft8yY1qytE1mI",
    },
  ],
  link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <UApp class="app-shell">
    <UHeader
      class="border-b border-white/70 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70"
    >
      <template #left>
        <NuxtLink
          to="/"
          class="flex items-center gap-3 rounded-xl transition-transform duration-200 hover:scale-[1.01]"
        >
          <span
            class="flex size-12 items-center justify-center rounded-xl border border-white/70 bg-white/90 text-primary shadow-lg shadow-primary/10 dark:border-white/10 dark:bg-slate-900/80"
          >
            <svg
              viewBox="0 0 297 294"
              class="size-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M222.75 27.2002H74.25C50.3663 27.2002 30.9375 46.6682 30.9375 70.6002V219.4C30.9375 243.332 50.3663 262.8 74.25 262.8H222.75C246.634 262.8 266.062 243.332 266.062 219.4V70.6002C266.062 46.6682 246.634 27.2002 222.75 27.2002ZM43.3125 70.6002C43.3125 53.4882 57.1725 39.6002 74.25 39.6002H142.312V64.4002C142.312 67.8722 145.035 70.6002 148.5 70.6002C158.771 70.6002 167.062 78.9082 167.062 89.2002C167.062 99.4922 158.771 107.8 148.5 107.8C145.035 107.8 142.312 110.528 142.312 114V138.8H123.131C120.285 124.664 107.786 114 92.8125 114C77.8387 114 65.34 124.664 62.4938 138.8H43.3125V70.6002ZM43.3125 219.4V151.2H68.0625C71.5275 151.2 74.25 148.472 74.25 145C74.25 134.708 82.5413 126.4 92.8125 126.4C103.084 126.4 111.375 134.708 111.375 145C111.375 148.472 114.097 151.2 117.562 151.2H142.312V170.42C128.205 173.272 117.562 185.796 117.562 200.8C117.562 215.804 128.205 228.328 142.312 231.18V250.4H74.25C57.1725 250.4 43.3125 236.512 43.3125 219.4ZM253.688 219.4C253.688 236.512 239.827 250.4 222.75 250.4H154.688V225.6C154.688 222.128 151.965 219.4 148.5 219.4C138.229 219.4 129.938 211.092 129.938 200.8C129.938 190.508 138.229 182.2 148.5 182.2C151.965 182.2 154.688 179.472 154.688 176V151.2H173.869C176.715 165.336 189.214 176 204.188 176C219.161 176 231.66 165.336 234.506 151.2H253.688V219.4ZM253.688 138.8H228.938C225.472 138.8 222.75 141.528 222.75 145C222.75 155.292 214.459 163.6 204.188 163.6C193.916 163.6 185.625 155.292 185.625 145C185.625 141.528 182.903 138.8 179.438 138.8H154.688V119.58C168.795 116.728 179.438 104.204 179.438 89.2002C179.438 74.1962 168.795 61.6722 154.688 58.8202V39.6002H222.75C239.827 39.6002 253.688 53.4882 253.688 70.6002V138.8Z" stroke="currentColor" stroke-width="8" stroke-linejoin="round" stroke-linecap="round" />
            </svg>
          </span>
          <span class="min-w-0">
            <span class="font-display text-lg font-bold text-slate-950 dark:text-white">
              <span class="text-primary">Ext</span>Hub
            </span>
            <span class="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">
              Chrome extension lab
            </span>
          </span>
        </NuxtLink>
      </template>

      <template #right>
        <div class="flex items-center gap-2 sm:gap-3">
          <span
            class="hidden rounded-xl border border-white/70 bg-white/80 px-4 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-slate-900/75 dark:text-slate-300 md:inline-flex"
          >
            {{ liveToolsLabel }}
          </span>
          <UColorModeButton
            class="button-icon-20 rounded-lg border border-white/70 bg-white/80 shadow-sm dark:border-white/10 dark:bg-slate-900/75"
          />
        </div>
      </template>
    </UHeader>

    <UMain class="relative">
      <NuxtPage />
    </UMain>

    <USeparator class="opacity-60" />

    <UFooter
      class="border-t border-white/70 bg-white/45 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/45"
    >
      <template #left>
        <div class="space-y-1">
          <p class="text-sm font-medium text-slate-700 dark:text-slate-200">
            © {{ new Date().getFullYear() }} ExtHub
          </p>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Focused browser tools for developers and designers.
          </p>
        </div>
      </template>

      <template #right>
        <div class="flex items-center gap-2">
          <span class="hidden text-xs text-slate-500 dark:text-slate-400 sm:inline">
            Privacy-first. One-time upgrades.
          </span>
          <UButton
            to="mailto:5797565@gmail.com"
            icon="i-lucide-mail"
            aria-label="Contact"
            color="neutral"
            variant="ghost"
            size="sm"
            class="button-icon-20 rounded-lg"
          />
        </div>
      </template>
    </UFooter>
  </UApp>
</template>
