import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import FileUploader from 'vuetify-file-uploader'
import Playground from "./components/vuetifyFileUploader/Playground";
import Home from "./components/Home";

Vue.config.productionTip = false

Vue.use(FileUploader)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/vuetify-file-uploader', component: Playground },
]
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes // short for `routes: routes`
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
