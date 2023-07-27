import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: '',
  description: 'Just playing around',
  theme: defaultTheme({
    navbar: false,
    sidebar: false,
    lastUpdated: true
  }),
})