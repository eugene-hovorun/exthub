import { b as useSeoMeta, e as extensions, c as _sfc_main$b, d as _sfc_main$h, a as _sfc_main$m, _ as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, mergeProps, ref, computed, watch, Transition, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'fast-xml-parser';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vaul-vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ExtensionCard",
  __ssrInlineRender: true,
  props: {
    name: {},
    label: {},
    description: {},
    to: {},
    screenshotCount: { default: 1 },
    screenshotBase: { default: "" },
    badge: { default: "Extension" },
    eyebrow: { default: "Chrome tool" },
    icon: { default: "i-lucide-puzzle" },
    accent: { default: "from-primary/20 via-primary/5 to-transparent" }
  },
  setup(__props) {
    const props = __props;
    const currentScreenshot = ref(0);
    const availableScreenshots = ref([]);
    const screenshots = computed(
      () => Array.from(
        { length: props.screenshotCount },
        (_, i) => `/${props.screenshotBase || props.name}/screenshot_${i + 1}.png`
      )
    );
    let interval = null;
    function clearCycleInterval() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }
    async function resolveAvailableScreenshots() {
      return;
    }
    function startCycle() {
      if (availableScreenshots.value.length <= 1) return;
      clearCycleInterval();
      interval = setInterval();
    }
    function stopCycle() {
      clearCycleInterval();
      currentScreenshot.value = 0;
    }
    watch(screenshots, resolveAvailableScreenshots);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UIcon = _sfc_main$m;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: "group block transition-transform duration-300 hover:-translate-y-0.5",
        onMouseenter: startCycle,
        onMouseleave: stopCycle
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="surface-panel rounded-xl" data-v-a5f83454${_scopeId}><div class="relative aspect-[16/7.8] overflow-hidden bg-slate-950" data-v-a5f83454${_scopeId}><div class="${ssrRenderClass([__props.accent, "absolute inset-0 bg-gradient-to-br opacity-90"])}" data-v-a5f83454${_scopeId}></div>`);
            if (unref(availableScreenshots).length) {
              _push2(`<img${ssrRenderAttr("src", unref(availableScreenshots)[unref(currentScreenshot)])}${ssrRenderAttr("alt", `${__props.label} screenshot`)} class="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" data-v-a5f83454${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" data-v-a5f83454${_scopeId}></div><div class="absolute left-2.5 top-2.5 right-2.5 flex items-start justify-between gap-2" data-v-a5f83454${_scopeId}><div class="flex items-center gap-2" data-v-a5f83454${_scopeId}><span class="flex size-8 items-center justify-center rounded-md border border-white/15 bg-slate-950/80 text-white shadow-lg backdrop-blur" data-v-a5f83454${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: __props.icon,
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><div class="rounded-md border border-white/15 bg-slate-950/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur" data-v-a5f83454${_scopeId}>${ssrInterpolate(__props.badge)}</div></div><div class="rounded-md border border-white/15 bg-slate-950/60 px-2.5 py-1 text-[9px] font-medium text-white/75 backdrop-blur" data-v-a5f83454${_scopeId}> Preview </div></div>`);
            if (unref(availableScreenshots).length > 1) {
              _push2(`<div class="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1 rounded-md border border-white/15 bg-slate-950/70 px-2 py-1 backdrop-blur" data-v-a5f83454${_scopeId}><!--[-->`);
              ssrRenderList(unref(availableScreenshots).length, (i) => {
                _push2(`<span class="${ssrRenderClass([
                  unref(currentScreenshot) === i - 1 ? "w-5 bg-white" : "w-1.5 bg-white/45",
                  "h-1.5 rounded-full transition-all duration-300"
                ])}" data-v-a5f83454${_scopeId}></span>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="space-y-2.5 p-3.5 sm:p-4" data-v-a5f83454${_scopeId}><div class="flex items-start justify-between gap-3" data-v-a5f83454${_scopeId}><div class="min-w-0" data-v-a5f83454${_scopeId}><p class="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400" data-v-a5f83454${_scopeId}>${ssrInterpolate(__props.eyebrow)}</p><h3 class="mt-1 truncate text-base font-semibold text-slate-950 dark:text-white" data-v-a5f83454${_scopeId}>${ssrInterpolate(__props.label)}</h3><p class="mt-1 line-clamp-2 text-[13px] leading-5 text-slate-600 dark:text-slate-300" data-v-a5f83454${_scopeId}>${ssrInterpolate(__props.description)}</p></div><span class="flex size-8 shrink-0 items-center justify-center rounded-md border border-slate-200/80 bg-white/85 text-slate-500 transition-all duration-200 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300" data-v-a5f83454${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-arrow-up-right",
              class: "size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            }, null, _parent2, _scopeId));
            _push2(`</span></div><div class="flex flex-wrap gap-2" data-v-a5f83454${_scopeId}><span class="rounded-md border border-slate-200/80 px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:text-slate-300" data-v-a5f83454${_scopeId}> Chrome extension </span><span class="rounded-md border border-slate-200/80 px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:text-slate-300" data-v-a5f83454${_scopeId}> Developer workflow </span></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "surface-panel rounded-xl" }, [
                createVNode("div", { class: "relative aspect-[16/7.8] overflow-hidden bg-slate-950" }, [
                  createVNode("div", {
                    class: ["absolute inset-0 bg-gradient-to-br opacity-90", __props.accent]
                  }, null, 2),
                  createVNode(Transition, { name: "fade" }, {
                    default: withCtx(() => [
                      unref(availableScreenshots).length ? (openBlock(), createBlock("img", {
                        key: unref(availableScreenshots)[unref(currentScreenshot)],
                        src: unref(availableScreenshots)[unref(currentScreenshot)],
                        alt: `${__props.label} screenshot`,
                        class: "absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" }),
                  createVNode("div", { class: "absolute left-2.5 top-2.5 right-2.5 flex items-start justify-between gap-2" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "flex size-8 items-center justify-center rounded-md border border-white/15 bg-slate-950/80 text-white shadow-lg backdrop-blur" }, [
                        createVNode(_component_UIcon, {
                          name: __props.icon,
                          class: "size-4"
                        }, null, 8, ["name"])
                      ]),
                      createVNode("div", { class: "rounded-md border border-white/15 bg-slate-950/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur" }, toDisplayString(__props.badge), 1)
                    ]),
                    createVNode("div", { class: "rounded-md border border-white/15 bg-slate-950/60 px-2.5 py-1 text-[9px] font-medium text-white/75 backdrop-blur" }, " Preview ")
                  ]),
                  unref(availableScreenshots).length > 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1 rounded-md border border-white/15 bg-slate-950/70 px-2 py-1 backdrop-blur"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(availableScreenshots).length, (i) => {
                      return openBlock(), createBlock("span", {
                        key: i,
                        class: [
                          "h-1.5 rounded-full transition-all duration-300",
                          unref(currentScreenshot) === i - 1 ? "w-5 bg-white" : "w-1.5 bg-white/45"
                        ]
                      }, null, 2);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "space-y-2.5 p-3.5 sm:p-4" }, [
                  createVNode("div", { class: "flex items-start justify-between gap-3" }, [
                    createVNode("div", { class: "min-w-0" }, [
                      createVNode("p", { class: "text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400" }, toDisplayString(__props.eyebrow), 1),
                      createVNode("h3", { class: "mt-1 truncate text-base font-semibold text-slate-950 dark:text-white" }, toDisplayString(__props.label), 1),
                      createVNode("p", { class: "mt-1 line-clamp-2 text-[13px] leading-5 text-slate-600 dark:text-slate-300" }, toDisplayString(__props.description), 1)
                    ]),
                    createVNode("span", { class: "flex size-8 shrink-0 items-center justify-center rounded-md border border-slate-200/80 bg-white/85 text-slate-500 transition-all duration-200 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300" }, [
                      createVNode(_component_UIcon, {
                        name: "i-lucide-arrow-up-right",
                        class: "size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      })
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap gap-2" }, [
                    createVNode("span", { class: "rounded-md border border-slate-200/80 px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:text-slate-300" }, " Chrome extension "),
                    createVNode("span", { class: "rounded-md border border-slate-200/80 px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:border-white/10 dark:text-slate-300" }, " Developer workflow ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExtensionCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-a5f83454"]]), { __name: "ExtensionCard" });
const title = "ExtHub - Browser Extensions";
const description = "A collection of thoughtfully crafted browser extensions for developers and designers.";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      twitterCard: "summary_large_image"
    });
    const stats = [
      {
        value: String(extensions.length),
        label: "live extensions",
        note: "Focused utilities already shipping"
      },
      {
        value: "$2.99",
        label: "one-time upgrades",
        note: "No subscriptions or account walls"
      },
      {
        value: "0",
        label: "analytics trackers",
        note: "Privacy-first by default"
      }
    ];
    const principles = [
      "Built for real dev and design workflows",
      "Fast, focused, and intentionally small",
      "Chrome-first with clean product polish"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$b;
      const _component_UButton = _sfc_main$h;
      const _component_UIcon = _sfc_main$m;
      const _component_ExtensionCard = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "relative py-16 sm:py-20 lg:py-24" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_26rem] lg:items-stretch"${_scopeId}><div class="space-y-8"${_scopeId}><div class="section-kicker"${_scopeId}><span class="size-2 rounded-full bg-primary"${_scopeId}></span> Independent Chrome extension lab </div><div class="space-y-5"${_scopeId}><h1 class="font-display max-w-4xl text-5xl font-bold text-slate-950 sm:text-6xl lg:text-7xl dark:text-white"${_scopeId}> Chrome extensions for people who live in devtools. </h1><p class="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"${_scopeId}> ExtHub is a growing collection of focused browser tools for developers and designers: color workflows, performance overlays, smarter form filling, selector inspection, and other utilities that earn a permanent place in your toolbar. </p></div><div class="flex flex-wrap gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              to: "#extensions",
              label: "Browse extensions",
              icon: "i-lucide-arrow-down",
              size: "xl",
              class: "button-icon-20 rounded-lg px-6"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "mailto:5797565@gmail.com",
              label: "Get in touch",
              icon: "i-lucide-mail",
              size: "xl",
              color: "neutral",
              variant: "subtle",
              class: "button-icon-20 rounded-lg px-6"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-3 sm:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(stats, (stat) => {
              _push2(`<div class="surface-panel rounded-2xl p-4"${_scopeId}><p class="font-display text-3xl font-bold text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(stat.value)}</p><p class="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(stat.label)}</p><p class="mt-3 text-sm text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(stat.note)}</p></div>`);
            });
            _push2(`<!--]--></div></div><div class="surface-panel flex h-full flex-col rounded-2xl p-5 sm:p-6"${_scopeId}><div${_scopeId}><div${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"${_scopeId}> Inside the hub </p><h2 class="mt-2 text-2xl font-semibold text-slate-950 dark:text-white"${_scopeId}> Small tools with product-level care. </h2></div></div><div class="mt-6 flex-1 space-y-3"${_scopeId}><!--[-->`);
            ssrRenderList(unref(extensions), (ext) => {
              _push2(`<div class="rounded-xl border border-white/70 bg-white/70 p-3 shadow-sm dark:border-white/10 dark:bg-slate-900/70"${_scopeId}><div class="flex items-center justify-between gap-3"${_scopeId}><div class="flex min-w-0 items-center gap-3"${_scopeId}><span class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg dark:bg-slate-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: ext.icon,
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(`</span><div class="min-w-0"${_scopeId}><p class="font-semibold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(ext.label)}</p><p class="truncate text-sm text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(ext.badge)}</p></div></div><span class="rounded-xl border border-slate-200/80 px-4 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"${_scopeId}>${ssrInterpolate(ext.eyebrow)}</span></div></div>`);
            });
            _push2(`<!--]--></div><div class="mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              to: "#extensions",
              label: "View more",
              icon: "i-lucide-arrow-down",
              color: "neutral",
              variant: "subtle",
              class: "button-icon-20 rounded-lg px-5"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 grid gap-2 text-sm text-slate-600 dark:text-slate-300"${_scopeId}><!--[-->`);
            ssrRenderList(principles, (principle) => {
              _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-lucide-check",
                class: "size-4 text-primary"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(principle)}</span></div>`);
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_26rem] lg:items-stretch" }, [
                createVNode("div", { class: "space-y-8" }, [
                  createVNode("div", { class: "section-kicker" }, [
                    createVNode("span", { class: "size-2 rounded-full bg-primary" }),
                    createTextVNode(" Independent Chrome extension lab ")
                  ]),
                  createVNode("div", { class: "space-y-5" }, [
                    createVNode("h1", { class: "font-display max-w-4xl text-5xl font-bold text-slate-950 sm:text-6xl lg:text-7xl dark:text-white" }, " Chrome extensions for people who live in devtools. "),
                    createVNode("p", { class: "max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300" }, " ExtHub is a growing collection of focused browser tools for developers and designers: color workflows, performance overlays, smarter form filling, selector inspection, and other utilities that earn a permanent place in your toolbar. ")
                  ]),
                  createVNode("div", { class: "flex flex-wrap gap-3" }, [
                    createVNode(_component_UButton, {
                      to: "#extensions",
                      label: "Browse extensions",
                      icon: "i-lucide-arrow-down",
                      size: "xl",
                      class: "button-icon-20 rounded-lg px-6"
                    }),
                    createVNode(_component_UButton, {
                      to: "mailto:5797565@gmail.com",
                      label: "Get in touch",
                      icon: "i-lucide-mail",
                      size: "xl",
                      color: "neutral",
                      variant: "subtle",
                      class: "button-icon-20 rounded-lg px-6"
                    })
                  ]),
                  createVNode("div", { class: "grid gap-3 sm:grid-cols-3" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(stats, (stat) => {
                      return createVNode("div", {
                        key: stat.label,
                        class: "surface-panel rounded-2xl p-4"
                      }, [
                        createVNode("p", { class: "font-display text-3xl font-bold text-slate-950 dark:text-white" }, toDisplayString(stat.value), 1),
                        createVNode("p", { class: "mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400" }, toDisplayString(stat.label), 1),
                        createVNode("p", { class: "mt-3 text-sm text-slate-600 dark:text-slate-300" }, toDisplayString(stat.note), 1)
                      ]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "surface-panel flex h-full flex-col rounded-2xl p-5 sm:p-6" }, [
                  createVNode("div", null, [
                    createVNode("div", null, [
                      createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400" }, " Inside the hub "),
                      createVNode("h2", { class: "mt-2 text-2xl font-semibold text-slate-950 dark:text-white" }, " Small tools with product-level care. ")
                    ])
                  ]),
                  createVNode("div", { class: "mt-6 flex-1 space-y-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(extensions), (ext) => {
                      return openBlock(), createBlock("div", {
                        key: ext.name,
                        class: "rounded-xl border border-white/70 bg-white/70 p-3 shadow-sm dark:border-white/10 dark:bg-slate-900/70"
                      }, [
                        createVNode("div", { class: "flex items-center justify-between gap-3" }, [
                          createVNode("div", { class: "flex min-w-0 items-center gap-3" }, [
                            createVNode("span", { class: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg dark:bg-slate-800" }, [
                              createVNode(_component_UIcon, {
                                name: ext.icon,
                                class: "size-5"
                              }, null, 8, ["name"])
                            ]),
                            createVNode("div", { class: "min-w-0" }, [
                              createVNode("p", { class: "font-semibold text-slate-900 dark:text-white" }, toDisplayString(ext.label), 1),
                              createVNode("p", { class: "truncate text-sm text-slate-500 dark:text-slate-400" }, toDisplayString(ext.badge), 1)
                            ])
                          ]),
                          createVNode("span", { class: "rounded-xl border border-slate-200/80 px-4 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:text-slate-300" }, toDisplayString(ext.eyebrow), 1)
                        ])
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "mt-5" }, [
                    createVNode(_component_UButton, {
                      to: "#extensions",
                      label: "View more",
                      icon: "i-lucide-arrow-down",
                      color: "neutral",
                      variant: "subtle",
                      class: "button-icon-20 rounded-lg px-5"
                    })
                  ]),
                  createVNode("div", { class: "mt-6 grid gap-2 text-sm text-slate-600 dark:text-slate-300" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(principles, (principle) => {
                      return createVNode("div", {
                        key: principle,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "i-lucide-check",
                          class: "size-4 text-primary"
                        }),
                        createVNode("span", null, toDisplayString(principle), 1)
                      ]);
                    }), 64))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, {
        id: "extensions",
        class: "pb-16 sm:pb-20"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex flex-col gap-5 rounded-2xl border border-white/70 bg-white/65 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/55 lg:flex-row lg:items-end lg:justify-between"${_scopeId}><div class="max-w-2xl"${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400"${_scopeId}> Extension lineup </p><h2 class="mt-3 text-3xl font-semibold text-slate-950 dark:text-white"${_scopeId}> A toolkit shelf for modern web work. </h2><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"${_scopeId}> Every extension here is built to solve a specific workflow problem cleanly: fewer clicks, clearer signal, and no unnecessary clutter. </p></div><div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-sparkles",
              class: "size-4 text-primary"
            }, null, _parent2, _scopeId));
            _push2(` More extensions are on the way. </div></div><div class="grid gap-6 lg:grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(extensions), (ext) => {
              _push2(ssrRenderComponent(_component_ExtensionCard, mergeProps({
                key: ext.name
              }, { ref_for: true }, ext), null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-8 flex flex-col gap-5 rounded-2xl border border-white/70 bg-white/65 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/55 lg:flex-row lg:items-end lg:justify-between" }, [
                createVNode("div", { class: "max-w-2xl" }, [
                  createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400" }, " Extension lineup "),
                  createVNode("h2", { class: "mt-3 text-3xl font-semibold text-slate-950 dark:text-white" }, " A toolkit shelf for modern web work. "),
                  createVNode("p", { class: "mt-3 text-base leading-7 text-slate-600 dark:text-slate-300" }, " Every extension here is built to solve a specific workflow problem cleanly: fewer clicks, clearer signal, and no unnecessary clutter. ")
                ]),
                createVNode("div", { class: "flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400" }, [
                  createVNode(_component_UIcon, {
                    name: "i-lucide-sparkles",
                    class: "size-4 text-primary"
                  }),
                  createTextVNode(" More extensions are on the way. ")
                ])
              ]),
              createVNode("div", { class: "grid gap-6 lg:grid-cols-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(extensions), (ext) => {
                  return openBlock(), createBlock(_component_ExtensionCard, mergeProps({
                    key: ext.name
                  }, { ref_for: true }, ext), null, 16);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-cOFtRGS3.mjs.map
