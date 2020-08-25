import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    // name: 'Index'
    // component: Index
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../components/MyHomePage.vue'),
    redirect: '/icenter',
    children: [
      {
        path: '/icenter', // 首页
        component: () => import('../views/body.vue'),
        name:"Index",
      },
      {
        path: '/icenter/news', // 新闻页
        component: () => import('../views/news.vue'),
        name:"News",
      },
      {
        path: '/icenter/news/content', // 新闻详情页
        component: () => import('../views/newscontent.vue'),
        name:"NewsContent",
      },
      {
        path: '/icenter/jobs', // 求职页
        component: () => import('../views/jobs.vue'),
        name:"Jobs",
      },
      {
        path: '/icenter/product', // 产品页
        component: () => import('../views/product.vue'),
        name:"Product",
      },
      {
        path: '/icenter/prodlist', // 产品列表
        component: () => import('../views/productlist.vue'),
        name:"Productlist",
      },
      {
        path: '/icenter/video', // 视频
        component: () => import('../views/video.vue'),
        name:"Video",
      },
      {
        path: '/icenter/desc', // 视频
        component: () => import('../views/desc.vue'),
        name:"Desc",
      },
      {
        path: '/icenter/party', // 视频
        component: () => import('../views/party.vue'),
        name:"Party",
      }
    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
