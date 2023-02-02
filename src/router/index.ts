import Router from 'vue-router'
import { CHAT } from '../router/Private/Chat'

const Home = { template: '<h1>Bom dia</h1>' }

const routes = [
    { path: '/', component: Home },
  ]

const router = Router.createRouter({
    history: Router.createWebHistory(),
    routes
})
export default router