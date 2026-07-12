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

const title = "FormForge - Privacy Policy";
const description = "FormForge does not collect, transmit, or share any personal data. All fake data is generated locally in your browser.";
const updatedAt = "February 14, 2026";
const summary = "FormForge generates data in your browser and keeps it there. The extension does not collect personal information or analytics. Premium payments go through ExtensionPay.";
const _sfc_main = {
  __name: "policy",
  __ssrInlineRender: true,
  setup(__props) {
    const facts = [
      { label: "Data collection", value: "None" },
      { label: "Generation", value: "Local browser only" },
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
        "product-path": "/formforge",
        facts
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>What FormForge stores</h2><p${_scopeId}> FormForge stores the settings and profiles you create so the extension can fill forms the way you expect. That information stays in browser storage on your device. </p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Profiles</strong> including locale choice and any pinned field overrides you saved </li><li${_scopeId}><strong${_scopeId}>Active profile selection</strong> so the extension knows which profile you want to use </li><li${_scopeId}><strong${_scopeId}>Premium status</strong> cached locally for faster startup </li></ul><p${_scopeId}> FormForge does not upload those profiles to us. The only outside service involved is ExtensionPay for premium verification. </p><h2${_scopeId}>What FormForge collects</h2><p${_scopeId}> FormForge does not collect personal data, analytics, telemetry, or hidden usage logs. The fake data it generates is created locally in your browser from bundled datasets and filled directly into the page you are working on. </p><h2${_scopeId}>Why FormForge needs permissions</h2><p${_scopeId}>FormForge asks for a limited set of Chrome permissions because it needs to inspect fields and fill them on demand.</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>activeTab</strong> lets the extension work on the page you explicitly target </li><li${_scopeId}><strong${_scopeId}>scripting</strong> runs the field detection and fill logic in that active tab </li><li${_scopeId}><strong${_scopeId}>storage</strong> keeps your profiles, preferences, and premium state locally </li></ul><p${_scopeId}> FormForge does not use <code${_scopeId}>&lt;all_urls&gt;</code>, and it does not run content scripts across the web unless you trigger the extension yourself. </p><h2${_scopeId}>Premium features</h2><p${_scopeId}> Premium is a one-time upgrade. The extra features still run locally. </p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Custom profiles</strong> let you save repeatable fill setups</li><li${_scopeId}><strong${_scopeId}>Additional locales</strong> are bundled with the extension, so they do not require network requests </li><li${_scopeId}><strong${_scopeId}>Per-profile locale switching</strong> lets each saved profile use a different locale </li></ul><p${_scopeId}> FormForge does not send generated names, emails, addresses, or phone numbers to our servers. The generation happens inside your browser. </p><h2${_scopeId}>Third-party services</h2><p${_scopeId}> FormForge uses <strong${_scopeId}>ExtensionPay</strong> for checkout and premium verification. ExtensionPay may process payments through Stripe. Their privacy policy is here: <a href="https://extensionpay.com/privacy" target="_blank"${_scopeId}>extensionpay.com/privacy</a>. </p><p${_scopeId}> FormForge does not include analytics SDKs, advertising scripts, or other third-party tracking tools. </p><h2${_scopeId}>What FormForge does not do</h2><p${_scopeId}> FormForge does not read your browsing history, collect telemetry, or silently scrape arbitrary pages. It also does not target password workflows or run persistent page scripts without user action. </p><h2${_scopeId}>Changes to this policy</h2><p${_scopeId}> If this policy changes, the latest version will stay at this URL and the update date will change at the top of the page. </p><div class="policy-contact rounded-xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/70"${_scopeId}><p class="text-sm font-semibold text-slate-950 dark:text-white"${_scopeId}>Contact</p><p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300"${_scopeId}> If you have a privacy question about FormForge, email <a href="mailto:nickolay.dev@gmail.com"${_scopeId}>nickolay.dev@gmail.com</a>. Including &quot;FormForge&quot; in the subject line makes it easier to triage. </p></div>`);
          } else {
            return [
              createVNode("h2", null, "What FormForge stores"),
              createVNode("p", null, " FormForge stores the settings and profiles you create so the extension can fill forms the way you expect. That information stays in browser storage on your device. "),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("strong", null, "Profiles"),
                  createTextVNode(" including locale choice and any pinned field overrides you saved ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Active profile selection"),
                  createTextVNode(" so the extension knows which profile you want to use ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Premium status"),
                  createTextVNode(" cached locally for faster startup ")
                ])
              ]),
              createVNode("p", null, " FormForge does not upload those profiles to us. The only outside service involved is ExtensionPay for premium verification. "),
              createVNode("h2", null, "What FormForge collects"),
              createVNode("p", null, " FormForge does not collect personal data, analytics, telemetry, or hidden usage logs. The fake data it generates is created locally in your browser from bundled datasets and filled directly into the page you are working on. "),
              createVNode("h2", null, "Why FormForge needs permissions"),
              createVNode("p", null, "FormForge asks for a limited set of Chrome permissions because it needs to inspect fields and fill them on demand."),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("strong", null, "activeTab"),
                  createTextVNode(" lets the extension work on the page you explicitly target ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "scripting"),
                  createTextVNode(" runs the field detection and fill logic in that active tab ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "storage"),
                  createTextVNode(" keeps your profiles, preferences, and premium state locally ")
                ])
              ]),
              createVNode("p", null, [
                createTextVNode(" FormForge does not use "),
                createVNode("code", null, "<all_urls>"),
                createTextVNode(", and it does not run content scripts across the web unless you trigger the extension yourself. ")
              ]),
              createVNode("h2", null, "Premium features"),
              createVNode("p", null, " Premium is a one-time upgrade. The extra features still run locally. "),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("strong", null, "Custom profiles"),
                  createTextVNode(" let you save repeatable fill setups")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Additional locales"),
                  createTextVNode(" are bundled with the extension, so they do not require network requests ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Per-profile locale switching"),
                  createTextVNode(" lets each saved profile use a different locale ")
                ])
              ]),
              createVNode("p", null, " FormForge does not send generated names, emails, addresses, or phone numbers to our servers. The generation happens inside your browser. "),
              createVNode("h2", null, "Third-party services"),
              createVNode("p", null, [
                createTextVNode(" FormForge uses "),
                createVNode("strong", null, "ExtensionPay"),
                createTextVNode(" for checkout and premium verification. ExtensionPay may process payments through Stripe. Their privacy policy is here: "),
                createVNode("a", {
                  href: "https://extensionpay.com/privacy",
                  target: "_blank"
                }, "extensionpay.com/privacy"),
                createTextVNode(". ")
              ]),
              createVNode("p", null, " FormForge does not include analytics SDKs, advertising scripts, or other third-party tracking tools. "),
              createVNode("h2", null, "What FormForge does not do"),
              createVNode("p", null, " FormForge does not read your browsing history, collect telemetry, or silently scrape arbitrary pages. It also does not target password workflows or run persistent page scripts without user action. "),
              createVNode("h2", null, "Changes to this policy"),
              createVNode("p", null, " If this policy changes, the latest version will stay at this URL and the update date will change at the top of the page. "),
              createVNode("div", { class: "policy-contact rounded-xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/70" }, [
                createVNode("p", { class: "text-sm font-semibold text-slate-950 dark:text-white" }, "Contact"),
                createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300" }, [
                  createTextVNode(" If you have a privacy question about FormForge, email "),
                  createVNode("a", { href: "mailto:nickolay.dev@gmail.com" }, "nickolay.dev@gmail.com"),
                  createTextVNode('. Including "FormForge" in the subject line makes it easier to triage. ')
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/formforge/policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=policy-Cn43gfKh.mjs.map
