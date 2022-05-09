import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/HelloWorld.vue';
import EmployeDetail from '../components/dashboard/EmployeDetails.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/emp/:id',
    name: 'employee',
    component: EmployeDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
