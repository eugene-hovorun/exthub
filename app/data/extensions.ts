export const extensions = [
  {
    name: "locatex",
    label: "LocateX",
    badge: "Locator Inspector",
    eyebrow: "XPath + Templates",
    icon: "i-lucide-crosshair",
    description:
      "Inspect live elements, generate stable selectors, validate them instantly, and build reusable locator templates faster.",
    to: "/locatex",
    screenshotCount: 4,
    screenshotBase: "locatex-media",
    accent: "from-sky-500/30 via-cyan-400/18 to-transparent",
  },
  {
    name: "pickperfect",
    label: "PickPerfect",
    badge: "Color Toolkit",
    eyebrow: "Tailwind + WCAG",
    icon: "i-lucide-pipette",
    description:
      "Pick colors from anywhere on your screen, map them to Tailwind, and extract clean palettes in seconds.",
    to: "/pickperfect",
    screenshotCount: 4,
    accent: "from-blue-500/30 via-cyan-400/16 to-transparent",
  },
  {
    name: "devpulse",
    label: "DevPulse",
    badge: "Performance HUD",
    eyebrow: "FPS + Web Vitals",
    icon: "i-lucide-gauge",
    description:
      "Real-time performance overlay for developers. Watch FPS, memory, long tasks, and vitals without leaving the page.",
    to: "/devpulse",
    screenshotCount: 3,
    accent: "from-emerald-500/28 via-lime-400/16 to-transparent",
  },
  {
    name: "formforge",
    label: "FormForge",
    badge: "Form Testing",
    eyebrow: "Fake data, done right",
    icon: "i-lucide-file-pen-line",
    description:
      "One-click realistic fake data for any form, with smart detection, custom profiles, and locale-aware generation.",
    to: "/formforge",
    screenshotCount: 3,
    accent: "from-amber-500/28 via-orange-400/14 to-transparent",
  },
] as const;
