import { createApp } from 'vue'
import '@assets/css/globals.scss'
import App from './App.vue'
import router from '@router/index'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faPaperPlane)

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(router)
	.mount('#app')
