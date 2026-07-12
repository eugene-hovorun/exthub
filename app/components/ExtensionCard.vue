<script setup lang="ts">
interface Props {
  name: string;
  label: string;
  description: string;
  to: string;
  screenshotCount?: number;
  screenshotBase?: string;
  badge?: string;
  eyebrow?: string;
  icon?: string;
  accent?: string;
}

const props = withDefaults(defineProps<Props>(), {
  screenshotCount: 1,
  screenshotBase: "",
  badge: "Extension",
  eyebrow: "Chrome tool",
  icon: "i-lucide-puzzle",
  accent: "from-primary/20 via-primary/5 to-transparent",
});

const currentScreenshot = ref(0);
const availableScreenshots = ref<string[]>([]);

const screenshots = computed(() =>
  Array.from(
    { length: props.screenshotCount },
    (_, i) => `/${props.screenshotBase || props.name}/screenshot_${i + 1}.png`,
  ),
);

let interval: ReturnType<typeof setInterval> | null = null;
let resolveToken = 0;

function clearCycleInterval() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

async function resolveAvailableScreenshots() {
  if (!import.meta.client) return;

  const token = ++resolveToken;
  const urls = screenshots.value;

  if (!urls.length) {
    availableScreenshots.value = [];
    currentScreenshot.value = 0;
    clearCycleInterval();
    return;
  }

  const resolved = await Promise.all(
    urls.map(
      (url) =>
        new Promise<string | null>((resolve) => {
          const image = new Image();
          image.onload = () => resolve(url);
          image.onerror = () => resolve(null);
          image.src = url;
        }),
    ),
  );

  if (token !== resolveToken) return;

  availableScreenshots.value = resolved.filter(
    (url): url is string => Boolean(url),
  );
  currentScreenshot.value = 0;

  if (availableScreenshots.value.length <= 1) {
    clearCycleInterval();
  }
}

function startCycle() {
  if (availableScreenshots.value.length <= 1) return;
  clearCycleInterval();
  interval = setInterval(() => {
    currentScreenshot.value =
      (currentScreenshot.value + 1) % availableScreenshots.value.length;
  }, 2000);
}

function stopCycle() {
  clearCycleInterval();
  currentScreenshot.value = 0;
}

onMounted(resolveAvailableScreenshots);
watch(screenshots, resolveAvailableScreenshots);
onUnmounted(() => clearCycleInterval());
</script>

<template>
  <NuxtLink
    :to="to"
    class="group block transition-transform duration-300 hover:-translate-y-0.5"
    @mouseenter="startCycle"
    @mouseleave="stopCycle"
  >
    <div class="surface-panel rounded-xl">
      <div class="relative aspect-[16/7.8] overflow-hidden bg-slate-950">
        <div
          class="absolute inset-0 bg-gradient-to-br opacity-90"
          :class="accent"
        />
        <Transition name="fade">
          <img
            v-if="availableScreenshots.length"
            :key="availableScreenshots[currentScreenshot]"
            :src="availableScreenshots[currentScreenshot]"
            :alt="`${label} screenshot`"
            class="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          >
        </Transition>
        <div
          class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent"
        />

        <div class="absolute left-2.5 top-2.5 right-2.5 flex items-start justify-between gap-2">
          <div class="flex items-center gap-2">
            <span
              class="flex size-8 items-center justify-center rounded-md border border-white/15 bg-slate-950/80 text-white shadow-lg backdrop-blur"
            >
              <UIcon :name="icon" class="size-4" />
            </span>
            <div
              class="rounded-md border border-white/15 bg-slate-950/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur"
            >
              {{ badge }}
            </div>
          </div>

          <div
            class="rounded-md border border-white/15 bg-slate-950/60 px-2.5 py-1 text-[9px] font-medium text-white/75 backdrop-blur"
          >
            Preview
          </div>
        </div>

        <div
          v-if="availableScreenshots.length > 1"
          class="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1 rounded-md border border-white/15 bg-slate-950/70 px-2 py-1 backdrop-blur"
        >
          <span
            v-for="i in availableScreenshots.length"
            :key="i"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="
              currentScreenshot === i - 1
                ? 'w-5 bg-white'
                : 'w-1.5 bg-white/45'
            "
          />
        </div>
      </div>

      <div class="space-y-2.5 p-3.5 sm:p-4">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <p
              class="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
            >
              {{ eyebrow }}
            </p>
            <h3
              class="mt-1 truncate text-base font-semibold text-slate-950 dark:text-white"
            >
              {{ label }}
            </h3>
            <p
              class="mt-1 line-clamp-2 text-[13px] leading-5 text-slate-600 dark:text-slate-300"
            >
              {{ description }}
            </p>
          </div>

          <span
            class="flex size-8 shrink-0 items-center justify-center rounded-md border border-slate-200/80 bg-white/85 text-slate-500 transition-all duration-200 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300"
          >
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            class="rounded-md border border-slate-200/80 px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"
          >
            Chrome extension
          </span>
          <span
            class="rounded-md border border-slate-200/80 px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"
          >
            Developer workflow
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
