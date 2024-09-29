import zh from './lang/zh.json';
import en from './lang/en.json';
import fr from './lang/fr.json';
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  locales: [
    {
      code: 'zh',
      iso: 'zh-CN',
    },
    {
      code: 'en',
      iso: 'en-US',
    },
    {
      code: 'ja',
      iso: 'ja-JP',
    },
    {
      code: 'ko',
      iso: 'ko-KR',
    },
    {
      code: 'fr',
      iso: 'fr-FR',
    },
  ],
  defaultLocale: 'zh',
  messages: {
    zh,
    en,
    fr,
  },
  // 浏览器语言检测
  detectBrowserLanguage: {
    useCookie: true,
    // onlyOnRoot: true
  },
}));
