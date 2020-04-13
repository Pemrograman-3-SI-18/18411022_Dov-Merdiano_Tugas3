
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home/DataBuku.vue') },
      { path: 'inputdatabuku', component: () => import('pages/Home/InputDataBuku.vue') },
      { path: 'datatransaksi', component: () => import('pages/Home/DataTransaksi.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegistLayout.vue'),
    children: [
      { path: 'auth/Login', component: () => import('pages/Users/Login.vue') },
      { path: 'auth/Registrasi', component: () => import('pages/Users/Registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
