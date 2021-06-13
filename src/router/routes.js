const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home/Home.vue') },
      { path: 'producto/:idproduct', component: () => import('src/pages/ProductDetail/ProductDetail.vue') },
      { path: 'productos/:idproduct', component: () => import('src/pages/ProductList/ProductList.vue') },
      { path: 'carrito', component: () => import('src/pages/Cart/Cart.vue') },
      { path: 'carrito/:idcarrito', component: () => import('src/pages/Cart/Cart.vue') },
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('src/pages/Error/Error404.vue'),
  },
];

export default routes;
