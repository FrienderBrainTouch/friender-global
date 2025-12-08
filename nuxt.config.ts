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
        code: 'ko',
        iso: 'ko-KR',
        name: '한국어',
        flag: '🇰🇷',
        files: ['ko/common.json', 'ko/home.json', 'ko/dreamPath.json', 'ko/innoWorks.json', 'ko/contact.json'],
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        flag: '🇺🇸',
        files: ['en/common.json', 'en/home.json', 'en/dreamPath.json', 'en/innoWorks.json', 'en/contact.json'],
      },
      // 향후 추가될 언어들 (번역 파일 생성 후 주석 해제)
      // {
      //   code: 'ja',
      //   iso: 'ja-JP',
      //   name: '日本語',
      //   flag: '🇯🇵',
      //   files: ['ja/common.json', 'ja/home.json', 'ja/contact.json'],
      // },
      // {
      //   code: 'zh-CN',
      //   iso: 'zh-CN',
      //   name: '简体中文',
      //   flag: '🇨🇳',
      //   files: ['zh-CN/common.json', 'zh-CN/home.json', 'zh-CN/contact.json'],
      // },
      // {
      //   code: 'es',
      //   iso: 'es-ES',
      //   name: 'Español',
      //   flag: '🇪🇸',
      //   files: ['es/common.json', 'es/home.json', 'es/contact.json'],
      // },
    ],
    defaultLocale: 'ko',
    strategy: 'prefix',
    langDir: '../i18n',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      fallbackLocale: 'ko',
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
