// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
// import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // devtools: { enabled: true },
  srcDir: 'src/',
  // image: {
  //   dir: 'assets/images',
  //   // formats: ['webp', 'avif'],
  // },
  // alias: {
  //   images: fileURLToPath(new URL('src/assets/images', import.meta.url)),
  // },
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@tresjs/nuxt', '@nuxtjs/i18n', '@nuxt/image', '@nuxtjs/tailwindcss', '@formkit/auto-animate/nuxt'],
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or 'modern'
          additionalData: '@import "@/assets/styles/default.scss";',
        },
      },
    },
  },
});
