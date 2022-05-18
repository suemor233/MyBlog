import { defineNuxtConfig } from 'nuxt'
import {resolve} from "path";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ["~/assets/css/tailwind.css"],
    build: {
        transpile: ['vueuc'],   // fix dev error: Cannot find module 'vueuc'
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    }

})
