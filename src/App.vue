<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import UserHome from './views/UserHome.vue'
import UserCategory from './views/UserCategory.vue'
import UserProduct from './views/UserProduct.vue'
import UserDetailProduct from './views/UserDetailProduct.vue'

// view admin
import AdminHome from './views/AdminHome.vue'
import AdminViewUser from './views/AdminViewUser.vue'
import AdminViewCategory from './views/AdminViewCategory.vue'
import AdminViewReview from './views/AdminViewReview.vue'
import AdminViewProduct from './views/AdminViewProduct.vue'

//update admin
import AdminUpdateCategory from './views/AdminUpdateCategory.vue'
import AdminUpdateProduct from './views/AdminUpdateProduct.vue'

//create admin
import AdminCreateCategory from './views/AdminCreateCategory.vue'
import AdminCreateProduct from './views/AdminCreateProduct.vue'

</script>

<template>
<!-- <Header/> -->
<RouterView class="flex min-1"/>
<div class="container mx-auto px-4">
</div>
<!-- <Footer/> -->
</template>