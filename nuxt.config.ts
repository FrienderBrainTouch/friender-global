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
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/supabase'],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        flag: '🇺🇸',
        files: [
          'en/common.json',
          'en/home.json',
          'en/dreamPath.json',
          'en/innoWorks.json',
          'en/story.json',
          'en/contact.json',
        ],
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        name: '日本語',
        flag: '🇯🇵',
        files: [
          'ja/common.json',
          'ja/home.json',
          'ja/dreamPath.json',
          'ja/innoWorks.json',
          'ja/story.json',
          'ja/contact.json',
        ],
      },
      {
        code: 'zh-CN',
        iso: 'zh-CN',
        name: '简体中文',
        flag: '🇨🇳',
        files: [
          'zh-CN/common.json',
          'zh-CN/home.json',
          'zh-CN/dreamPath.json',
          'zh-CN/innoWorks.json',
          'zh-CN/story.json',
          'zh-CN/contact.json',
        ],
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        flag: '🇪🇸',
        files: [
          'es/common.json',
          'es/home.json',
          'es/dreamPath.json',
          'es/innoWorks.json',
          'es/story.json',
          'es/contact.json',
        ],
      },
    ],
    defaultLocale: 'en',
    strategy: 'prefix',
    langDir: '../i18n',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      fallbackLocale: 'en',
    },
    vueI18n: '../i18n.config.ts',
  },
  supabase: {
    redirect: false, // 자동 리다이렉트 비활성화
    // 또는 특정 페이지만 인증 필요하도록 설정
    // redirectOptions: {
    //   login: '/admin',
    //   callback: '/admin',
    //   exclude: ['/', '/ko', '/en', '/ko/*', '/en/*'], // 공개 경로 제외
    // },
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
