<script setup lang="ts">
interface Props {
  name: string;
  label: string;
  description: string;
  to: string;
  screenshotCount?: number;
}

const props = withDefaults(defineProps<Props>(), {
  screenshotCount: 1,
});

const currentScreenshot = ref(0);

const screenshots = computed(() =>
  Array.from(
    { length: props.screenshotCount },
    (_, i) => `/${props.name}/screenshot_${i + 1}.png`,
  ),
);

let interval: ReturnType<typeof setInterval> | null = null;

function clearCycleInterval() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

function startCycle() {
  if (props.screenshotCount <= 1) return;
  clearCycleInterval();
  interval = setInterval(() => {
    currentScreenshot.value =
      (currentScreenshot.value + 1) % props.screenshotCount;
  }, 2000);
}

function stopCycle() {
  clearCycleInterval();
  currentScreenshot.value = 0;
}

onUnmounted(() => clearCycleInterval());
</script>

<template>
  <NuxtLink
    :to="to"
    class="extension-card group block rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/40 dark:hover:border-primary/40"
    @mouseenter="startCycle"
    @mouseleave="stopCycle"
  >
    <!-- Screenshot Preview -->
    <div
      class="relative aspect-16/10 overflow-hidden bg-gray-100 dark:bg-gray-800"
    >
      <Transition name="fade">
        <img
          :key="currentScreenshot"
          :src="screenshots[currentScreenshot]"
          :alt="`${label} screenshot`"
          class="absolute inset-0 w-full h-full object-cover object-top"
        />
      </Transition>

      <!-- Screenshot dots indicator -->
      <div
        v-if="screenshotCount > 1"
        class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5"
      >
        <span
          v-for="i in screenshotCount"
          :key="i"
          class="w-1.5 h-1.5 rounded-full transition-all duration-300"
          :class="
            currentScreenshot === i - 1 ? 'bg-white scale-110' : 'bg-white/50'
          "
        />
      </div>
    </div>

    <!-- Card Content -->
    <div class="p-5">
      <div class="flex items-center justify-between gap-3">
        <div class="min-w-0">
          <h3
            class="font-semibold text-gray-900 dark:text-white text-lg truncate"
          >
            {{ label }}
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
            {{ description }}
          </p>
        </div>
        <UIcon
          name="i-lucide-arrow-right"
          class="shrink-0 text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200"
        />
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
