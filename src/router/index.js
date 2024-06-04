import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import About from '../components/About.vue'
import VisitForm from '../components/VisitForm.vue'
import VisitList from '../components/VisitList.vue'
import UserRegister from '../components/UserRegister.vue'
import UserLogin from '../components/UserLogin.vue'
import VisitCounter from '@/components/VisitCounter.vue'
import VisitListCheckOut from '@/components/VisitListCheckOut.vue'


const routes = [
  {
    path: '/', name: 'HomePage', component: HomePage
  },
  {
    path: '/userlogin', name: 'UserLogin', component: UserLogin
  },
  {
    path: '/userregister', name: 'UserRegister', component: UserRegister
  },
  // {
  //   path: '/userlogin', name: 'UserLogin', component: UserLogin
  // },
  {
    path: '/about', name: 'About', component: About,
    // meta: { requiresAuth: true }
  },
  {
    path: '/visitform', name: 'VisitForm', component: VisitForm,
    // meta: { requiresAuth: true }
  },
  {
    path: '/visitlist', name: 'VisitList', component: VisitList,
    // meta: { requiresAuth: true }
  },
  {
    path: '/visitcounter', name: 'VisitCounter', component: VisitCounter,
    // meta: { requiresAuth: true }
  },
  {
    path: '/visitlistcheckout', name: 'VisitListCheckOut', component: VisitListCheckOut,
    // meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//guardian global para proteger las rutas
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token');
    if (!token) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
