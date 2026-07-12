<script setup>
const title = "FormForge - Privacy Policy";
const description =
  "FormForge does not collect, transmit, or share any personal data. All fake data is generated locally in your browser.";
const updatedAt = "February 14, 2026";
const summary =
  "FormForge generates data in your browser and keeps it there. The extension does not collect personal information or analytics. Premium payments go through ExtensionPay.";
const facts = [
  { label: "Data collection", value: "None" },
  { label: "Generation", value: "Local browser only" },
  { label: "Payments", value: "ExtensionPay only" },
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
    product-path="/formforge"
    :facts="facts"
  >
    <h2>What FormForge stores</h2>
    <p>
      FormForge stores the settings and profiles you create so the extension can
      fill forms the way you expect. That information stays in browser storage
      on your device.
    </p>
    <ul>
      <li>
        <strong>Profiles</strong> including locale choice and any pinned field
        overrides you saved
      </li>
      <li>
        <strong>Active profile selection</strong> so the extension knows which
        profile you want to use
      </li>
      <li>
        <strong>Premium status</strong> cached locally for faster startup
      </li>
    </ul>
    <p>
      FormForge does not upload those profiles to us. The only outside service
      involved is ExtensionPay for premium verification.
    </p>

    <h2>What FormForge collects</h2>
    <p>
      FormForge does not collect personal data, analytics, telemetry, or hidden
      usage logs. The fake data it generates is created locally in your browser
      from bundled datasets and filled directly into the page you are working on.
    </p>

    <h2>Why FormForge needs permissions</h2>
    <p>FormForge asks for a limited set of Chrome permissions because it needs to inspect fields and fill them on demand.</p>
    <ul>
      <li>
        <strong>activeTab</strong> lets the extension work on the page you
        explicitly target
      </li>
      <li>
        <strong>scripting</strong> runs the field detection and fill logic in
        that active tab
      </li>
      <li>
        <strong>storage</strong> keeps your profiles, preferences, and premium
        state locally
      </li>
    </ul>
    <p>
      FormForge does not use <code>&lt;all_urls&gt;</code>, and it does not run
      content scripts across the web unless you trigger the extension yourself.
    </p>

    <h2>Premium features</h2>
    <p>
      Premium is a one-time upgrade. The extra features still run locally.
    </p>
    <ul>
      <li><strong>Custom profiles</strong> let you save repeatable fill setups</li>
      <li>
        <strong>Additional locales</strong> are bundled with the extension, so
        they do not require network requests
      </li>
      <li>
        <strong>Per-profile locale switching</strong> lets each saved profile
        use a different locale
      </li>
    </ul>
    <p>
      FormForge does not send generated names, emails, addresses, or phone
      numbers to our servers. The generation happens inside your browser.
    </p>

    <h2>Third-party services</h2>
    <p>
      FormForge uses <strong>ExtensionPay</strong> for checkout and premium
      verification. ExtensionPay may process payments through Stripe. Their
      privacy policy is here:
      <a href="https://extensionpay.com/privacy" target="_blank">extensionpay.com/privacy</a>.
    </p>
    <p>
      FormForge does not include analytics SDKs, advertising scripts, or other
      third-party tracking tools.
    </p>

    <h2>What FormForge does not do</h2>
    <p>
      FormForge does not read your browsing history, collect telemetry, or
      silently scrape arbitrary pages. It also does not target password
      workflows or run persistent page scripts without user action.
    </p>

    <h2>Changes to this policy</h2>
    <p>
      If this policy changes, the latest version will stay at this URL and the
      update date will change at the top of the page.
    </p>

    <div class="policy-contact mt-8 rounded-xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/70">
      <p class="text-sm font-semibold text-slate-950 dark:text-white">Contact</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        If you have a privacy question about FormForge, email
        <a href="mailto:nickolay.dev@gmail.com">nickolay.dev@gmail.com</a>.
        Including "FormForge" in the subject line makes it easier to triage.
      </p>
    </div>
  </PolicyPage>
</template>
