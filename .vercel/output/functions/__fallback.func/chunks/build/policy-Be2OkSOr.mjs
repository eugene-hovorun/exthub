import { _ as __nuxt_component_0 } from './PolicyPage-CYs8tdqf.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { b as useSeoMeta } from './server.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const title = "PickPerfect - Privacy Policy";
const description = "PickPerfect does not collect, transmit, or share any personal data. Everything stays on your device.";
const updatedAt = "February 7, 2026";
const summary = "PickPerfect keeps your data on your device. The extension does not collect personal information, send usage data anywhere, or run hidden tracking. Premium payments go through ExtensionPay.";
const _sfc_main = {
  __name: "policy",
  __ssrInlineRender: true,
  setup(__props) {
    const facts = [
      { label: "Data collection", value: "None" },
      { label: "Storage", value: "Local device only" },
      { label: "Payments", value: "ExtensionPay only" }
    ];
    useSeoMeta({
      title,
      description,
      ogTitle: title,
      ogDescription: description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PolicyPage = __nuxt_component_0;
      _push(ssrRenderComponent(_component_PolicyPage, mergeProps({
        title,
        description,
        "updated-at": updatedAt,
        summary,
        "product-path": "/pickperfect",
        facts
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>What PickPerfect stores on your device</h2><p${_scopeId}> PickPerfect saves a small amount of local data so the extension works the way you expect each time you open it. That data lives in <code${_scopeId}>chrome.storage.local</code> on your device. </p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Color history</strong> for the last 20 colors you picked, including the value and timestamp </li><li${_scopeId}><strong${_scopeId}>Format preference</strong> so the popup remembers whether you prefer HEX, RGB, or HSL </li><li${_scopeId}><strong${_scopeId}>Premium status</strong> so paid features unlock quickly without re-checking on every open </li></ul><p${_scopeId}> PickPerfect does not send this data to us. The only exception is premium verification through ExtensionPay, which is covered below. </p><h2${_scopeId}>What PickPerfect collects</h2><p${_scopeId}> PickPerfect does not collect personal data, usage analytics, telemetry, or tracking identifiers. If you use the free extension and never buy premium, there is nothing being sent to our server because there is no server involved in the core workflow. </p><h2${_scopeId}>Why the extension asks for permissions</h2><p${_scopeId}>PickPerfect asks for a narrow set of Chrome permissions for specific features.</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>storage</strong> keeps your color history, format choice, and premium status on your device </li><li${_scopeId}><strong${_scopeId}>activeTab</strong> is used only when you run page palette extraction on the current page </li><li${_scopeId}><strong${_scopeId}>scripting</strong> injects the one-time extraction script for that palette feature and nothing more </li></ul><p${_scopeId}> The main color picker uses the browser&#39;s native EyeDropper API. It does not need a persistent content script, and it does not read arbitrary page content in the background. </p><h2${_scopeId}>Premium features</h2><p${_scopeId}> Premium access is a one-time purchase. The paid features still run locally inside the extension. </p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>WCAG Contrast Checker</strong> runs locally in the popup</li><li${_scopeId}><strong${_scopeId}>Tailwind Color Mapping</strong> runs locally in the popup</li><li${_scopeId}><strong${_scopeId}>Page Palette Extraction</strong> reads visible CSS color values from the current tab when you explicitly click the extraction button </li></ul><p${_scopeId}> That extraction flow does not read your form submissions, cookies, or browsing history. It only analyzes color values needed to build the page palette. </p><h2${_scopeId}>Third-party services</h2><p${_scopeId}> PickPerfect uses <strong${_scopeId}>ExtensionPay</strong> for premium checkout and license verification. ExtensionPay may use Stripe to process payments. You can read their privacy policy here: <a href="https://extensionpay.com/privacy" target="_blank"${_scopeId}>extensionpay.com/privacy</a>. </p><p${_scopeId}> Outside of payments, PickPerfect does not use analytics tools, ad networks, or hidden third-party scripts. </p><h2${_scopeId}>What PickPerfect does not do</h2><p${_scopeId}> PickPerfect does not track you, profile you, sell your data, or run passive monitoring in the background. It does not read your browsing history, and it does not keep a persistent content script attached to pages. </p><h2${_scopeId}>Changes to this policy</h2><p${_scopeId}> If we update this policy, the revised version will be published at the same URL with a new date at the top of the page. </p><div class="policy-contact rounded-xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/70"${_scopeId}><p class="text-sm font-semibold text-slate-950 dark:text-white"${_scopeId}>Contact</p><p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300"${_scopeId}> If you have a privacy question about PickPerfect, send it to <a href="mailto:5797565@gmail.com"${_scopeId}>5797565@gmail.com</a> and include &quot;PickPerfect&quot; in the subject line if you want a faster reply. </p></div>`);
          } else {
            return [
              createVNode("h2", null, "What PickPerfect stores on your device"),
              createVNode("p", null, [
                createTextVNode(" PickPerfect saves a small amount of local data so the extension works the way you expect each time you open it. That data lives in "),
                createVNode("code", null, "chrome.storage.local"),
                createTextVNode(" on your device. ")
              ]),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("strong", null, "Color history"),
                  createTextVNode(" for the last 20 colors you picked, including the value and timestamp ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Format preference"),
                  createTextVNode(" so the popup remembers whether you prefer HEX, RGB, or HSL ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Premium status"),
                  createTextVNode(" so paid features unlock quickly without re-checking on every open ")
                ])
              ]),
              createVNode("p", null, " PickPerfect does not send this data to us. The only exception is premium verification through ExtensionPay, which is covered below. "),
              createVNode("h2", null, "What PickPerfect collects"),
              createVNode("p", null, " PickPerfect does not collect personal data, usage analytics, telemetry, or tracking identifiers. If you use the free extension and never buy premium, there is nothing being sent to our server because there is no server involved in the core workflow. "),
              createVNode("h2", null, "Why the extension asks for permissions"),
              createVNode("p", null, "PickPerfect asks for a narrow set of Chrome permissions for specific features."),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("strong", null, "storage"),
                  createTextVNode(" keeps your color history, format choice, and premium status on your device ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "activeTab"),
                  createTextVNode(" is used only when you run page palette extraction on the current page ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "scripting"),
                  createTextVNode(" injects the one-time extraction script for that palette feature and nothing more ")
                ])
              ]),
              createVNode("p", null, " The main color picker uses the browser's native EyeDropper API. It does not need a persistent content script, and it does not read arbitrary page content in the background. "),
              createVNode("h2", null, "Premium features"),
              createVNode("p", null, " Premium access is a one-time purchase. The paid features still run locally inside the extension. "),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("strong", null, "WCAG Contrast Checker"),
                  createTextVNode(" runs locally in the popup")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Tailwind Color Mapping"),
                  createTextVNode(" runs locally in the popup")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Page Palette Extraction"),
                  createTextVNode(" reads visible CSS color values from the current tab when you explicitly click the extraction button ")
                ])
              ]),
              createVNode("p", null, " That extraction flow does not read your form submissions, cookies, or browsing history. It only analyzes color values needed to build the page palette. "),
              createVNode("h2", null, "Third-party services"),
              createVNode("p", null, [
                createTextVNode(" PickPerfect uses "),
                createVNode("strong", null, "ExtensionPay"),
                createTextVNode(" for premium checkout and license verification. ExtensionPay may use Stripe to process payments. You can read their privacy policy here: "),
                createVNode("a", {
                  href: "https://extensionpay.com/privacy",
                  target: "_blank"
                }, "extensionpay.com/privacy"),
                createTextVNode(". ")
              ]),
              createVNode("p", null, " Outside of payments, PickPerfect does not use analytics tools, ad networks, or hidden third-party scripts. "),
              createVNode("h2", null, "What PickPerfect does not do"),
              createVNode("p", null, " PickPerfect does not track you, profile you, sell your data, or run passive monitoring in the background. It does not read your browsing history, and it does not keep a persistent content script attached to pages. "),
              createVNode("h2", null, "Changes to this policy"),
              createVNode("p", null, " If we update this policy, the revised version will be published at the same URL with a new date at the top of the page. "),
              createVNode("div", { class: "policy-contact rounded-xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/70" }, [
                createVNode("p", { class: "text-sm font-semibold text-slate-950 dark:text-white" }, "Contact"),
                createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300" }, [
                  createTextVNode(" If you have a privacy question about PickPerfect, send it to "),
                  createVNode("a", { href: "mailto:5797565@gmail.com" }, "5797565@gmail.com"),
                  createTextVNode(' and include "PickPerfect" in the subject line if you want a faster reply. ')
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pickperfect/policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=policy-Be2OkSOr.mjs.map
