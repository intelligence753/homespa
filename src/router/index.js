import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/about',
        component: () => import('../views/About.vue'),
      },
      {
        path: '/service',
        component: () => import('../views/Service.vue'),
      },
      {
        path: '/course/:id',
        component: () => import('../views/Course.vue'),
      },
      {
        path: '/login',
        component: () => import('../views/LoginView.vue'),
      },
      {
        path: '/registration',
        component: () => import('../views/RegistrationView.vue'),
      },
      // {
      //   path: '/product/:id',
      //   component: () => import('../views/ProductView.vue'),
      // },
      // {
      //   path: '/cart',
      //   component: () => import('../views/CartView.vue'),
      // },
    ],
    // },
    // {
    //   path: '/login',
    //   component: () => import('../views/LoginView.vue'),
    // },
    // {
    //   path: '/admin',
    //   component: () => import('../views/DashboardView.vue'),
    //   children: [
    //     {
    //       path: '/admin/products',
    //       component: () => import('../views/DashboardProducts.vue'),
    //     },
    //   ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;
