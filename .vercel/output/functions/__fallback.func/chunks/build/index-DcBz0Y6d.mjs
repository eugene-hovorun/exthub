import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './gradient-RBBYd1C3.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { b as useSeoMeta, u as useHead } from './server.mjs';
import 'embla-carousel-vue';
import 'reka-ui';
import '@vueuse/core';
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

const title = "FormForge - Smart Form Filler for Developers";
const description = "One-click realistic fake data for any form. Smart field detection, locale-aware generation, custom profiles. Built for localhost, works everywhere.";
const chromeWebStoreUrl = "https://chromewebstore.google.com/detail/formforge/ikaabnpjebjfenfnpnifmbijmloagiff";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        icon: "i-lucide-scan-search",
        title: "Smart Field Detection",
        description: "Detects first name, last name, email, phone, address, company, and more using autocomplete attributes, field names, labels, and placeholders. No configuration needed."
      },
      {
        icon: "i-lucide-user-check",
        title: "Coherent Identities",
        description: "Generates a complete, realistic person for each fill - not random junk in every field. Name, email, username, and URL all match the same identity."
      },
      {
        icon: "i-lucide-globe",
        title: "7 Locales",
        description: "Native names, real street patterns, local phone formats, and regional companies for English (US/UK), Deutsch, Polski, Українська, Français, and 日本語."
      },
      {
        icon: "i-lucide-keyboard",
        title: "Keyboard Shortcuts",
        description: "Alt+F to fill, Alt+Shift+F to clear. No popup needed. Customizable via chrome://extensions/shortcuts. Designed for rapid form testing workflows."
      },
      {
        icon: "i-lucide-user-cog",
        title: "Custom Profiles",
        description: "Pin specific values like your test email or company name while randomizing everything else. Save multiple profiles and switch between them instantly."
      },
      {
        icon: "i-lucide-shield",
        title: "Privacy First",
        description: "No data collection. No analytics. No network requests except license validation. All data generation happens locally in your browser."
      }
    ];
    const screenshots = [
      {
        src: "/formforge/screenshot_1.png",
        alt: "FormForge - Popup with filled form fields highlighted in green"
      },
      {
        src: "/formforge/screenshot_2.png",
        alt: "FormForge - Custom profile editor with field overrides"
      },
      {
        src: "/formforge/screenshot_3.png",
        alt: "FormForge - Multiple locale options for international form testing"
      }
    ];
    const metrics = [
      { value: "7", label: "supported locales" },
      { value: "Alt+F", label: "instant fill shortcut" },
      { value: "$2.99", label: "one-time pro unlock" }
    ];
    const faq = [
      {
        label: "Is FormForge free?",
        content: "Yes! The core form filler with English (US) locale is completely free. Custom profiles, field overrides, and 6 additional locales are a one-time $2.99 purchase. No subscriptions."
      },
      {
        label: "Does it collect any data?",
        content: "No. FormForge runs entirely in your browser. All fake data is generated locally and never sent to any server. The only network request is license verification via ExtensionPay. See our privacy policy for full details."
      },
      {
        label: "How does it detect form fields?",
        content: "FormForge checks autocomplete attributes first (highest confidence), then field names and IDs, then associated label text, then placeholder text, and finally input types. It handles inputs, selects, textareas, checkboxes, and radio groups."
      },
      {
        label: "Does it work with React / Vue / Angular?",
        content: "Yes. FormForge uses native value setters and dispatches input, change, and blur events so framework-controlled forms update their state correctly. Works with React synthetic events, Vue v-model, Angular forms, and plain HTML."
      },
      {
        label: "Does it work on localhost?",
        content: "Yes, and that's the primary use case. FormForge uses the activeTab permission so it works on any page you're viewing - localhost, staging, production, or any other URL."
      },
      {
        label: "Can I fill forms with specific values?",
        content: "Yes, with Pro profiles. Create a profile, open the custom fields editor, and pin any values you want (e.g., always use your test email). All other fields will still be randomized. You can create multiple profiles for different testing scenarios."
      },
      {
        label: "Does it fill password fields?",
        content: "No. Password fields are intentionally skipped - developers typically have specific test passwords or use password managers. FormForge focuses on data fields where random realistic values are useful."
      },
      {
        label: "Which browsers are supported?",
        content: "FormForge works in Chrome and Chromium-based browsers (Edge, Brave, Arc, etc.) that support Manifest V3 extensions."
      }
    ];
    useSeoMeta({
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      twitterCard: "summary_large_image"
    });
    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.label,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.content
              }
            }))
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ExtensionLanding = __nuxt_component_0;
      const _component_AppGradient = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ExtensionLanding, {
        eyebrow: "Form testing extension",
        title,
        description,
        "chrome-web-store-url": chromeWebStoreUrl,
        "policy-path": "/formforge/policy",
        screenshots,
        features,
        faq,
        metrics,
        "feature-title": "Stop typing test@test.com into every form",
        "feature-description": "FormForge turns repetitive form testing into a one-click workflow, with realistic identities, locale-aware data, and profile-based control.",
        "cta-title": "Free core filler. Pro for $2.99.",
        "cta-description": "Smart form filling with English (US) is free. Unlock 7 locales, custom profiles, field overrides, and faster testing workflows with a one-time purchase.",
        "accent-class": "from-amber-500/28 via-orange-400/14 to-transparent",
        "preview-label": "Smart field detection, realistic profiles, locale-aware data, and shortcuts."
      }, null, _parent));
      _push(ssrRenderComponent(_component_AppGradient, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/formforge/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DcBz0Y6d.mjs.map
