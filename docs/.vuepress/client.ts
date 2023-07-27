import { defineClientConfig } from '@vuepress/client'
import BlogList from './components/BlogList.vue'
import BlogCell from './components/BlogCell.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('BlogList', BlogList)
    app.component('BlogCell', BlogCell)
  },
  setup() {},
  rootComponents: [],
})