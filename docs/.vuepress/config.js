module.exports = {
  base:"/vuePress-blog/",
  title: "kovlento",
  description: "Stay Hungry Stay Foolish.",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于我', link: '/about/' },
      { text: 'Github', link: 'https://github.com/kovlento' } 
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    displayAllHeaders: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  ga: "UA-121610926-1"
}