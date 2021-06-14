const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home/Home.vue') },
      { path: 'producto/:idproduct', component: () => import('src/pages/ProductDetail/ProductDetail.vue') },
      { path: ':categoria/productos', component: () => import('src/pages/ProductList/ProductList.vue') },
      { path: 'search/:search', component: () => import('src/pages/SearchList/SearchList.vue') },
      { path: 'carrito', component: () => import('src/pages/Cart/Cart.vue') },
      { path: 'carrito/:idcart', component: () => import('src/pages/Cart/Cart.vue') },
      { path: 'explora', component: () => import('src/pages/Category/Categories.vue') },
    ],
  },
  {
    path: '/entra',
    component: () => import('src/layouts/AccessLayout/AccessLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Access/Login/Login.vue'),
      },
    ],
  },
  {
    path: '/registro',
    component: () => import('src/layouts/AccessLayout/AccessLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Access/Register/Register.vue'),
      },
    ],
  },
  {
    path: '/usuario/',
    component: () => import('src/layouts/UserLayout/UserLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Access/User/Details/UserDetails.vue') },
      { path: 'ajustes/notificaciones', component: () => import('src/pages/Access/User/Notifications/UserNotifications.vue') },
      { path: 'movil', component: () => import('src/pages/Access/User/UserMenuMobile/UserMenuMobile.vue') },
      { path: 'carritos', component: () => import('src/pages/Access/User/Carts/Carts.vue') },
      { path: 'favoritos', component: () => import('src/pages/Access/User/Favourite/FavouriteProducts.vue') },
    ],
  },
  {
    path: '/contacto',
    component: () => import('src/layouts/UserLayout/UserLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Access/User/Contact/Contact.vue'),
      },
    ],
  },
  {
    path: '/sobrenosotros',
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
