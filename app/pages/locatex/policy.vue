<script setup>
const title = "LocateX - Privacy Policy";
const description =
  "LocateX does not collect, sell, or share personal data for its core inspection features. Settings, saved locators, and templates stay in extension storage.";
const updatedAt = "July 12, 2026";
const summary =
  "LocateX keeps its core workflow local. Saved locators, templates, and preferences stay in extension storage. The extension does not sell or share personal data. Premium payments go through ExtensionPay.";
const facts = [
  { label: "Data collection", value: "No personal data" },
  { label: "Storage", value: "Local extension storage" },
  { label: "Inspector access", value: "Active tab only" },
];

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});
</script>

<template>
  <PolicyPage
    :title="title"
    :description="description"
    :updated-at="updatedAt"
    :summary="summary"
    product-path="/locatex"
    :facts="facts"
  >
    <h2>What LocateX stores</h2>
    <p>
      LocateX stores the settings and workflow data you create inside the
      extension. That information is saved in <code>chrome.storage.local</code>
      on your device.
    </p>
    <ul>
      <li><strong>Theme preference</strong> for light, dark, or system mode</li>
      <li>
        <strong>Framework preference</strong> for the output style you want,
        such as Playwright, Cypress, or Selenium
      </li>
      <li>
        <strong>Saved locator collection</strong> including names, selectors,
        and timestamps
      </li>
      <li>
        <strong>Saved locator templates</strong> for reusable selector patterns
      </li>
      <li><strong>Premium status</strong> cached locally for faster access</li>
    </ul>
    <p>
      LocateX uses that data to support the locator workflow. It is not sent to
      us unless premium verification needs to talk to ExtensionPay.
    </p>

    <h2>What LocateX collects</h2>
    <p>
      LocateX does not collect personal data, browsing history, analytics,
      telemetry, or advertising identifiers for the core product.
    </p>

    <h2>Why LocateX needs permissions</h2>
    <p>LocateX needs a few Chrome permissions because it works directly with the page you choose to inspect.</p>
    <ul>
      <li>
        <strong>storage</strong> keeps preferences, saved locators, templates,
        and premium state locally
      </li>
      <li>
        <strong>activeTab</strong> lets the extension inspect the page you
        explicitly selected
      </li>
      <li>
        <strong>scripting</strong> runs inspection and validation logic inside
        that active tab on demand
      </li>
      <li>
        <strong>sidePanel</strong> powers the main LocateX interface inside
        Chrome's side panel
      </li>
    </ul>
    <p>
      These permissions are not used for passive monitoring. LocateX only reads
      page structure when you start inspection, generate locators, or validate
      selectors yourself.
    </p>

    <h2>How page inspection works</h2>
    <p>
      When you inspect an element or validate a selector, LocateX runs its own
      logic in the active tab for that session. It may read DOM structure,
      element attributes, and selector match counts so it can show you stable
      CSS and XPath options.
    </p>
    <p>
      That workflow is user-initiated. It is not a background scraper, and it
      is not used for ad targeting or unrelated page surveillance.
    </p>

    <h2>Premium features</h2>
    <p>
      Premium adds more workflow tools, but they still stay local to the
      extension.
    </p>
    <ul>
      <li>
        <strong>Framework output</strong> for Playwright, Cypress, Selenium,
        WebdriverIO, and raw selector use
      </li>
      <li>
        <strong>Saved locator collection tools</strong> for search, rename,
        import, and export
      </li>
      <li>
        <strong>Unlimited saved templates</strong> for reusable locator
        patterns
      </li>
    </ul>
    <p>
      The premium flow still does not depend on a remote locator database. The
      only external service involved is ExtensionPay for payment and license
      verification.
    </p>

    <h2>Third-party services</h2>
    <p>
      LocateX uses <strong>ExtensionPay</strong> for checkout and premium
      verification. ExtensionPay may process payments through Stripe. Their
      privacy policy is here:
      <a href="https://extensionpay.com/privacy" target="_blank">extensionpay.com/privacy</a>.
    </p>
    <p>
      LocateX does not include analytics services, advertising SDKs, or remote
      tracking layers in the core extension workflow.
    </p>

    <h2>What LocateX does not do</h2>
    <p>
      LocateX does not sell personal data, track your browsing history, or keep
      remote copies of your saved locators and templates. It also does not
      monitor arbitrary tabs unless you intentionally use the inspector on them.
    </p>

    <h2>Changes to this policy</h2>
    <p>
      If this policy changes, the updated version will stay at this URL and the
      date at the top of the page will be updated.
    </p>

    <div class="policy-contact mt-8 rounded-xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/70">
      <p class="text-sm font-semibold text-slate-950 dark:text-white">Contact</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        If you have a privacy question about LocateX, email
        <a href="mailto:5797565@gmail.com">5797565@gmail.com</a>.
        Adding "LocateX" to the subject line helps us answer the right thing faster.
      </p>
    </div>
  </PolicyPage>
</template>
