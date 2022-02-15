import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Blog from '../components/Blog.vue'
import Sample from '../components/Sample.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/sample',
    name: 'Sample',
    component: Sample
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
