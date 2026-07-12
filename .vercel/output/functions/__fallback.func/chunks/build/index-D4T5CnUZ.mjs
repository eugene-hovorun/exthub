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

const title = "LocateX - Smart XPath, CSS & DOM Inspector";
const description = "Inspect live elements, generate stable XPath and CSS selectors, validate them instantly, and build reusable locator templates without DevTools chaos.";
const chromeWebStoreUrl = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        icon: "i-lucide-scan-search",
        title: "Live Element Inspection",
        description: "Inspect real elements on the active page and capture the DOM structure, text, attributes, and selector signals that actually matter."
      },
      {
        icon: "i-lucide-waypoints",
        title: "XPath and CSS Generation",
        description: "Generate multiple locator candidates from the same element, compare them side by side, and keep the selector strategy that fits your test stack best."
      },
      {
        icon: "i-lucide-badge-check",
        title: "Live Selector Validation",
        description: "Validate XPath and CSS selectors against the current page instantly, see match counts, and catch fragile or over-broad locators before reuse."
      },
      {
        icon: "i-lucide-copy-check",
        title: "Framework-Ready Output",
        description: "Copy locator output in formats that fit real automation workflows, including Playwright, Cypress, Selenium, WebdriverIO, and raw selectors."
      },
      {
        icon: "i-lucide-blocks",
        title: "Locator Template Builder",
        description: "Build reusable locator templates from discovered DOM patterns instead of relying on one-off hardcoded attributes tied to a single page."
      },
      {
        icon: "i-lucide-library-big",
        title: "Saved Collections",
        description: "Keep selectors and templates organized in one place so your team can revisit, export, and reuse stable locator work across sessions."
      }
    ];
    const screenshots = [
      {
        src: "/locatex-media/screenshot_1.png",
        alt: "LocateX - live DOM inspection in the Chrome side panel"
      },
      {
        src: "/locatex-media/screenshot_2.png",
        alt: "LocateX - generated XPath and CSS selectors"
      },
      {
        src: "/locatex-media/screenshot_3.png",
        alt: "LocateX - selector validation and match counts"
      },
      {
        src: "/locatex-media/screenshot_4.png",
        alt: "LocateX - reusable locator templates and saved collection"
      }
    ];
    const metrics = [
      { value: "XPath", label: "live locator inspection" },
      { value: "CSS", label: "selector generation and validation" },
      { value: "$3", label: "one-time premium unlock" }
    ];
    const faq = [
      {
        label: "What is LocateX built for?",
        content: "LocateX is built for QA engineers, test automation engineers, and frontend developers who need a faster way to inspect elements and produce reusable selectors."
      },
      {
        label: "Can it generate both XPath and CSS selectors?",
        content: "Yes. LocateX generates both XPath and CSS locator candidates from the selected element so you can choose the cleanest or most stable option for your workflow."
      },
      {
        label: "Does selector validation run on the live page?",
        content: "Yes. LocateX validates selectors against the current active page so you can check uniqueness, match counts, and practical usability before copying them into tests."
      },
      {
        label: "What are locator templates?",
        content: "Locator templates are reusable selector patterns derived from real DOM structure and attributes. They help you create scalable fallback strategies for repeated inputs, controls, and UI blocks."
      },
      {
        label: "Which automation frameworks does it fit?",
        content: "LocateX fits common automation workflows including Playwright, Cypress, Selenium, WebdriverIO, and teams that still need direct raw XPath or CSS output."
      },
      {
        label: "Does it save my locators?",
        content: "Yes. LocateX can store saved locators and reusable templates locally inside the extension so you can search, revisit, export, and reuse them later."
      },
      {
        label: "Does it rely on hardcoded attributes?",
        content: "No. LocateX is designed to inspect the actual element and discover useful attributes, relationships, and DOM context dynamically instead of depending on a narrow hardcoded list."
      },
      {
        label: "Which browsers are supported?",
        content: "LocateX works in Chrome and Chromium-based browsers that support Manifest V3 and the side panel extension APIs used by the product."
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
        eyebrow: "Locator workflow extension",
        title,
        description,
        "chrome-web-store-url": chromeWebStoreUrl,
        "policy-path": "/locatex/policy",
        screenshots,
        features,
        faq,
        metrics,
        "feature-title": "Stable selectors, live validation, reusable templates",
        "feature-description": "LocateX turns element inspection into a structured locator workflow, so teams can move faster than copying one-off selectors out of DevTools.",
        "cta-title": "Free core inspection. Premium for $3.",
        "cta-description": "Inspect elements, generate selectors, and validate locator ideas in one workflow. Unlock saved collections, reusable templates, and premium locator utilities with a one-time purchase.",
        "accent-class": "from-sky-500/30 via-cyan-400/18 to-transparent",
        "preview-label": "Live inspection, XPath and CSS generation, selector validation, and reusable locator templates."
      }, null, _parent));
      _push(ssrRenderComponent(_component_AppGradient, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/locatex/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D4T5CnUZ.mjs.map
