import { createRouter, createWebHistory } from 'vue-router'

const Home = () =>
  import ('views/home/Home')
const Classify = () =>
  import ('views/classify/Classify')
const Cart = () =>
  import ('views/cart/Cart')
const My = () =>
  import ('views/my/My')
const Detail = () =>
  import ('views/detail/Detail')

const routes = [{
  path: '',
  redirect: '/home',
}, {
  path: '/home',
  component: Home,
}, {
  path: '/cart',
  component: Cart,
}, {
  path: '/classify',
  component: Classify
}, {
  path: '/my',
  component: My
}, {
  path: '/detail',
  component: Detail
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router