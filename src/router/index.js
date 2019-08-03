import VueRouter from "vue-router";
import home from '@page/home'
import example from '@page/example'

const routes = [
  { path: '/home', component: home },
  { path: '/exp', component: example },
  { path: '/', component: home },
]
const router = new VueRouter({
  routes
})

export default router