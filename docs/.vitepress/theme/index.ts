// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import './style/index.css'
import DataPanel from "./components/DataPanel.vue"
import Update from './components/Update.vue'
import BackToTop from './components/BackToTop.vue'
import busuanzi from 'busuanzi.pure.js'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-footer-before': () => h(BackToTop),
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      router.onAfterRouteChange = () => {
        busuanzi.fetch()
      }
    }
    app.component('DataPanel' , DataPanel);
    app.component('Update', Update);
    app.component('BackToTop', BackToTop);
  }
} satisfies Theme
