import { createApp } from 'vue'
import '@assets/css/globals.scss'
import App from './App.vue'
import router from '@router/index'

import { library } from '@fortawesome/fontawesome-svg-core'

import { createPinia } from 'pinia'

import { MotionPlugin } from '@vueuse/motion'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import {
	faVideo,
	faPhoneAlt,
	faEllipsisV,
	faChevronLeft,
	faCircle,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPaperPlane)
library.add(faVideo)
library.add(faPhoneAlt)
library.add(faChevronLeft)
library.add(faEllipsisV)
library.add(faCircle)
library.add(faMagnifyingGlass)

const pinia = createPinia()

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(router)
	.use(pinia)
	.use(MotionPlugin)
	.mount('#app')
