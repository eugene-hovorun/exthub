import { c as _sfc_main$b, d as _sfc_main$h } from './server.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PolicyPage",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    updatedAt: {},
    summary: {},
    productPath: {},
    facts: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$b;
      const _component_UButton = _sfc_main$h;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2ea878ba>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "relative py-16 sm:py-20 lg:py-24" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start" data-v-2ea878ba${_scopeId}><div class="space-y-6" data-v-2ea878ba${_scopeId}><div class="section-kicker" data-v-2ea878ba${_scopeId}><span class="size-2 rounded-full bg-primary" data-v-2ea878ba${_scopeId}></span> Privacy Policy </div><div class="space-y-4" data-v-2ea878ba${_scopeId}><h1 class="font-display max-w-4xl text-4xl font-bold text-slate-950 sm:text-5xl dark:text-white" data-v-2ea878ba${_scopeId}>${ssrInterpolate(__props.title)}</h1><p class="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300" data-v-2ea878ba${_scopeId}>${ssrInterpolate(__props.description)}</p></div><div class="flex flex-wrap gap-3" data-v-2ea878ba${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              to: __props.productPath,
              label: "Back to product",
              icon: "i-lucide-arrow-left",
              size: "lg",
              color: "neutral",
              variant: "subtle",
              class: "button-icon-20 rounded-lg px-5"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="surface-panel rounded-2xl p-5" data-v-2ea878ba${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400" data-v-2ea878ba${_scopeId}> Document status </p><p class="mt-3 text-2xl font-semibold text-slate-950 dark:text-white" data-v-2ea878ba${_scopeId}> Last updated </p><p class="mt-1 text-sm text-slate-600 dark:text-slate-300" data-v-2ea878ba${_scopeId}>${ssrInterpolate(__props.updatedAt)}</p><p class="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300" data-v-2ea878ba${_scopeId}>${ssrInterpolate(__props.summary)}</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start" }, [
                createVNode("div", { class: "space-y-6" }, [
                  createVNode("div", { class: "section-kicker" }, [
                    createVNode("span", { class: "size-2 rounded-full bg-primary" }),
                    createTextVNode(" Privacy Policy ")
                  ]),
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("h1", { class: "font-display max-w-4xl text-4xl font-bold text-slate-950 sm:text-5xl dark:text-white" }, toDisplayString(__props.title), 1),
                    createVNode("p", { class: "max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300" }, toDisplayString(__props.description), 1)
                  ]),
                  createVNode("div", { class: "flex flex-wrap gap-3" }, [
                    createVNode(_component_UButton, {
                      to: __props.productPath,
                      label: "Back to product",
                      icon: "i-lucide-arrow-left",
                      size: "lg",
                      color: "neutral",
                      variant: "subtle",
                      class: "button-icon-20 rounded-lg px-5"
                    }, null, 8, ["to"])
                  ])
                ]),
                createVNode("div", { class: "surface-panel rounded-2xl p-5" }, [
                  createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400" }, " Document status "),
                  createVNode("p", { class: "mt-3 text-2xl font-semibold text-slate-950 dark:text-white" }, " Last updated "),
                  createVNode("p", { class: "mt-1 text-sm text-slate-600 dark:text-slate-300" }, toDisplayString(__props.updatedAt), 1),
                  createVNode("p", { class: "mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300" }, toDisplayString(__props.summary), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "pb-16 sm:pb-20" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start" data-v-2ea878ba${_scopeId}><aside class="surface-panel self-start rounded-2xl p-5 lg:sticky" data-v-2ea878ba${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400" data-v-2ea878ba${_scopeId}> Quick facts </p><div class="mt-5 space-y-3" data-v-2ea878ba${_scopeId}><!--[-->`);
            ssrRenderList(__props.facts, (fact) => {
              _push2(`<div class="rounded-xl border border-slate-200/80 bg-white/70 p-3 dark:border-white/10 dark:bg-slate-900/70" data-v-2ea878ba${_scopeId}><p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400" data-v-2ea878ba${_scopeId}>${ssrInterpolate(fact.label)}</p><p class="mt-2 text-sm font-medium text-slate-900 dark:text-white" data-v-2ea878ba${_scopeId}>${ssrInterpolate(fact.value)}</p></div>`);
            });
            _push2(`<!--]--></div></aside><article class="surface-panel rounded-2xl p-6 sm:p-8" data-v-2ea878ba${_scopeId}><div class="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm leading-6 text-slate-700 dark:text-slate-200" data-v-2ea878ba${_scopeId}><p class="font-semibold text-slate-950 dark:text-white" data-v-2ea878ba${_scopeId}> The short version </p><p class="mt-2" data-v-2ea878ba${_scopeId}>${ssrInterpolate(__props.summary)}</p></div><div class="policy-prose mt-8" data-v-2ea878ba${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></article></div>`);
          } else {
            return [
              createVNode("div", { class: "grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start" }, [
                createVNode("aside", { class: "surface-panel self-start rounded-2xl p-5 lg:sticky" }, [
                  createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400" }, " Quick facts "),
                  createVNode("div", { class: "mt-5 space-y-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.facts, (fact) => {
                      return openBlock(), createBlock("div", {
                        key: fact.label,
                        class: "rounded-xl border border-slate-200/80 bg-white/70 p-3 dark:border-white/10 dark:bg-slate-900/70"
                      }, [
                        createVNode("p", { class: "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400" }, toDisplayString(fact.label), 1),
                        createVNode("p", { class: "mt-2 text-sm font-medium text-slate-900 dark:text-white" }, toDisplayString(fact.value), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("article", { class: "surface-panel rounded-2xl p-6 sm:p-8" }, [
                  createVNode("div", { class: "rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm leading-6 text-slate-700 dark:text-slate-200" }, [
                    createVNode("p", { class: "font-semibold text-slate-950 dark:text-white" }, " The short version "),
                    createVNode("p", { class: "mt-2" }, toDisplayString(__props.summary), 1)
                  ]),
                  createVNode("div", { class: "policy-prose mt-8" }, [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PolicyPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-2ea878ba"]]), { __name: "PolicyPage" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=PolicyPage-CYs8tdqf.mjs.map
