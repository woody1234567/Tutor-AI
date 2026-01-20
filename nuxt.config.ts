export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant'
      },
      title: 'AI 教學工具｜專為補習班打造',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '專為補習班打造的 AI 教學工具：自動出題、智慧講義、生涯與學習歷程追蹤，立即提升教學效率與招生轉換。' },
        { property: 'og:title', content: 'AI 教學工具｜專為補習班打造' },
        { property: 'og:description', content: '自動出題、智慧講義、學習成效分析，一站式 AI 教學工具。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-cover.svg' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css' }
      ]
    }
  },
  css: ['~/assets/css/styles.css'],
  modules: []
})
