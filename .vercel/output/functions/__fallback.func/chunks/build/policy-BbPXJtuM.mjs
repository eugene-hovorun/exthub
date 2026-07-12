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

const title = "LocateX - Privacy Policy";
const description = "LocateX does not collect, sell, or share personal data for its core inspection features. Settings, saved locators, and templates stay in extension storage.";
const updatedAt = "July 12, 2026";
const summary = "LocateX keeps its core workflow local. Saved locators, templates, and preferences stay in extension storage. The extension does not sell or share personal data. Premium payments go through ExtensionPay.";
const _sfc_main = {
  __name: "policy",
  __ssrInlineRender: true,
  setup(__props) {
    const facts = [
      { label: "Data collection", value: "No personal data" },
      { label: "Storage", value: "Local extension storage" },
      { label: "Inspector access", value: "Active tab only" }
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
        "product-path": "/locatex",
        facts
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>What LocateX stores</h2><p${_scopeId}> LocateX stores the settings and workflow data you create inside the extension. That information is saved in <code${_scopeId}>chrome.storage.local</code> on your device. </p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Theme preference</strong> for light, dark, or system mode</li><li${_scopeId}><strong${_scopeId}>Framework preference</strong> for the output style you want, such as Playwright, Cypress, or Selenium </li><li${_scopeId}><strong${_scopeId}>Saved locator collection</strong> including names, selectors, and timestamps </li><li${_scopeId}><strong${_scopeId}>Saved locator templates</strong> for reusable selector patterns </li><li${_scopeId}><strong${_scopeId}>Premium status</strong> cached locally for faster access</li></ul><p${_scopeId}> LocateX uses that data to support the locator workflow. It is not sent to us unless premium verification needs to talk to ExtensionPay. </p><h2${_scopeId}>What LocateX collects</h2><p${_scopeId}> LocateX does not collect personal data, browsing history, analytics, telemetry, or advertising identifiers for the core product. </p><h2${_scopeId}>Why LocateX needs permissions</h2><p${_scopeId}>LocateX needs a few Chrome permissions because it works directly with the page you choose to inspect.</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>storage</strong> keeps preferences, saved locators, templates, and premium state locally </li><li${_scopeId}><strong${_scopeId}>activeTab</strong> lets the extension inspect the page you explicitly selected </li><li${_scopeId}><strong${_scopeId}>scripting</strong> runs inspection and validation logic inside that active tab on demand </li><li${_scopeId}><strong${_scopeId}>sidePanel</strong> powers the main LocateX interface inside Chrome&#39;s side panel </li></ul><p${_scopeId}> These permissions are not used for passive monitoring. LocateX only reads page structure when you start inspection, generate locators, or validate selectors yourself. </p><h2${_scopeId}>How page inspection works</h2><p${_scopeId}> When you inspect an element or validate a selector, LocateX runs its own logic in the active tab for that session. It may read DOM structure, element attributes, and selector match counts so it can show you stable CSS and XPath options. </p><p${_scopeId}> That workflow is user-initiated. It is not a background scraper, and it is not used for ad targeting or unrelated page surveillance. </p><h2${_scopeId}>Premium features</h2><p${_scopeId}> Premium adds more workflow tools, but they still stay local to the extension. </p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>Framework output</strong> for Playwright, Cypress, Selenium, WebdriverIO, and raw selector use </li><li${_scopeId}><strong${_scopeId}>Saved locator collection tools</strong> for search, rename, import, and export </li><li${_scopeId}><strong${_scopeId}>Unlimited saved templates</strong> for reusable locator patterns </li></ul><p${_scopeId}> The premium flow still does not depend on a remote locator database. The only external service involved is ExtensionPay for payment and license verification. </p><h2${_scopeId}>Third-party services</h2><p${_scopeId}> LocateX uses <strong${_scopeId}>ExtensionPay</strong> for checkout and premium verification. ExtensionPay may process payments through Stripe. Their privacy policy is here: <a href="https://extensionpay.com/privacy" target="_blank"${_scopeId}>extensionpay.com/privacy</a>. </p><p${_scopeId}> LocateX does not include analytics services, advertising SDKs, or remote tracking layers in the core extension workflow. </p><h2${_scopeId}>What LocateX does not do</h2><p${_scopeId}> LocateX does not sell personal data, track your browsing history, or keep remote copies of your saved locators and templates. It also does not monitor arbitrary tabs unless you intentionally use the inspector on them. </p><h2${_scopeId}>Changes to this policy</h2><p${_scopeId}> If this policy changes, the updated version will stay at this URL and the date at the top of the page will be updated. </p><div class="policy-contact rounded-xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/70"${_scopeId}><p class="text-sm font-semibold text-slate-950 dark:text-white"${_scopeId}>Contact</p><p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300"${_scopeId}> If you have a privacy question about LocateX, email <a href="mailto:5797565@gmail.com"${_scopeId}>5797565@gmail.com</a>. Adding &quot;LocateX&quot; to the subject line helps us answer the right thing faster. </p></div>`);
          } else {
            return [
              createVNode("h2", null, "What LocateX stores"),
              createVNode("p", null, [
                createTextVNode(" LocateX stores the settings and workflow data you create inside the extension. That information is saved in "),
                createVNode("code", null, "chrome.storage.local"),
                createTextVNode(" on your device. ")
              ]),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("strong", null, "Theme preference"),
                  createTextVNode(" for light, dark, or system mode")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Framework preference"),
                  createTextVNode(" for the output style you want, such as Playwright, Cypress, or Selenium ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Saved locator collection"),
                  createTextVNode(" including names, selectors, and timestamps ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Saved locator templates"),
                  createTextVNode(" for reusable selector patterns ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Premium status"),
                  createTextVNode(" cached locally for faster access")
                ])
              ]),
              createVNode("p", null, " LocateX uses that data to support the locator workflow. It is not sent to us unless premium verification needs to talk to ExtensionPay. "),
              createVNode("h2", null, "What LocateX collects"),
              createVNode("p", null, " LocateX does not collect personal data, browsing history, analytics, telemetry, or advertising identifiers for the core product. "),
              createVNode("h2", null, "Why LocateX needs permissions"),
              createVNode("p", null, "LocateX needs a few Chrome permissions because it works directly with the page you choose to inspect."),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("strong", null, "storage"),
                  createTextVNode(" keeps preferences, saved locators, templates, and premium state locally ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "activeTab"),
                  createTextVNode(" lets the extension inspect the page you explicitly selected ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "scripting"),
                  createTextVNode(" runs inspection and validation logic inside that active tab on demand ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "sidePanel"),
                  createTextVNode(" powers the main LocateX interface inside Chrome's side panel ")
                ])
              ]),
              createVNode("p", null, " These permissions are not used for passive monitoring. LocateX only reads page structure when you start inspection, generate locators, or validate selectors yourself. "),
              createVNode("h2", null, "How page inspection works"),
              createVNode("p", null, " When you inspect an element or validate a selector, LocateX runs its own logic in the active tab for that session. It may read DOM structure, element attributes, and selector match counts so it can show you stable CSS and XPath options. "),
              createVNode("p", null, " That workflow is user-initiated. It is not a background scraper, and it is not used for ad targeting or unrelated page surveillance. "),
              createVNode("h2", null, "Premium features"),
              createVNode("p", null, " Premium adds more workflow tools, but they still stay local to the extension. "),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("strong", null, "Framework output"),
                  createTextVNode(" for Playwright, Cypress, Selenium, WebdriverIO, and raw selector use ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Saved locator collection tools"),
                  createTextVNode(" for search, rename, import, and export ")
                ]),
                createVNode("li", null, [
                  createVNode("strong", null, "Unlimited saved templates"),
                  createTextVNode(" for reusable locator patterns ")
                ])
              ]),
              createVNode("p", null, " The premium flow still does not depend on a remote locator database. The only external service involved is ExtensionPay for payment and license verification. "),
              createVNode("h2", null, "Third-party services"),
              createVNode("p", null, [
                createTextVNode(" LocateX uses "),
                createVNode("strong", null, "ExtensionPay"),
                createTextVNode(" for checkout and premium verification. ExtensionPay may process payments through Stripe. Their privacy policy is here: "),
                createVNode("a", {
                  href: "https://extensionpay.com/privacy",
                  target: "_blank"
                }, "extensionpay.com/privacy"),
                createTextVNode(". ")
              ]),
              createVNode("p", null, " LocateX does not include analytics services, advertising SDKs, or remote tracking layers in the core extension workflow. "),
              createVNode("h2", null, "What LocateX does not do"),
              createVNode("p", null, " LocateX does not sell personal data, track your browsing history, or keep remote copies of your saved locators and templates. It also does not monitor arbitrary tabs unless you intentionally use the inspector on them. "),
              createVNode("h2", null, "Changes to this policy"),
              createVNode("p", null, " If this policy changes, the updated version will stay at this URL and the date at the top of the page will be updated. "),
              createVNode("div", { class: "policy-contact rounded-xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/70" }, [
                createVNode("p", { class: "text-sm font-semibold text-slate-950 dark:text-white" }, "Contact"),
                createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300" }, [
                  createTextVNode(" If you have a privacy question about LocateX, email "),
                  createVNode("a", { href: "mailto:5797565@gmail.com" }, "5797565@gmail.com"),
                  createTextVNode('. Adding "LocateX" to the subject line helps us answer the right thing faster. ')
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/locatex/policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=policy-BbPXJtuM.mjs.map
