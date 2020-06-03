import Vue from 'vue'
import App from './App'
import router from './router'
import * as filters from './filters'
import './scss/main.scss'

import './chartjs.conf'
import 'hchs-vue-charts'
import { ClientTable } from 'vue-tables-2'
import BootstrapVue from 'bootstrap-vue'
import VueAnalytics from 'vue-analytics'
import VueForm from 'vue-form'

// Check is production environment enabled
// Used for enabling analytics page tracking
function isProdEnv () {
  if (process.env.NODE_ENV === 'production') {
    return true
  } else {
    return false
  }
}

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(BootstrapVue)
Vue.use(window.VueCharts)
Vue.use(VueForm)
Vue.use(ClientTable, {
  orderBy: {
    ascending: false
  },
  sortIcon: {
    base: '',
    up: 'VueTables__sort-icon--asc',
    down: 'VueTables__sort-icon--desc'
  }
})
Vue.use(VueAnalytics, {
  // Replace with your Google Anaytics Tracking ID
  id: 'UA-62526832-8',
  router,
  autoTracking: {
    page: isProdEnv()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
