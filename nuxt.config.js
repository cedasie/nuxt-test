const pkg = require("./package");

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "en",
            name: "English"
          },
          {
            code: "fr",
            name: "Français"
          }
        ],
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          onlyOnRoot: true // recommended
        },
        defaultLocale: "en",
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: {
              welcome: "Hello",
              test: "my test"
            },
            fr: {
              welcome: "Bonjour",
              test: "mon test"
            }
          }
        }
      }
    ],
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
  ],

  auth: {
    axios: {
      credentials: true
    },

    strategies: {
      laravelSanctum: {
        provider: "laravel/sanctum",
        url: "http://localhost:8000",
        // url: "http://localhost:8000",
        endpoints: {
          login: {
            url: "/api/login"
          }
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      "axios";
    }
  }
};
