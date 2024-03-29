import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Checkout from '../views/Checkout.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
