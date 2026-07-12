import { c as _sfc_main$b, d as _sfc_main$h, a as _sfc_main$m, f as useLocale, g as useAppConfig, t as tv, h as get } from './server.mjs';
import { defineComponent, computed, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, ref, watch, mergeProps, renderSlot, useSlots, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import useEmblaCarousel from 'embla-carousel-vue';
import { useForwardProps, Primitive, useForwardPropsEmits, AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const theme$1 = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": [
      "cursor-pointer size-3 bg-accented rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      "transition"
    ]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "start-4 sm:-start-12 top-1/2 -translate-y-1/2",
        "next": "end-4 sm:-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": {
      "true": {
        "dot": "data-[state=active]:bg-inverted"
      }
    }
  }
};
const _sfc_main$3 = {
  __name: "UCarousel",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prev: { type: Object, required: false },
    prevIcon: { type: null, required: false },
    next: { type: Object, required: false },
    nextIcon: { type: null, required: false },
    arrows: { type: Boolean, required: false, default: false },
    dots: { type: Boolean, required: false, default: false },
    orientation: { type: null, required: false, default: "horizontal" },
    items: { type: Array, required: false },
    autoplay: { type: [Boolean, Object], required: false, default: false },
    autoScroll: { type: [Boolean, Object], required: false, default: false },
    autoHeight: { type: [Boolean, Object], required: false, default: false },
    classNames: { type: [Boolean, Object], required: false, default: false },
    fade: { type: [Boolean, Object], required: false, default: false },
    wheelGestures: { type: [Boolean, Object], required: false, default: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    align: { type: [String, Function], required: false, default: "center" },
    containScroll: { type: [Boolean, String], required: false, default: "trimSnaps" },
    slidesToScroll: { type: [String, Number], required: false, default: 1 },
    dragFree: { type: Boolean, required: false, default: false },
    dragThreshold: { type: Number, required: false, default: 10 },
    inViewThreshold: { type: null, required: false, default: 0 },
    loop: { type: Boolean, required: false, default: false },
    skipSnaps: { type: Boolean, required: false, default: false },
    duration: { type: Number, required: false, default: 25 },
    startIndex: { type: Number, required: false, default: 0 },
    watchDrag: { type: [Boolean, Function], required: false, default: true },
    watchResize: { type: [Boolean, Function], required: false, default: true },
    watchSlides: { type: [Boolean, Function], required: false, default: true },
    watchFocus: { type: [Boolean, Function], required: false, default: true },
    active: { type: Boolean, required: false, default: true },
    breakpoints: { type: Object, required: false, default: () => ({}) }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { dir, t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
    const stopAutoplayOnInteraction = computed(() => {
      if (typeof props.autoplay === "boolean") {
        return true;
      }
      return props.autoplay.stopOnInteraction ?? true;
    });
    const stopAutoScrollOnInteraction = computed(() => {
      if (typeof props.autoScroll === "boolean") {
        return true;
      }
      return props.autoScroll.stopOnInteraction ?? true;
    });
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.carousel || {} })({
      orientation: props.orientation
    }));
    const options = computed(() => ({
      ...props.fade ? { align: "center", containScroll: false } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = ref([]);
    async function loadPlugins() {
      const emblaPlugins = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('embla-carousel-autoplay').then((r) => r.default);
        emblaPlugins.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('embla-carousel-auto-scroll').then((r) => r.default);
        emblaPlugins.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('embla-carousel-auto-height').then((r) => r.default);
        emblaPlugins.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('embla-carousel-class-names').then((r) => r.default);
        emblaPlugins.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('embla-carousel-fade').then((r) => r.default);
        emblaPlugins.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('../_/embla-carousel-wheel-gestures.esm.mjs');
        emblaPlugins.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      plugins.value = emblaPlugins;
    }
    watch(() => [props.autoplay, props.autoScroll, props.autoHeight, props.classNames, props.fade, props.wheelGestures], async () => {
      await loadPlugins();
      emblaApi.value?.reInit(options.value, plugins.value);
    }, { immediate: true });
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    watch(options, () => {
      emblaApi.value?.reInit(options.value, plugins.value);
    }, { flush: "post" });
    function stopOnInteraction() {
      if (stopAutoplayOnInteraction.value) {
        emblaApi.value?.plugins().autoplay?.stop();
      }
      if (stopAutoScrollOnInteraction.value) {
        emblaApi.value?.plugins().autoScroll?.stop();
      }
    }
    function scrollPrev() {
      emblaApi.value?.scrollPrev();
      stopOnInteraction();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
      stopOnInteraction();
    }
    function scrollTo(index) {
      emblaApi.value?.scrollTo(index);
    }
    function onKeyDown(event) {
      let prevKey;
      let nextKey;
      if (props.orientation === "horizontal") {
        prevKey = dir.value === "ltr" ? "ArrowLeft" : "ArrowRight";
        nextKey = dir.value === "ltr" ? "ArrowRight" : "ArrowLeft";
      } else {
        prevKey = "ArrowUp";
        nextKey = "ArrowDown";
      }
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);
    function isCarouselItem(item) {
      return typeof item === "object" && item !== null;
    }
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        role: "region",
        "aria-roledescription": "carousel",
        "data-orientation": __props.orientation,
        tabindex: "0",
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: props.ui?.viewport }))}"${_scopeId}><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              _push2(`<div${ssrRenderAttrs(mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                "data-slot": "item",
                class: ui.value.item({ class: [props.ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
              }))}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (__props.arrows || __props.dots) {
              _push2(`<div data-slot="controls" class="${ssrRenderClass(ui.value.controls({ class: props.ui?.controls }))}"${_scopeId}>`);
              if (__props.arrows) {
                _push2(`<div data-slot="arrows" class="${ssrRenderClass(ui.value.arrows({ class: props.ui?.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$h, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof __props.prev === "object" ? __props.prev : void 0, {
                  "data-slot": "prev",
                  class: ui.value.prev({ class: props.ui?.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$h, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof __props.next === "object" ? __props.next : void 0, {
                  "data-slot": "next",
                  class: ui.value.next({ class: props.ui?.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.dots) {
                _push2(`<div role="tablist"${ssrRenderAttr("aria-label", unref(t)("carousel.dots"))} data-slot="dots" class="${ssrRenderClass(ui.value.dots({ class: props.ui?.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index) => {
                  _push2(`<button type="button" role="tab"${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))}${ssrRenderAttr("aria-selected", selectedIndex.value === index)} data-slot="dot" class="${ssrRenderClass(ui.value.dot({ class: props.ui?.dot, active: selectedIndex.value === index }))}"${ssrRenderAttr("data-state", selectedIndex.value === index ? "active" : void 0)}${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                ref_key: "emblaRef",
                ref: emblaRef,
                "data-slot": "viewport",
                class: ui.value.viewport({ class: props.ui?.viewport })
              }, [
                createVNode("div", {
                  "data-slot": "container",
                  class: ui.value.container({ class: props.ui?.container })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                    return openBlock(), createBlock("div", mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                      "data-slot": "item",
                      class: ui.value.item({ class: [props.ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
                    }), [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index
                      })
                    ], 16);
                  }), 128))
                ], 2)
              ], 2),
              __props.arrows || __props.dots ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "controls",
                class: ui.value.controls({ class: props.ui?.controls })
              }, [
                __props.arrows ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "arrows",
                  class: ui.value.arrows({ class: props.ui?.arrows })
                }, [
                  createVNode(_sfc_main$h, mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.prev")
                  }, typeof __props.prev === "object" ? __props.prev : void 0, {
                    "data-slot": "prev",
                    class: ui.value.prev({ class: props.ui?.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  createVNode(_sfc_main$h, mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.next")
                  }, typeof __props.next === "object" ? __props.next : void 0, {
                    "data-slot": "next",
                    class: ui.value.next({ class: props.ui?.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : createCommentVNode("", true),
                __props.dots ? (openBlock(), createBlock("div", {
                  key: 1,
                  role: "tablist",
                  "aria-label": unref(t)("carousel.dots"),
                  "data-slot": "dots",
                  class: ui.value.dots({ class: props.ui?.dots })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index) => {
                    return openBlock(), createBlock("button", {
                      key: index,
                      type: "button",
                      role: "tab",
                      "aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
                      "aria-selected": selectedIndex.value === index,
                      "data-slot": "dot",
                      class: ui.value.dot({ class: props.ui?.dot, active: selectedIndex.value === index }),
                      "data-state": selectedIndex.value === index ? "active" : void 0,
                      onClick: ($event) => scrollTo(index)
                    }, null, 10, ["aria-label", "aria-selected", "data-state", "onClick"]);
                  }), 128))
                ], 10, ["aria-label"])) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "w-full",
    "item": "border-b border-default last:border-b-0",
    "header": "flex",
    "trigger": "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-primary min-w-0",
    "content": "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",
    "body": "text-sm pb-3.5",
    "leadingIcon": "shrink-0 size-5",
    "trailingIcon": "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",
    "label": "text-start break-words"
  },
  "variants": {
    "disabled": {
      "true": {
        "trigger": "cursor-not-allowed opacity-75"
      }
    }
  }
};
const _sfc_main$2 = {
  __name: "UAccordion",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    items: { type: Array, required: false },
    trailingIcon: { type: null, required: false },
    valueKey: { type: null, required: false, default: "value" },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    collapsible: { type: Boolean, required: false, default: true },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    type: { type: String, required: false, default: "single" },
    disabled: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "collapsible", "defaultValue", "disabled", "modelValue", "unmountOnHide"), emits);
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.accordion || {} })({
      disabled: props.disabled
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps(unref(rootProps), {
        type: __props.type,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.items, (item, index) => {
              _push2(ssrRenderComponent(unref(AccordionItem), {
                key: index,
                value: unref(get)(item, props.valueKey) ?? String(index),
                disabled: item.disabled,
                "data-slot": "item",
                class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] })
              }, {
                default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(AccordionHeader), {
                      as: "div",
                      "data-slot": "header",
                      class: ui.value.header({ class: [props.ui?.header, item.ui?.header] })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AccordionTrigger), {
                            "data-slot": "trigger",
                            class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "leading", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => {
                                  if (item.icon) {
                                    _push5(ssrRenderComponent(_sfc_main$m, {
                                      name: item.icon,
                                      "data-slot": "leadingIcon",
                                      class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                                if (unref(get)(item, props.labelKey) || !!slots.default) {
                                  _push5(`<span data-slot="label" class="${ssrRenderClass(ui.value.label({ class: [props.ui?.label, item.ui?.label] }))}"${_scopeId4}>`);
                                  ssrRenderSlot(_ctx.$slots, "default", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    _push5(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(`</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                ssrRenderSlot(_ctx.$slots, "trailing", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => {
                                  _push5(ssrRenderComponent(_sfc_main$m, {
                                    name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                    "data-slot": "trailingIcon",
                                    class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                                  }, null, _parent5, _scopeId4));
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => [
                                    item.icon ? (openBlock(), createBlock(_sfc_main$m, {
                                      key: 0,
                                      name: item.icon,
                                      "data-slot": "leadingIcon",
                                      class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                  ]),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    "data-slot": "label",
                                    class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => [
                                    createVNode(_sfc_main$m, {
                                      name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                      "data-slot": "trailingIcon",
                                      class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                                    }, null, 8, ["name", "class"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AccordionTrigger), {
                              "data-slot": "trigger",
                              class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "leading", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => [
                                  item.icon ? (openBlock(), createBlock(_sfc_main$m, {
                                    key: 0,
                                    name: item.icon,
                                    "data-slot": "leadingIcon",
                                    class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                ]),
                                unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  "data-slot": "label",
                                  class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                                }, [
                                  renderSlot(_ctx.$slots, "default", {
                                    item,
                                    index,
                                    open
                                  }, () => [
                                    createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                  ])
                                ], 2)) : createCommentVNode("", true),
                                renderSlot(_ctx.$slots, "trailing", {
                                  item,
                                  index,
                                  open,
                                  ui: ui.value
                                }, () => [
                                  createVNode(_sfc_main$m, {
                                    name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                    "data-slot": "trailingIcon",
                                    class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                                  }, null, 8, ["name", "class"])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`]) {
                      _push3(ssrRenderComponent(unref(AccordionContent), {
                        "data-slot": "content",
                        class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => {
                              _push4(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: [props.ui?.body, item.ui?.body] }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => {
                                _push4(`${ssrInterpolate(item.content)}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</div>`);
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, item.slot || "content", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => [
                                createVNode("div", {
                                  "data-slot": "body",
                                  class: ui.value.body({ class: [props.ui?.body, item.ui?.body] })
                                }, [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                    item,
                                    index,
                                    open,
                                    ui: ui.value
                                  }, () => [
                                    createTextVNode(toDisplayString(item.content), 1)
                                  ])
                                ], 2)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode(unref(AccordionHeader), {
                        as: "div",
                        "data-slot": "header",
                        class: ui.value.header({ class: [props.ui?.header, item.ui?.header] })
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(AccordionTrigger), {
                            "data-slot": "trigger",
                            class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "leading", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => [
                                item.icon ? (openBlock(), createBlock(_sfc_main$m, {
                                  key: 0,
                                  name: item.icon,
                                  "data-slot": "leadingIcon",
                                  class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                              ]),
                              unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                key: 0,
                                "data-slot": "label",
                                class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                              }, [
                                renderSlot(_ctx.$slots, "default", {
                                  item,
                                  index,
                                  open
                                }, () => [
                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                ])
                              ], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, "trailing", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => [
                                createVNode(_sfc_main$m, {
                                  name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                  "data-slot": "trailingIcon",
                                  class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                                }, null, 8, ["name", "class"])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ]),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                        key: 0,
                        "data-slot": "content",
                        class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index,
                            open,
                            ui: ui.value
                          }, () => [
                            createVNode("div", {
                              "data-slot": "body",
                              class: ui.value.body({ class: [props.ui?.body, item.ui?.body] })
                            }, [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => [
                                createTextVNode(toDisplayString(item.content), 1)
                              ])
                            ], 2)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["class"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item, index) => {
                return openBlock(), createBlock(unref(AccordionItem), {
                  key: index,
                  value: unref(get)(item, props.valueKey) ?? String(index),
                  disabled: item.disabled,
                  "data-slot": "item",
                  class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] })
                }, {
                  default: withCtx(({ open }) => [
                    createVNode(unref(AccordionHeader), {
                      as: "div",
                      "data-slot": "header",
                      class: ui.value.header({ class: [props.ui?.header, item.ui?.header] })
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(AccordionTrigger), {
                          "data-slot": "trigger",
                          class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger], disabled: item.disabled })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => [
                              item.icon ? (openBlock(), createBlock(_sfc_main$m, {
                                key: 0,
                                name: item.icon,
                                "data-slot": "leadingIcon",
                                class: ui.value.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })
                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                            ]),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              "data-slot": "label",
                              class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index,
                                open
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => [
                              createVNode(_sfc_main$m, {
                                name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                "data-slot": "trailingIcon",
                                class: ui.value.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })
                              }, null, 8, ["name", "class"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ]),
                      _: 2
                    }, 1032, ["class"]),
                    item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                      key: 0,
                      "data-slot": "content",
                      class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index,
                          open,
                          ui: ui.value
                        }, () => [
                          createVNode("div", {
                            "data-slot": "body",
                            class: ui.value.body({ class: [props.ui?.body, item.ui?.body] })
                          }, [
                            renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => [
                              createTextVNode(toDisplayString(item.content), 1)
                            ])
                          ], 2)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["value", "disabled", "class"]);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ExtensionLanding",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    description: {},
    chromeWebStoreUrl: {},
    policyPath: {},
    screenshots: {},
    features: {},
    faq: {},
    metrics: {},
    featureTitle: {},
    featureDescription: {},
    ctaTitle: {},
    ctaDescription: {},
    accentClass: {},
    previewLabel: {}
  },
  setup(__props) {
    const props = __props;
    const heroScreenshot = computed(() => props.screenshots[0]);
    const hasStoreUrl = computed(() => Boolean(props.chromeWebStoreUrl));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$b;
      const _component_UButton = _sfc_main$h;
      const _component_UCarousel = _sfc_main$3;
      const _component_UIcon = _sfc_main$m;
      const _component_UAccordion = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "relative py-16 sm:py-20 lg:py-24" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_30rem] lg:items-stretch"${_scopeId}><div class="space-y-8"${_scopeId}><div class="section-kicker"${_scopeId}><span class="size-2 rounded-full bg-primary"${_scopeId}></span> ${ssrInterpolate(__props.eyebrow)}</div><div class="space-y-5"${_scopeId}><h1 class="font-display max-w-4xl text-4xl font-bold text-slate-950 sm:text-5xl lg:text-6xl dark:text-white"${_scopeId}>${ssrInterpolate(__props.title)}</h1><p class="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(__props.description)}</p></div><div class="flex flex-wrap gap-3"${_scopeId}>`);
            if (unref(hasStoreUrl)) {
              _push2(ssrRenderComponent(_component_UButton, {
                to: __props.chromeWebStoreUrl,
                target: "_blank",
                label: "Add to Chrome",
                "trailing-icon": "i-lucide-chrome",
                size: "xl",
                class: "button-icon-20 rounded-lg px-6"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UButton, {
              to: __props.policyPath,
              label: "Privacy Policy",
              icon: "i-lucide-shield-check",
              size: "xl",
              color: "neutral",
              variant: "subtle",
              class: "button-icon-20 rounded-lg px-6"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-3 sm:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(__props.metrics, (metric) => {
              _push2(`<div class="surface-panel rounded-2xl p-4"${_scopeId}><p class="font-display text-3xl font-bold text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(metric.value)}</p><p class="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(metric.label)}</p></div>`);
            });
            _push2(`<!--]--></div></div><div class="surface-panel flex h-full flex-col rounded-2xl p-4 sm:p-5"${_scopeId}><div class="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-950"${_scopeId}><div class="${ssrRenderClass([__props.accentClass, "absolute inset-0 bg-gradient-to-br opacity-90"])}"${_scopeId}></div>`);
            if (unref(heroScreenshot)) {
              _push2(`<img${ssrRenderAttr("src", unref(heroScreenshot).src)}${ssrRenderAttr("alt", unref(heroScreenshot).alt)} class="absolute inset-0 h-full w-full object-cover object-top"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-4"${_scopeId}><div${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"${_scopeId}> Live preview </p><p class="mt-1 text-sm text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(__props.previewLabel)}</p></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_30rem] lg:items-stretch" }, [
                createVNode("div", { class: "space-y-8" }, [
                  createVNode("div", { class: "section-kicker" }, [
                    createVNode("span", { class: "size-2 rounded-full bg-primary" }),
                    createTextVNode(" " + toDisplayString(__props.eyebrow), 1)
                  ]),
                  createVNode("div", { class: "space-y-5" }, [
                    createVNode("h1", { class: "font-display max-w-4xl text-4xl font-bold text-slate-950 sm:text-5xl lg:text-6xl dark:text-white" }, toDisplayString(__props.title), 1),
                    createVNode("p", { class: "max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300" }, toDisplayString(__props.description), 1)
                  ]),
                  createVNode("div", { class: "flex flex-wrap gap-3" }, [
                    unref(hasStoreUrl) ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      to: __props.chromeWebStoreUrl,
                      target: "_blank",
                      label: "Add to Chrome",
                      "trailing-icon": "i-lucide-chrome",
                      size: "xl",
                      class: "button-icon-20 rounded-lg px-6"
                    }, null, 8, ["to"])) : createCommentVNode("", true),
                    createVNode(_component_UButton, {
                      to: __props.policyPath,
                      label: "Privacy Policy",
                      icon: "i-lucide-shield-check",
                      size: "xl",
                      color: "neutral",
                      variant: "subtle",
                      class: "button-icon-20 rounded-lg px-6"
                    }, null, 8, ["to"])
                  ]),
                  createVNode("div", { class: "grid gap-3 sm:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.metrics, (metric) => {
                      return openBlock(), createBlock("div", {
                        key: metric.label,
                        class: "surface-panel rounded-2xl p-4"
                      }, [
                        createVNode("p", { class: "font-display text-3xl font-bold text-slate-950 dark:text-white" }, toDisplayString(metric.value), 1),
                        createVNode("p", { class: "mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400" }, toDisplayString(metric.label), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "surface-panel flex h-full flex-col rounded-2xl p-4 sm:p-5" }, [
                  createVNode("div", { class: "relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-950" }, [
                    createVNode("div", {
                      class: ["absolute inset-0 bg-gradient-to-br opacity-90", __props.accentClass]
                    }, null, 2),
                    unref(heroScreenshot) ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: unref(heroScreenshot).src,
                      alt: unref(heroScreenshot).alt,
                      class: "absolute inset-0 h-full w-full object-cover object-top"
                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode("div", null, [
                      createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400" }, " Live preview "),
                      createVNode("p", { class: "mt-1 text-sm text-slate-600 dark:text-slate-300" }, toDisplayString(__props.previewLabel), 1)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "pb-10 sm:pb-14" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="surface-panel rounded-2xl p-5 sm:p-6"${_scopeId}><div class="mb-5 flex items-end justify-between gap-4"${_scopeId}><div${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"${_scopeId}> Product tour </p><h2 class="mt-2 text-2xl font-semibold text-slate-950 dark:text-white"${_scopeId}> See the extension in action. </h2></div><div class="hidden rounded-xl border border-slate-200/80 px-4 py-2 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 md:block"${_scopeId}> Hover, inspect, install </div></div>`);
            _push2(ssrRenderComponent(_component_UCarousel, {
              items: __props.screenshots,
              loop: "",
              arrows: "",
              dots: "",
              autoplay: { delay: 4e3 },
              prev: { variant: "solid", color: "neutral" },
              next: { variant: "solid", color: "neutral" },
              ui: {
                item: "basis-full px-2 sm:px-3",
                dots: "bottom-4"
              },
              class: "mx-auto max-w-5xl"
            }, {
              default: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/70 dark:border-white/10"${_scopeId2}><img${ssrRenderAttr("src", item.src)}${ssrRenderAttr("alt", item.alt)} class="absolute inset-0 h-full w-full object-cover object-top" loading="lazy"${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative aspect-[16/10] overflow-hidden rounded-xl border border-white/70 dark:border-white/10" }, [
                      createVNode("img", {
                        src: item.src,
                        alt: item.alt,
                        class: "absolute inset-0 h-full w-full object-cover object-top",
                        loading: "lazy"
                      }, null, 8, ["src", "alt"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "surface-panel rounded-2xl p-5 sm:p-6" }, [
                createVNode("div", { class: "mb-5 flex items-end justify-between gap-4" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400" }, " Product tour "),
                    createVNode("h2", { class: "mt-2 text-2xl font-semibold text-slate-950 dark:text-white" }, " See the extension in action. ")
                  ]),
                  createVNode("div", { class: "hidden rounded-xl border border-slate-200/80 px-4 py-2 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 md:block" }, " Hover, inspect, install ")
                ]),
                createVNode(_component_UCarousel, {
                  items: __props.screenshots,
                  loop: "",
                  arrows: "",
                  dots: "",
                  autoplay: { delay: 4e3 },
                  prev: { variant: "solid", color: "neutral" },
                  next: { variant: "solid", color: "neutral" },
                  ui: {
                    item: "basis-full px-2 sm:px-3",
                    dots: "bottom-4"
                  },
                  class: "mx-auto max-w-5xl"
                }, {
                  default: withCtx(({ item }) => [
                    createVNode("div", { class: "relative aspect-[16/10] overflow-hidden rounded-xl border border-white/70 dark:border-white/10" }, [
                      createVNode("img", {
                        src: item.src,
                        alt: item.alt,
                        class: "absolute inset-0 h-full w-full object-cover object-top",
                        loading: "lazy"
                      }, null, 8, ["src", "alt"])
                    ])
                  ]),
                  _: 1
                }, 8, ["items"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "py-10 sm:py-14" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 max-w-2xl"${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"${_scopeId}> Feature set </p><h2 class="mt-3 text-3xl font-semibold text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(__props.featureTitle)}</h2><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(__props.featureDescription)}</p></div><div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(__props.features, (feature) => {
              _push2(`<div class="surface-panel rounded-2xl p-5"${_scopeId}><div class="flex size-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/85 text-slate-700 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: feature.icon,
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="mt-4 text-lg font-semibold text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(feature.title)}</h3><p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(feature.description)}</p></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-8 max-w-2xl" }, [
                createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400" }, " Feature set "),
                createVNode("h2", { class: "mt-3 text-3xl font-semibold text-slate-950 dark:text-white" }, toDisplayString(__props.featureTitle), 1),
                createVNode("p", { class: "mt-3 text-base leading-7 text-slate-600 dark:text-slate-300" }, toDisplayString(__props.featureDescription), 1)
              ]),
              createVNode("div", { class: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (feature) => {
                  return openBlock(), createBlock("div", {
                    key: feature.title,
                    class: "surface-panel rounded-2xl p-5"
                  }, [
                    createVNode("div", { class: "flex size-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/85 text-slate-700 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200" }, [
                      createVNode(_component_UIcon, {
                        name: feature.icon,
                        class: "size-5"
                      }, null, 8, ["name"])
                    ]),
                    createVNode("h3", { class: "mt-4 text-lg font-semibold text-slate-950 dark:text-white" }, toDisplayString(feature.title), 1),
                    createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300" }, toDisplayString(feature.description), 1)
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "py-10 sm:py-14" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="surface-panel rounded-2xl p-5 sm:p-6"${_scopeId}><div class="max-w-2xl"${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"${_scopeId}> FAQ </p><h2 class="mt-3 text-3xl font-semibold text-slate-950 dark:text-white"${_scopeId}> Everything you need to know. </h2><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"${_scopeId}> Straight answers on pricing, privacy, browser support, and how the extension behaves in real workflows. </p></div>`);
            _push2(ssrRenderComponent(_component_UAccordion, {
              items: __props.faq,
              class: "mt-8",
              ui: {
                item: "border-b border-slate-200/80 dark:border-white/10",
                trigger: "py-4 text-left font-medium text-slate-900 dark:text-white",
                body: "pb-4 text-sm leading-6 text-slate-600 dark:text-slate-300"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "surface-panel rounded-2xl p-5 sm:p-6" }, [
                createVNode("div", { class: "max-w-2xl" }, [
                  createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400" }, " FAQ "),
                  createVNode("h2", { class: "mt-3 text-3xl font-semibold text-slate-950 dark:text-white" }, " Everything you need to know. "),
                  createVNode("p", { class: "mt-3 text-base leading-7 text-slate-600 dark:text-slate-300" }, " Straight answers on pricing, privacy, browser support, and how the extension behaves in real workflows. ")
                ]),
                createVNode(_component_UAccordion, {
                  items: __props.faq,
                  class: "mt-8",
                  ui: {
                    item: "border-b border-slate-200/80 dark:border-white/10",
                    trigger: "py-4 text-left font-medium text-slate-900 dark:text-white",
                    body: "pb-4 text-sm leading-6 text-slate-600 dark:text-slate-300"
                  }
                }, null, 8, ["items"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "py-10 sm:py-14 pb-16 sm:pb-20" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="surface-panel rounded-2xl p-6 sm:p-7"${_scopeId}><div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"${_scopeId}><div class="max-w-2xl"${_scopeId}><p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"${_scopeId}> Install </p><h2 class="mt-3 text-3xl font-semibold text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(__props.ctaTitle)}</h2><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(__props.ctaDescription)}</p></div><div class="flex flex-wrap gap-3"${_scopeId}>`);
            if (unref(hasStoreUrl)) {
              _push2(ssrRenderComponent(_component_UButton, {
                to: __props.chromeWebStoreUrl,
                target: "_blank",
                label: "Install from Chrome Web Store",
                "trailing-icon": "i-lucide-external-link",
                size: "lg",
                class: "button-icon-20 rounded-lg px-5"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UButton, {
              to: __props.policyPath,
              label: "Read privacy policy",
              color: "neutral",
              variant: "subtle",
              size: "lg",
              class: "button-icon-20 rounded-lg px-5"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "surface-panel rounded-2xl p-6 sm:p-7" }, [
                createVNode("div", { class: "flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between" }, [
                  createVNode("div", { class: "max-w-2xl" }, [
                    createVNode("p", { class: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400" }, " Install "),
                    createVNode("h2", { class: "mt-3 text-3xl font-semibold text-slate-950 dark:text-white" }, toDisplayString(__props.ctaTitle), 1),
                    createVNode("p", { class: "mt-3 text-base leading-7 text-slate-600 dark:text-slate-300" }, toDisplayString(__props.ctaDescription), 1)
                  ]),
                  createVNode("div", { class: "flex flex-wrap gap-3" }, [
                    unref(hasStoreUrl) ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      to: __props.chromeWebStoreUrl,
                      target: "_blank",
                      label: "Install from Chrome Web Store",
                      "trailing-icon": "i-lucide-external-link",
                      size: "lg",
                      class: "button-icon-20 rounded-lg px-5"
                    }, null, 8, ["to"])) : createCommentVNode("", true),
                    createVNode(_component_UButton, {
                      to: __props.policyPath,
                      label: "Read privacy policy",
                      color: "neutral",
                      variant: "subtle",
                      size: "lg",
                      class: "button-icon-20 rounded-lg px-5"
                    }, null, 8, ["to"])
                  ])
                ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExtensionLanding.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "ExtensionLanding" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="dark:hidden pointer-events-none fixed inset-0 -z-10"><div class="absolute top-[-20%] left-[-10%] w-150 h-150 rounded-full bg-blue-200/40 blur-[120px]"></div><div class="absolute top-[10%] right-[-5%] w-125 h-125 rounded-full bg-violet-200/40 blur-[100px]"></div><div class="absolute bottom-[-10%] left-[30%] w-100 h-100 rounded-full bg-emerald-200/30 blur-[100px]"></div></div><div class="hidden dark:block pointer-events-none fixed inset-0 -z-10"><div class="absolute top-[-20%] left-[-10%] w-150 h-150 rounded-full bg-blue-900/30 blur-[120px]"></div><div class="absolute top-[10%] right-[-5%] w-125 h-125 rounded-full bg-violet-900/25 blur-[100px]"></div><div class="absolute bottom-[-10%] left-[30%] w-100 h-100 rounded-full bg-emerald-900/20 blur-[100px]"></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/gradient.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "AppGradient" });

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=gradient-RBBYd1C3.mjs.map
