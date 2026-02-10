<template>
  <!-- Gradient blobs - light mode -->
  <div class="dark:hidden pointer-events-none fixed inset-0 -z-10">
    <div
      class="absolute top-[-20%] left-[-10%] w-150 h-150 rounded-full bg-blue-200/40 blur-[120px]"
    />
    <div
      class="absolute top-[10%] right-[-5%] w-125 h-125 rounded-full bg-violet-200/40 blur-[100px]"
    />
    <div
      class="absolute bottom-[-10%] left-[30%] w-100 h-100 rounded-full bg-emerald-200/30 blur-[100px]"
    />
  </div>

  <!-- Gradient blobs - dark mode -->
  <div class="hidden dark:block pointer-events-none fixed inset-0 -z-10">
    <div
      class="absolute top-[-20%] left-[-10%] w-150 h-150 rounded-full bg-blue-900/30 blur-[120px]"
    />
    <div
      class="absolute top-[10%] right-[-5%] w-125 h-125 rounded-full bg-violet-900/25 blur-[100px]"
    />
    <div
      class="absolute bottom-[-10%] left-[30%] w-100 h-100 rounded-full bg-emerald-900/20 blur-[100px]"
    />
  </div>
</template>
