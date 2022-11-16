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
        <!-- <li class="mr-6 mt-6">
            <a class="text-gray-400 font-bold text-xl cursor-not-allowed" href="#">Review</a>
        </li> -->
        <li class="absolute right-2 mr-6 mt-6">
            <a @click="logout" class="text-white font-bold text-xl hover:text-yellow-800" href="#">Logout</a>
        </li>
    </ul>
</header>

<div class="p-5 pt-20 pb-5 ml-5 ">
    <a href="/user/category">
        <h5 class="pt-7 mb-2 text-3xl font-bold tracking-tight text-gray-900  hover:text-pink-400 dark:text-white">CATEGORY</h5>
    </a>
</div>

<!-- <div v-if="isLoading" class="text-xl text-slate-800 font-medium">Loading...</div> -->

<div v-if="category" class="p-10 pt-0 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    <div v-for="category in category.data" :key="category.category_id" class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
            <a href="#">
            
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{category.category_name}}</h5>
            </a>
        </div>
    </div>
</div>
</template>


<script setup>
import { onMounted, ref} from 'vue'
import { useRouter } from "vue-router"
import { useFetch } from '@vueuse/core'

const data = ref(null)
const isLoading = ref(true)
const { isFetching : isFetchingCategory, error: errorCategory, data: category } =  useFetch('http://localhost:8081/category').get().json()


// onMounted(async () => {
//   try{
//     const res = await fetch('http://localhost:8081/category')
//     if(!res.ok) throw new Error(res.statusText)
//     const json = await res.json()
//     console.log(json)
//     data.value = json?.data
//   }catch(error){
//     console.log(error.message)
//   }finally{
//     isLoading.value = false
//   }
// })

const router = useRouter();
const isWhere = ref(null);
isWhere.value = router.currentRoute;

const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};
</script>