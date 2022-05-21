import {defineNuxtConfig} from 'nuxt'
import {resolve} from "path";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        link: [
          {
            href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/all.min.css',
            rel: 'stylesheet',
          }
        ],
    },
    css: ["~/assets/css/tailwind.css",'@fortawesome/fontawesome-svg-core/styles.css'],
    build: { // fix dev error: Cannot find module 'vueuc'
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    publicRuntimeConfig: {
        secret: process.env.SECRET || 'http://localhost:3371/api',
    },
    buildModules: [
        '@pinia/nuxt',
    ],
})
