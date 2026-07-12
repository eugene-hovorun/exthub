<script setup>
const title = "DevPulse - Privacy Policy";
const description =
  "DevPulse does not collect, transmit, or share any personal data. All performance metrics stay on your device.";
const updatedAt = "February 13, 2026";
const summary =
  "DevPulse computes its metrics inside your browser and keeps them there. The extension does not collect personal data or analytics. Premium payments go through ExtensionPay.";
const facts = [
  { label: "Data collection", value: "None" },
  { label: "Metrics", value: "Computed locally" },
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
    product-path="/devpulse"
    :facts="facts"
  >
    <h2>What DevPulse stores</h2>
    <p>
      DevPulse stores a few settings so the HUD behaves consistently across
      sessions. Those settings stay in browser storage on your device.
    </p>
    <ul>
      <li>
        <strong>HUD position and collapsed state</strong> so the overlay can
        reopen where you left it
      </li>
      <li>
        <strong>Theme preference</strong> for dark, light, or system mode
      </li>
      <li>
        <strong>HUD active state</strong> for localhost auto-restore during
        development
      </li>
      <li>
        <strong>Premium status</strong> cached in <code>chrome.storage.local</code>
        for faster startup
      </li>
    </ul>
    <p>
      None of that data is sent to us. It stays inside your browser unless
      premium verification needs to talk to ExtensionPay.
    </p>

    <h2>What DevPulse collects</h2>
    <p>
      DevPulse does not collect personal data, analytics, telemetry, or usage
      tracking. FPS, DOM count, memory, Web Vitals, and network metrics are
      calculated in the active browser tab and are not uploaded anywhere.
    </p>

    <h2>Why DevPulse needs permissions</h2>
    <p>DevPulse asks for only the permissions required to place the HUD on the page and save its state.</p>
    <ul>
      <li>
        <strong>activeTab</strong> lets the extension inject the HUD into the
        tab you choose
      </li>
      <li>
        <strong>scripting</strong> runs the overlay code on that page
      </li>
      <li>
        <strong>storage</strong> keeps premium status locally
      </li>
    </ul>
    <p>
      DevPulse does not use <code>&lt;all_urls&gt;</code>. It cannot inspect or
      modify arbitrary pages unless you actively turn it on. The one exception
      is localhost and 127.0.0.1, where a small helper script supports HUD
      persistence during development.
    </p>

    <h2>Premium features</h2>
    <p>
      Premium is a one-time purchase. The unlocked metrics still run locally in
      the browser tab where the HUD is active.
    </p>
    <ul>
      <li><strong>Memory monitoring</strong> reads the browser's own performance APIs</li>
      <li><strong>Long task detection</strong> uses <code>PerformanceObserver</code></li>
      <li><strong>Network overview</strong> reads local resource timing entries</li>
      <li><strong>Core Web Vitals</strong> are measured with native web APIs</li>
      <li><strong>JSON export</strong> downloads a snapshot directly to your device</li>
    </ul>
    <p>
      DevPulse does not stream those metrics to a remote backend. They stay in
      the page context where they were measured.
    </p>

    <h2>Third-party services</h2>
    <p>
      DevPulse uses <strong>ExtensionPay</strong> for checkout and license
      verification. ExtensionPay may process payments through Stripe. Their
      privacy policy is here:
      <a href="https://extensionpay.com/privacy" target="_blank">extensionpay.com/privacy</a>.
    </p>
    <p>
      There are no ad networks, analytics SDKs, or extra tracking services in
      the extension.
    </p>

    <h2>What DevPulse does not do</h2>
    <p>
      DevPulse does not monitor your browsing history, read your form entries,
      capture passwords, or run persistent background tracking on ordinary
      websites. Outside of payment verification for premium users, it does not
      make hidden network requests on its own.
    </p>

    <h2>Changes to this policy</h2>
    <p>
      If this policy changes, the updated version will stay at this URL and the
      date at the top of the page will be updated.
    </p>

    <div class="policy-contact mt-8 rounded-xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/70">
      <p class="text-sm font-semibold text-slate-950 dark:text-white">Contact</p>
      <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        If you have a privacy question about DevPulse, email
        <a href="mailto:5797565@gmail.com">5797565@gmail.com</a>.
        Adding "DevPulse" to the subject line helps us route it faster.
      </p>
    </div>
  </PolicyPage>
</template>
