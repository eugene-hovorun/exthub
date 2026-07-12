<script setup>
const title = "PickPerfect - Privacy Policy";
const description =
  "PickPerfect does not collect, transmit, or share any personal data. Everything stays on your device.";
const updatedAt = "February 7, 2026";
const summary =
  "PickPerfect keeps your data on your device. The extension does not collect personal information, send usage data anywhere, or run hidden tracking. Premium payments go through ExtensionPay.";
const facts = [
  { label: "Data collection", value: "None" },
  { label: "Storage", value: "Local device only" },
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
    product-path="/pickperfect"
    :facts="facts"
  >
    <h2>What PickPerfect stores on your device</h2>
    <p>
      PickPerfect saves a small amount of local data so the extension works the
      way you expect each time you open it. That data lives in
      <code>chrome.storage.local</code> on your device.
    </p>
    <ul>
      <li>
        <strong>Color history</strong> for the last 20 colors you picked,
        including the value and timestamp
      </li>
      <li>
        <strong>Format preference</strong> so the popup remembers whether you
        prefer HEX, RGB, or HSL
      </li>
      <li>
        <strong>Premium status</strong> so paid features unlock quickly without
        re-checking on every open
      </li>
    </ul>
    <p>
      PickPerfect does not send this data to us. The only exception is premium
      verification through ExtensionPay, which is covered below.
    </p>

    <h2>What PickPerfect collects</h2>
    <p>
      PickPerfect does not collect personal data, usage analytics, telemetry,
      or tracking identifiers. If you use the free extension and never buy
      premium, there is nothing being sent to our server because there is no
      server involved in the core workflow.
    </p>

    <h2>Why the extension asks for permissions</h2>
    <p>PickPerfect asks for a narrow set of Chrome permissions for specific features.</p>
    <ul>
      <li>
        <strong>storage</strong> keeps your color history, format choice, and
        premium status on your device
      </li>
      <li>
        <strong>activeTab</strong> is used only when you run page palette
        extraction on the current page
      </li>
      <li>
        <strong>scripting</strong> injects the one-time extraction script for
        that palette feature and nothing more
      </li>
    </ul>
    <p>
      The main color picker uses the browser's native EyeDropper API. It does
      not need a persistent content script, and it does not read arbitrary page
      content in the background.
    </p>

    <h2>Premium features</h2>
    <p>
      Premium access is a one-time purchase. The paid features still run
      locally inside the extension.
    </p>
    <ul>
      <li><strong>WCAG Contrast Checker</strong> runs locally in the popup</li>
      <li><strong>Tailwind Color Mapping</strong> runs locally in the popup</li>
      <li>
        <strong>Page Palette Extraction</strong> reads visible CSS color values
        from the current tab when you explicitly click the extraction button
      </li>
    </ul>
    <p>
      That extraction flow does not read your form submissions, cookies, or
      browsing history. It only analyzes color values needed to build the page
      palette.
    </p>

    <h2>Third-party services</h2>
    <p>
      PickPerfect uses <strong>ExtensionPay</strong> for premium checkout and
      license verification. ExtensionPay may use Stripe to process payments.
      You can read their privacy policy here:
      <a href="https://extensionpay.com/privacy" target="_blank">extensionpay.com/privacy</a>.
    </p>
    <p>
      Outside of payments, PickPerfect does not use analytics tools, ad
      networks, or hidden third-party scripts.
    </p>

    <h2>What PickPerfect does not do</h2>
    <p>
      PickPerfect does not track you, profile you, sell your data, or run
      passive monitoring in the background. It does not read your browsing
      history, and it does not keep a persistent content script attached to
      pages.
    </p>

    <h2>Changes to this policy</h2>
    <p>
      If we update this policy, the revised version will be published at the
      same URL with a new date at the top of the page.
    </p>

    <div class="policy-contact mt-8 rounded-xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/70">
      <p class="text-sm font-semibold text-slate-950 dark:text-white">Contact</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        If you have a privacy question about PickPerfect, send it to
        <a href="mailto:5797565@gmail.com">5797565@gmail.com</a>
        and include "PickPerfect" in the subject line if you want a faster reply.
      </p>
    </div>
  </PolicyPage>
</template>
