<script setup>
const title = "FormForge — Privacy Policy";
const description =
  "FormForge does not collect, transmit, or share any personal data. All fake data is generated locally in your browser.";

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
        title="FormForge — Privacy Policy"
        description="Last updated: February 14, 2026"
      />

      <UPageBody class="prose dark:prose-invert">
        <UAlert
          title="The short version"
          description="FormForge does not collect, transmit, or share any personal data. All fake data is generated locally in your browser and never leaves your device. Premium features use ExtensionPay for payment processing only."
          color="info"
          variant="subtle"
          icon="i-lucide-shield-check"
        />

        <h2>What data does FormForge store?</h2>
        <p>
          FormForge stores the following data locally on your device using
          browser storage APIs:
        </p>
        <ul>
          <li>
            <strong>Profiles</strong> — your saved profiles including name,
            selected locale, and any custom field overrides (e.g., pinned first
            name, email), stored in <code>chrome.storage.local</code>
          </li>
          <li>
            <strong>Active profile selection</strong> — which profile is
            currently selected, stored in <code>chrome.storage.local</code>
          </li>
          <li>
            <strong>Premium status</strong> — whether you've purchased Pro
            features, cached in <code>chrome.storage.local</code> for faster
            loading
          </li>
        </ul>
        <p>
          This data never leaves your browser. It is not transmitted to any
          server, third party, or external service (except ExtensionPay for
          payment verification — see below).
        </p>

        <h2>What data does FormForge collect?</h2>
        <p>
          None. FormForge does not collect any personal data, usage data,
          analytics, or telemetry of any kind. Fake data (names, emails, phone
          numbers, addresses, etc.) is generated locally in your browser using
          built-in locale datasets. Generated data is injected directly into
          form fields on the page and is never recorded or transmitted.
        </p>

        <h2>Permissions</h2>
        <p>FormForge requests the following Chrome permissions:</p>
        <ul>
          <li>
            <strong>activeTab</strong> — to detect form fields and fill them
            with generated data on the current page when you click "Fill Page"
            or use the keyboard shortcut
          </li>
          <li>
            <strong>scripting</strong> — to inject the content script that
            performs field detection and form filling on the active tab
          </li>
          <li>
            <strong>storage</strong> — to save your profiles, preferences, and
            premium license status locally on your device
          </li>
        </ul>
        <p>
          FormForge does not use the <code>&lt;all_urls&gt;</code> permission
          and cannot access any page unless you explicitly trigger it by
          clicking "Fill Page" in the popup or pressing the keyboard shortcut.
        </p>

        <h2>Premium features (optional)</h2>
        <p>If you purchase Pro features ($2.99 one-time), FormForge unlocks:</p>
        <ul>
          <li>
            <strong>Custom profiles</strong> — create and manage multiple
            profiles with custom field overrides, all stored locally
          </li>
          <li>
            <strong>Additional locales</strong> — English (UK), Deutsch, Polski,
            Українська, Français, 日本語 — locale datasets are bundled with the
            extension, no network requests needed
          </li>
          <li>
            <strong>Per-profile locale switching</strong> — each profile can use
            a different locale, stored locally
          </li>
        </ul>
        <p>
          All data generation happens entirely within your browser using bundled
          locale datasets. No data is sent to any server.
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
          FormForge does not use any analytics tools, advertising networks, or
          other third-party services.
        </p>

        <h2>What FormForge does NOT do</h2>
        <ul>
          <li>❌ No tracking or analytics</li>
          <li>❌ No data collection or transmission</li>
          <li>❌ No ads or advertising networks</li>
          <li>❌ No cookies</li>
          <li>❌ No access to passwords or sensitive form data</li>
          <li>❌ No browsing history access</li>
          <li>
            ❌ No background network requests (except ExtensionPay verification)
          </li>
          <li>❌ No content scripts running without explicit user action</li>
        </ul>

        <h2>Changes to this policy</h2>
        <p>
          If this policy changes, the updated version will be published at this
          same URL with an updated date.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Reach out at
          <a href="mailto:nickolay.dev@gmail.com">nickolay.dev@gmail.com</a>
        </p>
      </UPageBody>
    </UContainer>
  </UPage>
</template>
