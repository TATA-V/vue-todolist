import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage.vue';
import EditPage from '../pages/EditPage.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/edit',
    name: 'EditPage',
    component: EditPage,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
