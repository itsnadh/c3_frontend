<template>
<header class="mb-10 header bg-pink-500 w-full fixed">
    <ul class="flex">
        <li class="mr-6 mt-6 ml-6 h-14">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="/user">Home</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="/user/category">Category</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="/user/product">Product</a>
        </li>
    </ul>
</header>

<div class="p-5 pt-20 pb-5 ml-5 ">
    <a href="/user/product">
        <h5 class="pt-7 mb-2 text-3xl font-bold tracking-tight text-gray-900  hover:text-pink-400 dark:text-white">PRODUCT</h5>
    </a>
</div>


<div  v-if="product" class="p-10 pt-0 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
  <div v-for="product in product.data" :key="product.product_id" class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
          <img class="rounded-t-lg" :src="product.product_image" alt="" />
      </a>
      <div class="p-5">
          <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{product.product_name}}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{product.product_desc}}</p>
          <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
      </div>
  </div>
</div>
</template>
<script setup>
import { onMounted, ref} from 'vue'
import { useRouter } from "vue-router";
import { useFetch } from '@vueuse/core'

const { isFetching : isFetchingProduct, error: errorProduct, data: product } =  useFetch('http://localhost:8081/product').get().json()
// const { isFetching : isFetchingCategory, error: errorCategory, data: category } =  useFetch('http://localhost:8081/category').get().json()

console.log(product)
// console.log(category)

const router = useRouter();
const isWhere = ref(null);
isWhere.value = router.currentRoute;

const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};
</script>