import { createRouter, createWebHistory } from 'vue-router';

// user
import UserHome from '../views/UserHome.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import UserCategory from '../views/UserCategory.vue';
import UserProduct from '../views/UserProduct.vue';
import UserDetailProduct from '../views/UserDetailProduct.vue';
// admin
import AdminHome from '../views/AdminHome.vue';
import AdminViewUser from '../views/AdminViewUser.vue';
import AdminViewCategory from '../views/AdminViewCategory.vue';
import AdminViewReview from '../views/AdminViewReview.vue';
import AdminViewProduct from '../views/AdminViewProduct.vue';

import AdminUpdateCategory from '../views/AdminUpdateCategory.vue'
import AdminUpdateProduct from '../views/AdminUpdateProduct.vue'
import AdminCreateCategory from '../views/AdminCreateCategory.vue'
import AdminCreateProduct from '../views/AdminCreateProduct.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
  const routes = [    
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login',
        auth: false,
      },  
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: 'Register',
        auth: false,
      },
    },
    {
      path: '/user',
      name: 'UserHome',
      component: UserHome,
      meta: {
        title: 'Home User',
        auth: true,
      },  
    },
    {
      path: '/user/category',
      name: 'UserCategory',
      component: UserCategory,
      meta: {
        title: 'User Category',
        auth: false,
      },  
    },
    {
      path: '/user/product',
      name: 'UserProduct',
      component: UserProduct,
      meta: {
        title: 'User Product',
        auth: true,
      }, 
    },
    {
      path: '/user/product/detail/:product_id',
      name: 'UserDetailProduct',
      component: UserDetailProduct,
      meta: {
        title: 'User Detail Product',
        auth: true,
      }, 
    },
    {
      path: '/admin',
      name: 'AdminHome',
      component: AdminHome,
      meta: {
        title: 'Admin Home',
        auth: false,
      },
    },
      {
        path: '/admin/user',
        name: 'AdminViewUser',
        component: AdminViewUser,
        meta: {
          title: 'Admin View User',
          auth: false,
        },  
    },
      {
        path: '/admin/category',
        name: 'AdminViewCategory',
        component: AdminViewCategory,
        meta: {
          title: 'Admin View Category',
          auth: false,
        },  
    },
      {
      path: '/admin/review',
      name: 'AdminViewReview',
      component: AdminViewReview,
      meta: {
        title: 'Admin View Review',
        auth: false,
      },  
    },
      {
      path: '/admin/product',
      name: 'AdminViewProduct',
      component: AdminViewProduct,
      meta: {
        title: 'Admin View Product',
        auth: false,
      },  
    },
    {
      path: '/admin/product/update',
      name: 'AdminUpdateProduct',
      component: AdminUpdateProduct,
      meta: {
        title: 'Admin Update Product',
        auth: false,
      },  
    },
    {
      path: '/admin/category/update',
      name: 'AdminUpdateCategory',
      component: AdminUpdateCategory,
      meta: {
        title: 'Admin Update Category',
        auth: false,
      },  
    },
    {
      path: '/admin/product/create',
      name: 'AdminCreateProduct',
      component: AdminCreateProduct,
      meta: {
        title: 'Admin Create Product',
        auth: false,
      },  
    },
    {
      path: '/admin/category/create',
      name: 'AdminCreateCategory',
      component: AdminCreateCategory,
      meta: {
        title: 'Admin Create Category',
        auth: false,
      },  
    },
  ]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Blooming`;
  next();
});

router.beforeEach(async (to, from, next) => {
  const user = localStorage.getItem("user_token");
  if (to.matched.some((res) => res.meta.auth)) {
    if (user) {
      next();
      return;
    }
    next({ name: 'Login' });
  }
  next();
});

export default router
