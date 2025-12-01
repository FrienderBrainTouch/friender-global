import crypto from 'node:crypto';
import { defineNuxtConfig } from 'nuxt/config';

if (typeof (crypto as any).hash !== 'function') {
  (crypto as any).hash = (algorithm: string, data: any, encoding: any) =>
    crypto.createHash(algorithm).update(data).digest(encoding);
}

export default defineNuxtConfig({
  srcDir: 'src',
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        files: ['en/common.json', 'en/home.json', 'en/contact.json'],
      },
      {
        code: 'ko',
        iso: 'ko-KR',
        name: '한국어',
        files: ['ko/common.json', 'ko/home.json', 'ko/contact.json'],
      },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: '../i18n',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18n: '../i18n.config.ts',
  },
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: false,
  },
  nitro: {
    routeRules: {
      '/sw.js': { headers: { 'Cache-Control': 'public, max-age=0' } },
    },
  },
  app: {
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },
  },
});
