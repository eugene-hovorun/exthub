const sources = [
    {
        "context": {
            "name": "nuxt:route-rules",
            "description": "Generated from your route rules config.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:route-rules'] }`."
            ]
        },
        "urls": [
            "/pickperfect",
            "/pickperfect/policy",
            "/locatex",
            "/locatex/policy"
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/pickperfect",
                "images": [
                    {
                        "loc": "https://exthub.dev/pickperfect/screenshot_1.png"
                    },
                    {
                        "loc": "https://exthub.dev/pickperfect/screenshot_2.png"
                    },
                    {
                        "loc": "https://exthub.dev/pickperfect/screenshot_3.png"
                    },
                    {
                        "loc": "https://exthub.dev/pickperfect/screenshot_4.png"
                    }
                ]
            },
            {
                "loc": "/locatex",
                "images": [
                    {
                        "loc": "https://exthub.dev/locatex-media/screenshot_1.png"
                    },
                    {
                        "loc": "https://exthub.dev/locatex-media/screenshot_2.png"
                    },
                    {
                        "loc": "https://exthub.dev/locatex-media/screenshot_3.png"
                    },
                    {
                        "loc": "https://exthub.dev/locatex-media/screenshot_4.png"
                    }
                ]
            },
            {
                "loc": "/"
            },
            {
                "loc": "/pickperfect/policy"
            },
            {
                "loc": "/locatex/policy"
            },
            {
                "loc": "/devpulse/policy"
            },
            {
                "loc": "/formforge/policy"
            },
            {
                "loc": "/formforge",
                "images": [
                    {
                        "loc": "https://exthub.dev/formforge/screenshot_1.png"
                    },
                    {
                        "loc": "https://exthub.dev/formforge/screenshot_2.png"
                    },
                    {
                        "loc": "https://exthub.dev/formforge/screenshot_3.png"
                    }
                ]
            },
            {
                "loc": "/devpulse",
                "images": [
                    {
                        "loc": "https://exthub.dev/devpulse/screenshot_1.png"
                    },
                    {
                        "loc": "https://exthub.dev/devpulse/screenshot_2.png"
                    },
                    {
                        "loc": "https://exthub.dev/devpulse/screenshot_3.png"
                    }
                ]
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
