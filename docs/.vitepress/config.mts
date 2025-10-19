import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "infinitypoint",
  description: "A VitePress personal blog site",
  head: [
    ['link', { rel: 'icon', href: '/main.svg' }]
  ],
  locales: {
    // 根(locale key 可以是 `root` 或 '')，对应站点根路径 '/'
    root: {
      label: '中文',
      lang: 'zh',
      link: '/',
      themeConfig: {
        // 中文站点的导航与侧边栏（只对根路径生效）
        nav: [
          { text: '首页', link: '/' },
          { text: '示例', link: '/examples/markdown-examples' }, // 路径修正
          { text: '博客', link: '/blogs/csharp-async-aop-trap' },
          { text: '游戏', link: '/games/minesweeper' }
        ],
        sidebar: {
          // 仅在 URL 以 /examples/ 开头时显示此侧边栏
          '/examples/': [
            {
              text: '示例',
              items: [
                { text: 'Markdown 示例', link: '/examples/markdown-examples' },
                { text: 'Runtime API 示例', link: '/examples/api-examples' }
              ]
            }
          ],
          // 仅在 URL 以 /blogs/ 开头时显示此侧边栏
          '/blogs/': [
            {
              text: '博客',
              items: [
                { text: 'C# 异步和 AOP 结合时的陷阱', link: '/blogs/csharp-async-aop-trap' }
              ]
            }
          ],
          // 仅在 URL 以 /games/ 开头时显示此侧边栏
          '/games/': [
            {
              text: '休闲游戏',
              collapsed: false,
              items: [
                { text: '扫雷游戏', link: '/games/minesweeper' }
              ]
            }
          ]
        }
      }
    },

    // 英文 locale，对应 /en/ 路径
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',

      themeConfig: {
        // 英文站点的导航与侧边栏
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Examples', link: '/en/examples/markdown-examples' },
          { text: 'Blogs', link: '/en/blogs/csharp-async-aop-trap' },
          { text: 'Games', link: '/en/games/minesweeper' }
        ],
        sidebar: {
          // Only display this sidebar when the URL starts with /examples/
          '/en/examples/': [
            {
              text: 'Examples',
              items: [
                { text: 'Markdown Examples', link: '/en/examples/markdown-examples' },
                { text: 'Runtime API Examples', link: '/en/examples/api-examples' }
              ]
            }
          ],
          // Only display this sidebar when the URL starts with /blogs/
          '/en/blogs/': [
            {
              text: 'Blogs',
              items: [
                { text: 'C# Async & AOP Trap', link: '/en/blogs/csharp-async-aop-trap' }
              ]
            }
          ],
          // Only display this sidebar when the URL starts with /games/
          '/en/games/': [
            {
              text: 'Casual Games', // 休闲游戏
              collapsed: false,
              items: [
                { text: 'Minesweeper Game', link: '/en/games/minesweeper' }
              ]
            }
          ]
        }
      }
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/brokenstring314/infinitypoint-blog' },
    ]
  },
  lastUpdated: true,
  markdown: {
    math: true, // 官方推荐方式
  }
})

