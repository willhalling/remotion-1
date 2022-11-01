module.exports = {
  apiSidebar: [
    "api",
    {
      type: "category",
      label: "Command line",
      link: {
        type: "doc",
        id: "cli/cli",
      },
      collapsed: true,
      items: [
        "cli/preview",
        "cli/render",
        "cli/still",
        "cli/compositions",
        {
          type: "category",
          label: "lambda",
          link: {
            type: "doc",
            id: "lambda/cli",
          },
          items: [
            "lambda/cli/sites",
            "lambda/cli/functions",
            "lambda/cli/render",
            "lambda/cli/still",
            "lambda/cli/policies",
            "lambda/cli/regions",
            "lambda/cli/quotas",
          ],
        },
        "cli/benchmark",
        "cli/versions",
        "cli/upgrade",
        "cli/help",
      ],
    },
    "config",
    {
      type: "html",
      value:
        '<hr style="margin-top: 4px; margin-bottom: 4px; border-bottom: none"/>', // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: "category",
      label: "remotion",
      link: {
        type: "doc",
        id: "remotion",
      },
      items: [
        "use-current-frame",
        "use-video-config",
        "composition",
        "interpolate",
        "continue-render",
        "delay-render",
        "interpolate-colors",
        "get-input-props",
        "measure-spring",
        "random",
        "register-root",
        "spring",
        "staticfile",
        "prefetch",
        "audio",
        "sequence",
        "loop",
        "video",
        "offthreadvideo",
        "absolute-fill",
        "img",
        "iframe",
        "freeze",
        "still",
        "series",
        "folder",
        "easing",
      ],
    },
    {
      type: "category",
      label: "@remotion/bundler",
      link: {
        type: "doc",
        id: "bundler",
      },
      items: ["bundle"],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "renderer",
      },
      label: "@remotion/renderer",
      items: [
        "renderer/get-compositions",
        "renderer/render-media",
        "renderer/render-frames",
        "renderer/render-still",
        "renderer/stitch-frames-to-video",
        "renderer/open-browser",
        "renderer/make-cancel-signal",
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "player/installation",
      },
      label: "@remotion/player",
      items: ["player/api", "player/thumbnail"],
    },
    {
      type: "category",
      label: "@remotion/gif",
      link: {
        type: "doc",
        id: "gif/index",
      },
      items: ["gif/gif", "gif/get-gif-duration-in-seconds"],
    },
    {
      type: "category",
      label: "@remotion/media-utils",
      link: {
        type: "doc",
        id: "media-utils/index",
      },
      items: [
        "audio-buffer-to-data-url",
        "get-audio-data",
        "get-audio-duration-in-seconds",
        "get-video-metadata",
        "get-waveform-portion",
        "use-audio-data",
        "visualize-audio",
      ],
    },
    {
      type: "category",
      label: "@remotion/motion-blur",
      link: {
        type: "doc",
        id: "motion-blur/index",
      },
      items: ["motion-blur/trail", "motion-blur/camera-motion-blur"],
    },
    {
      type: "category",
      label: "@remotion/lambda",
      link: {
        type: "doc",
        id: "lambda/api",
      },
      items: [
        "lambda/estimateprice",
        "lambda/deployfunction",
        "lambda/deletefunction",
        "lambda/getfunctioninfo",
        "lambda/getfunctions",
        "lambda/deletesite",
        "lambda/deploysite",
        "lambda/getawsclient",
        "lambda/getregions",
        "lambda/getsites",
        "lambda/downloadmedia",
        "lambda/deleterender",
        "lambda/getuserpolicy",
        "lambda/getrolepolicy",
        "lambda/getorcreatebucket",
        "lambda/getrenderprogress",
        "lambda/presignurl",
        "lambda/rendermediaonlambda",
        "lambda/renderstillonlambda",
        "lambda/simulatepermissions",
        "lambda/validatewebhooksignature",
      ],
    },
    {
      type: "category",
      label: "@remotion/three",
      link: {
        type: "doc",
        id: "three",
      },
      items: ["three-canvas", "use-video-texture"],
    },
    {
      type: "category",
      label: "@remotion/skia",
      link: {
        type: "doc",
        id: "skia/skia",
      },
      items: ["skia/enable-skia", "skia/skia-canvas"],
    },
    {
      type: "category",
      label: "@remotion/lottie",
      link: {
        type: "doc",
        id: "lottie/lottie-index",
      },
      items: [
        "lottie/lottie-comp",
        "lottie/getlottiemetadata",
        "lottie/lottie-staticfile",
        "lottie/lottie-remote",
        "lottie/lottie-aftereffects",
        "lottie/lottie-lottiefiles",
      ],
    },
    {
      type: "category",
      label: "@remotion/preload",
      link: {
        type: "doc",
        id: "preload/preload",
      },
      items: [
        "preload/preload-video",
        "preload/preload-audio",
        "preload/resolve-redirect",
      ],
    },
    {
      type: "category",
      label: "@remotion/paths",
      link: {
        type: "doc",
        id: "paths/index",
      },
      items: [
        "paths/get-length",
        "paths/get-parts",
        "paths/get-point-at-length",
        "paths/get-tangent-at-length",
        "paths/reverse-path",
        "paths/normalize-path",
        "paths/interpolate-path",
        "paths/evolve-path",
        "paths/extend-viewbox",
      ],
    },
    {
      type: "category",
      label: "@remotion/noise",
      link: {
        type: "doc",
        id: "noise/index",
      },
      items: ["noise/noise-2d", "noise/noise-3d", "noise/noise-4d"],
    },
    {
      type: "category",
      label: "@remotion/google-fonts",
      link: {
        type: "doc",
        id: "google-fonts/google-fonts",
      },
      items: [
        "google-fonts/load-font",
        "google-fonts/get-available-fonts",
        "google-fonts/get-info",
      ],
    },
  ],
  mainSidebar: [
    {
      type: "category",
      label: "Getting started",
      items: [
        "getting-started",
        "the-fundamentals",
        "animating-properties",
        "reusability",
        "timeline",
        "render",
      ],
    },
    {
      type: "category",
      label: "Techniques",
      items: [
        "assets",
        "using-audio",
        "fonts",
        "using-randomness",
        "audio-visualization",
        "noise-visualization",
        "use-img-and-iframe",
        "javascript",
        "data-fetching",
        "encoding",
        "transparent-videos",
        "parametrized-rendering",
        "dynamic-metadata",
        "ssr",
        "webpack",
        "tailwind",
        "env-variables",
        "third-party",
        "stills",
        "scaling",
        "video-manipulation",
        "render-as-gif",
        "figma",
        "spline",
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "player/index",
      },
      label: "Player",
      items: [
        "player/examples",
        "player/scaling",
        "player/integration",
        "player/autoplay",
        "player/preloading",
        "player/best-practices",
      ],
    },
    {
      type: "category",
      label: "Lambda",
      link: {
        type: "doc",
        id: "lambda",
      },
      items: [
        "lambda/setup",
        "lambda/permissions",
        "lambda/region-selection",
        "lambda/concurrency",
        "lambda/runtime",
        "lambda/disk-size",
        "lambda/faq",
        "lambda/light-client",
        "lambda/custom-layers",
        "lambda/custom-destination",
        "lambda/checklist",
        "lambda/webhooks",
        {
          type: "category",
          label: "Troubleshooting",
          items: [
            "lambda/troubleshooting/permissions",
            "lambda/troubleshooting/rate-limit",
            "lambda/troubleshooting/unrecognizedclientexception",
            "lambda/troubleshooting/bucket-disallows-acl",
          ],
        },
        "lambda/limits",
        "lambda/changelog",
        "lambda/upgrading",
        "lambda/uninstall",
      ],
    },
    {
      type: "category",
      label: "Troubleshooting",
      items: [
        "timeout",
        "target-closed",
        "media-playback-error",
        "performance",
        "webpack-dynamic-imports",
        "non-seekable-media",
        "flickering",
        "version-mismatch",
        "enametoolong",
        "slow-method-to-extract-frame",
        "wrong-composition-mount",
        "staticfile-relative-paths",
        "staticfile-remote-urls",
        "troubleshooting/rosetta",
        "troubleshooting/loading-root-component",
        "troubleshooting/defaultprops-too-big",
      ],
    },

    {
      type: "category",
      label: "Snippets",
      items: [
        "miscellaneous/snippets/player-in-iframe",
        "miscellaneous/snippets/fps-converter",
        "miscellaneous/snippets/adding-animations",
        "miscellaneous/snippets/offthread-video-while-rendering",
      ],
    },
    {
      type: "link",
      href: "/docs/api",
      label: "API Reference",
    },
    "terminology",
    {
      type: "category",
      label: "Migration guides",
      items: ["3-0-migration", "2-0-migration"],
    },
    {
      type: "category",
      label: "Miscellaneous",
      items: [
        "brownfield",
        "chromium-flags",
        "video-vs-offthreadvideo",
        "prereleases",
        "gpu",
        "react-18",
        "legacy-babel",
        "miscellaneous/typescript-aliases",
        "miscellaneous/render-all",
        "miscellaneous/render-in-browser",
      ],
    },
    "license",
  ],
};
