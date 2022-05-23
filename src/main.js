import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import icons from './FontAwesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
