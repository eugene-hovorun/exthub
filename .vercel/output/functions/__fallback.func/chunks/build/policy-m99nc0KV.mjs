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

const title = "DevPulse - Privacy Policy";
const description = "DevPulse does not collect, transmit, or share any personal data. All performance metrics stay on your device.";
const updatedAt = "February 13, 2026";
const summary = "DevPulse computes its metrics inside your browser and keeps them there. The extension does not collect personal data or analytics. Premium payments go through ExtensionPay.";
const _sfc_main = {
  __name: "policy",
  __ssrInlineRender: true,
  setup(__props) {
    const facts = [
      { label: "Data collection", value: "None" },
      { label: "Metrics", value: "Computed locally" },
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
        "product-path": "/devpulse",
        facts
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>What DevPulse stores</h2><p${_scopeId}> DevPulse stores a few settings so the HUD behaves consistently across sessions. Those settings stay in browser storage on your device. </p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>HUD position and collapsed state</strong> so the overlay can reopen where you left it </li><li${_scopeId}><strong${_scopeId}>Theme preference</strong> for dark, light, or system mode </li><li${_scopeId}><strong${_scopeId}>HUD active state</strong> for localhost auto-restore during development </li><li${_scopeId}><strong${_scopeId}>Premium status</strong> cached in <code${_scopeId}>chrome.storage.local</code> for faster startup </li></ul><p${_scopeId}> None of that data is sent to us. It stays inside your browser unless premium verification needs to talk to ExtensionPay. </p><h2${_scopeId}>What DevPulse collects</h2><p${_scopeId}> DevPulse does not collect personal data, analytics, telemetry, or usage tracking. FPS, DOM count, memory, Web Vitals, and network metrics are calculated in the active browser tab and are not uploaded anywhere. </p><h2${_scopeId}>Why DevPulse needs permissions</h2><p${_scopeId}>DevPulse asks for only the permissions required to place the HUD on the page and save its state.</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>activeTab</strong> lets the extension inject the HUD into the tab you choose </li><li${_scopeId}><strong${_scopeId}>scripting</strong> runs the overlay code on that page </li><li${_scopeId}><strong${_scopeId}>storage</strong> keeps premium status locally </li></ul><p${_scopeId}> DevPulse does not use <code${_scopeId}>&lt;all_urls&gt;</code>. It cannot inspect or modify arbitrary pages unless you actively turn it on. The one exception is localhost and 127.0.0.1, where a small helper script supports HUD persistence during development. </p><h2${_scopeId}>Premium features</h2><p${_scopeId}> Premium is a one-time purchase. The unlocked metrics still run locally in the browser tab where the HUD is active. </p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Memory monitoring</strong> reads the browser&#39;s own performance APIs</li><li${_scopeId}><strong${_scopeId}>Long task detection</strong> uses <code${_scopeId}>PerformanceObserver</code></li><li${_scopeId}><strong${_scopeId}>Network overview</strong> reads local resource timing entries</li><li${_scopeId}><strong${_scopeId}>Core Web Vitals</strong> are measured with native web APIs</li><li${_scopeId}><strong${_scopeId}>JSON export</strong> downloads a snapshot directly to your device</li></ul><p${_scopeId}> DevPulse does not stream those metrics to a remote backend. They stay in the page context where they were measured. </p><h2${_scopeId}>Third-party services</h2><p${_scopeId}> DevPulse uses <strong${_scopeId}>ExtensionPay</strong> for checkout and license verification. ExtensionPay may process payments through Stripe. Their privacy policy is here: <a href="https://extensionpay.com/privacy" target="_blank"${_scopeId}>extensionpay.com/privacy</a>. </p><p${_scopeId}> There are no ad networks, analytics SDKs, or extra tracking services in the extension. </p><h2${_scopeId}>What DevPulse does not do</h2><p${_scopeId}> DevPulse does not monitor your browsing history, read your form entries, capture passwords, or run persistent background tracking on ordinary websites. Outside of payment verification for premium users, it does not make hidden network requests on its own. </p><h2${_scopeId}>Changes to this policy</h2><p${_scopeId}> If this policy changes, the updated version will stay at this URL and the date at the top of the page will be updated. </p><div class="policy-contact rounded-xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/70"${_scopeId}><p class="text-sm font-semibold text-slate-950 dark:text-white"${_scopeId}>Contact</p><p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300"${_scopeId}> If you have a privacy question about DevPulse, email <a href="mailto:5797565@gmail.com"${_scopeId}>5797565@gmail.com</a>. Adding &quot;DevPulse&quot; to the subject line helps us route it faster. </p></div>`);
          } else {
            return [
              createVNode("h2", null, "What DevPulse stores"),
              createVNode("p", null, " DevPulse stores a few settings so the HUD behaves consistently across sessions. Those settings stay in browser storage on your device. "),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("strong", null, "HUD position and collapsed state"),
                  createTextVNode(" so the overlay can reopen where you left it ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Theme preference"),
                  createTextVNode(" for dark, light, or system mode ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "HUD active state"),
                  createTextVNode(" for localhost auto-restore during development ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Premium status"),
                  createTextVNode(" cached in "),
                  createVNode("code", null, "chrome.storage.local"),
                  createTextVNode(" for faster startup ")
                ])
              ]),
              createVNode("p", null, " None of that data is sent to us. It stays inside your browser unless premium verification needs to talk to ExtensionPay. "),
              createVNode("h2", null, "What DevPulse collects"),
              createVNode("p", null, " DevPulse does not collect personal data, analytics, telemetry, or usage tracking. FPS, DOM count, memory, Web Vitals, and network metrics are calculated in the active browser tab and are not uploaded anywhere. "),
              createVNode("h2", null, "Why DevPulse needs permissions"),
              createVNode("p", null, "DevPulse asks for only the permissions required to place the HUD on the page and save its state."),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("strong", null, "activeTab"),
                  createTextVNode(" lets the extension inject the HUD into the tab you choose ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "scripting"),
                  createTextVNode(" runs the overlay code on that page ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "storage"),
                  createTextVNode(" keeps premium status locally ")
                ])
              ]),
              createVNode("p", null, [
                createTextVNode(" DevPulse does not use "),
                createVNode("code", null, "<all_urls>"),
                createTextVNode(". It cannot inspect or modify arbitrary pages unless you actively turn it on. The one exception is localhost and 127.0.0.1, where a small helper script supports HUD persistence during development. ")
              ]),
              createVNode("h2", null, "Premium features"),
              createVNode("p", null, " Premium is a one-time purchase. The unlocked metrics still run locally in the browser tab where the HUD is active. "),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("strong", null, "Memory monitoring"),
                  createTextVNode(" reads the browser's own performance APIs")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Long task detection"),
                  createTextVNode(" uses "),
                  createVNode("code", null, "PerformanceObserver")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Network overview"),
                  createTextVNode(" reads local resource timing entries")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Core Web Vitals"),
                  createTextVNode(" are measured with native web APIs")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "JSON export"),
                  createTextVNode(" downloads a snapshot directly to your device")
                ])
              ]),
              createVNode("p", null, " DevPulse does not stream those metrics to a remote backend. They stay in the page context where they were measured. "),
              createVNode("h2", null, "Third-party services"),
              createVNode("p", null, [
                createTextVNode(" DevPulse uses "),
                createVNode("strong", null, "ExtensionPay"),
                createTextVNode(" for checkout and license verification. ExtensionPay may process payments through Stripe. Their privacy policy is here: "),
                createVNode("a", {
                  href: "https://extensionpay.com/privacy",
                  target: "_blank"
                }, "extensionpay.com/privacy"),
                createTextVNode(". ")
              ]),
              createVNode("p", null, " There are no ad networks, analytics SDKs, or extra tracking services in the extension. "),
              createVNode("h2", null, "What DevPulse does not do"),
              createVNode("p", null, " DevPulse does not monitor your browsing history, read your form entries, capture passwords, or run persistent background tracking on ordinary websites. Outside of payment verification for premium users, it does not make hidden network requests on its own. "),
              createVNode("h2", null, "Changes to this policy"),
              createVNode("p", null, " If this policy changes, the updated version will stay at this URL and the date at the top of the page will be updated. "),
              createVNode("div", { class: "policy-contact rounded-xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/70" }, [
                createVNode("p", { class: "text-sm font-semibold text-slate-950 dark:text-white" }, "Contact"),
                createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300" }, [
                  createTextVNode(" If you have a privacy question about DevPulse, email "),
                  createVNode("a", { href: "mailto:5797565@gmail.com" }, "5797565@gmail.com"),
                  createTextVNode('. Adding "DevPulse" to the subject line helps us route it faster. ')
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/devpulse/policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=policy-m99nc0KV.mjs.map
