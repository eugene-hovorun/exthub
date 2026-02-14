<script setup>
const title = "DevPulse — Privacy Policy";
const description =
  "DevPulse does not collect, transmit, or share any personal data. All performance metrics stay on your device.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});
</script>

<template>
  <UPage>
    <UContainer class="max-w-3xl">
      <UPageHeader
        title="DevPulse — Privacy Policy"
        description="Last updated: February 13, 2026"
      />

      <UPageBody class="prose dark:prose-invert">
        <UAlert
          title="The short version"
          description="DevPulse does not collect, transmit, or share any personal data. All performance metrics are computed locally and never leave your browser. Premium features use ExtensionPay for payment processing only."
          color="info"
          variant="subtle"
          icon="i-lucide-shield-check"
        />

        <h2>What data does DevPulse store?</h2>
        <p>
          DevPulse stores the following data locally on your device using
          browser storage APIs:
        </p>
        <ul>
          <li>
            <strong>HUD position and collapsed state</strong> — stored in page
            localStorage to restore your layout preferences on the current page
          </li>
          <li>
            <strong>Theme preference</strong> — your chosen theme (dark, light,
            or system) stored in page localStorage
          </li>
          <li>
            <strong>HUD active state</strong> — stored in page localStorage for
            localhost auto-restore functionality
          </li>
          <li>
            <strong>Premium status</strong> — whether you've purchased premium
            features, cached in <code>chrome.storage.local</code> for faster
            loading
          </li>
        </ul>
        <p>
          This data never leaves your browser. It is not transmitted to any
          server, third party, or external service (except ExtensionPay for
          payment verification — see below).
        </p>

        <h2>What data does DevPulse collect?</h2>
        <p>
          None. DevPulse does not collect any personal data, usage data,
          analytics, or telemetry of any kind. Performance metrics (FPS, DOM
          count, memory, Web Vitals, network stats) are computed in real-time
          inside your browser tab and are never recorded or transmitted.
        </p>

        <h2>Permissions</h2>
        <p>DevPulse requests the following Chrome permissions:</p>
        <ul>
          <li>
            <strong>activeTab</strong> — to inject the performance HUD overlay
            into the current tab when you click the toolbar icon
          </li>
          <li>
            <strong>scripting</strong> — to execute the HUD content script on
            the active page
          </li>
          <li>
            <strong>storage</strong> — to save your premium subscription status
            locally on your device
          </li>
        </ul>
        <p>
          DevPulse does not use the <code>&lt;all_urls&gt;</code> permission and
          cannot access any page unless you explicitly activate it by clicking
          the toolbar icon. The only exception is localhost and 127.0.0.1, where
          a content script runs automatically to support HUD persistence across
          page reloads during local development.
        </p>

        <h2>Premium features (optional)</h2>
        <p>
          If you purchase premium features ($2.99 one-time), DevPulse unlocks:
        </p>
        <ul>
          <li>
            <strong>Memory monitoring</strong> — reads JS heap size from the
            browser's Performance API, processed locally
          </li>
          <li>
            <strong>Long task detection</strong> — uses PerformanceObserver
            locally, no data transmitted
          </li>
          <li>
            <strong>Network overview</strong> — reads resource timing entries
            locally, no data transmitted
          </li>
          <li>
            <strong>Core Web Vitals (FCP, LCP)</strong> — uses
            PerformanceObserver locally, no data transmitted
          </li>
          <li>
            <strong>JSON export</strong> — generates a snapshot file that
            downloads directly to your device
          </li>
        </ul>
        <p>
          All premium metric collection happens entirely within your browser tab
          using standard Web APIs. No data is sent to any server.
        </p>

        <h2>Third parties</h2>
        <p><strong>ExtensionPay</strong> (for premium features only):</p>
        <ul>
          <li>Used for payment processing and premium feature verification</li>
          <li>Processes payment information through Stripe</li>
          <li>
            Their privacy policy:
            <a href="https://extensionpay.com/privacy" target="_blank">
              extensionpay.com/privacy
            </a>
          </li>
        </ul>
        <p>
          DevPulse does not use any analytics tools, advertising networks, or
          other third-party services.
        </p>

        <h2>What DevPulse does NOT do</h2>
        <ul>
          <li>❌ No tracking or analytics</li>
          <li>❌ No data collection or transmission</li>
          <li>❌ No ads or advertising networks</li>
          <li>❌ No cookies</li>
          <li>❌ No access to page content, form data, or passwords</li>
          <li>❌ No browsing history access</li>
          <li>
            ❌ No background network requests (except ExtensionPay verification)
          </li>
          <li>❌ No persistent content scripts on non-localhost pages</li>
        </ul>

        <h2>Changes to this policy</h2>
        <p>
          If this policy changes, the updated version will be published at this
          same URL with an updated date.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Reach out at
          <a href="mailto:5797565@gmail.com">5797565@gmail.com</a>
        </p>
      </UPageBody>
    </UContainer>
  </UPage>
</template>
