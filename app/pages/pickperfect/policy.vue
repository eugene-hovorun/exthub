<script setup>
const title = "PickPerfect — Privacy Policy";
const description =
  "PickPerfect does not collect, transmit, or share any personal data. Everything stays on your device.";

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
        title="PickPerfect — Privacy Policy"
        description="Last updated: February 7, 2026"
      />

      <UPageBody class="prose dark:prose-invert">
        <UAlert
          title="The short version"
          description="PickPerfect does not collect, transmit, or share any personal data. Everything stays on your device. Premium features use ExtensionPay for payment processing only."
          color="info"
          variant="subtle"
          icon="i-lucide-shield-check"
        />

        <h2>What data does PickPerfect store?</h2>
        <p>
          PickPerfect stores the following data locally on your device using
          Chrome's built-in storage API (<code>chrome.storage.local</code>):
        </p>
        <ul>
          <li>
            <strong>Color history</strong> — the last 20 colors you picked (HEX
            values and timestamps)
          </li>
          <li>
            <strong>Format preference</strong> — your preferred color format
            (HEX, RGB, or HSL)
          </li>
          <li>
            <strong>Premium status</strong> — whether you've purchased premium
            features (cached locally for faster popup loading)
          </li>
        </ul>
        <p>
          This data never leaves your browser. It is not transmitted to any
          server, third party, or external service (except ExtensionPay for
          payment verification — see below).
        </p>

        <h2>What data does PickPerfect collect?</h2>
        <p>
          None. PickPerfect does not collect any personal data, usage data,
          analytics, or telemetry of any kind.
        </p>

        <h2>Permissions</h2>
        <p>PickPerfect requests the following Chrome permissions:</p>
        <ul>
          <li>
            <strong>storage</strong> — to save your color history and format
            preference locally on your device
          </li>
          <li>
            <strong>activeTab</strong> — to extract colors from the current
            webpage when you click "Extract Palette" (premium feature only,
            on-demand)
          </li>
          <li>
            <strong>scripting</strong> — to inject the palette extraction script
            when you click "Extract Palette" (premium feature only, runs once
            then disappears)
          </li>
        </ul>
        <p>
          PickPerfect does not request access to your browsing history or any
          content beyond the active tab when you explicitly click the extraction
          button. It uses the native EyeDropper API for core color picking,
          which requires no content script injection.
        </p>

        <h2>Premium features (optional)</h2>
        <p>
          If you purchase premium features ($2.99 one-time), PickPerfect gains
          access to:
        </p>
        <ul>
          <li>
            <strong>WCAG Contrast Checker</strong> — runs locally, no data
            transmitted
          </li>
          <li>
            <strong>Tailwind Color Mapping</strong> — runs locally, no data
            transmitted
          </li>
          <li>
            <strong>Page Palette Extraction</strong> — reads computed CSS colors
            from visible elements on the active tab when you click "Extract
            Palette". This data is processed locally and never sent to any
            server.
          </li>
        </ul>
        <p>
          The palette extraction feature only runs when you explicitly click the
          button. It extracts color values from CSS styles and does not access
          page content, form data, cookies, or any personal information.
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
          PickPerfect does not use any analytics tools, advertising networks, or
          other third-party services.
        </p>

        <h2>What PickPerfect does NOT do</h2>
        <ul>
          <li>❌ No tracking or analytics</li>
          <li>❌ No data collection</li>
          <li>❌ No ads or advertising networks</li>
          <li>❌ No cookies</li>
          <li>❌ No form data access</li>
          <li>❌ No browsing history</li>
          <li>❌ No background activity (except ExtensionPay verification)</li>
          <li>❌ No persistent content scripts</li>
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
