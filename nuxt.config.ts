import { Configuration } from "@nuxt/types";

export default <Configuration>{
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/axios-store"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module",
    "@nuxtjs/vuetify",
    // Doc: https://github.com/nuxt-community/composition-api
    "nuxt-composition-api",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://www.npmjs.com/package/nuxt-lazy-load/v/latest
    "nuxt-lazy-load",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://pwa.nuxtjs.org/
    ["@nuxtjs/pwa", { meta: false, icon: false, manifest: false }],
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /**
   * Enable runtime linting after save file
   * See https://typescript.nuxtjs.org/guide/lint.html#configuration
   */
  typescript: {
    typeCheck: {
      eslint: true,
    },
  },
  /*
   ** vuetify module configuration
   ** See https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    optionsPath: "~/vuetify.options.ts",
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend() {},
  },
};
