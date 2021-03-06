import Vue from 'vue'
import '@/assets/vendor/nucleo/css/nucleo.css'
import '@/assets/scss/argon.scss'
import '@/node_modules/font-awesome/css/font-awesome.css'
import globalComponents from './globalComponents'
import globalDirectives from './globalDirectives'
import SidebarPlugin from '@/components/SidebarPlugin/index'
import NotificationPlugin from '@/components/NotificationPlugin/index'

Vue.use(globalComponents)
Vue.use(globalDirectives)
Vue.use(SidebarPlugin)
Vue.use(NotificationPlugin)
