import { createRouter, createWebHistory } from 'vue-router'
import PRIVATE_ROUTES from '@router/Private'
import PUBLIC_ROUTES from '@router/Public'

const router = createRouter({
	history: createWebHistory(
		process.env.NODE_ENV === 'production' ? '/open-chat/' : './'
	),
	routes: [...PRIVATE_ROUTES, ...PUBLIC_ROUTES],
})
export default router
