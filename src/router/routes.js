const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home/Home.vue') },
      { path: 'producto/:idproducto', component: () => import('src/pages/Home/Home.vue') },
    ],
  },
  {
    path: '/login',
    component: () => import('src/layouts/AccessLayout/AccessLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Access/Login/Login.vue'),
      },
    ],
  },
  {
    path: '/register',
    component: () => import('src/layouts/AccessLayout/AccessLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Access/Register/Register.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('src/layouts/UserLayout/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Access/User/Details/UserDetails.vue'),
      },
    ],
  },
  {
    path: '/user/settings/notifications',
    component: () => import('src/layouts/UserLayout/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Access/User/Notifications/UserNotifications.vue'),
      },
    ],
  },
  {
    path: '/contact',
    component: () => import('src/layouts/UserLayout/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Access/User/Contact/Contact.vue'),
      },
    ],
  },
  {
    path: '/about',
    component: () => import('src/layouts/UserLayout/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Access/User/About/About.vue'),
      },
    ],
  },
  {
    path: '/user/mobile',
    component: () => import('src/layouts/UserLayout/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Access/User/UserMenuMobile/UserMenuMobile.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('src/pages/Error/Error404.vue'),
  },
];

export default routes;
