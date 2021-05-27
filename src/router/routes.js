const routes = [
  {
    path: "/",
    component: () => import("src/layouts/MainLayout/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Index/Index.vue") },
      {
        path: "producto/:idproducto",
        component: () => import("src/pages/Index/Index.vue")
      },
      { path: "login", component: () => import("src/pages/Access/Access.vue") },
      {
        path: "register",
        component: () => import("src/pages/Access/Access.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("src/pages/Error/Error404.vue")
  }
];

export default routes;
