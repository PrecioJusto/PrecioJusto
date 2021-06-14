const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home/Home.vue') },
      { path: 'producto/:idproduct', component: () => import('src/pages/ProductDetail/ProductDetail.vue') },
      { path: ':categoria/productos', component: () => import('src/pages/ProductList/ProductList.vue') },
      { path: 'carrito', component: () => import('src/pages/Cart/Cart.vue') },
      { path: 'carrito/:idcart', component: () => import('src/pages/Cart/Cart.vue') },
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
    path: '/user/',
    component: () => import('src/layouts/UserLayout/UserLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Access/User/Details/UserDetails.vue') },
      { path: 'settings/notifications', component: () => import('src/pages/Access/User/Notifications/UserNotifications.vue') },
      { path: 'mobile', component: () => import('src/pages/Access/User/UserMenuMobile/UserMenuMobile.vue') },
      { path: 'carts', component: () => import('src/pages/Access/User/Carts/Carts.vue') },
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('src/pages/Error/Error404.vue'),
  },
];

export default routes;
