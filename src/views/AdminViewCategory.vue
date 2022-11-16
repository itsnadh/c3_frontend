<template>
<header class="mb-10 header bg-pink-500 w-full fixed">
    <ul class="flex">
       <li class="mr-6 mt-6 ml-6 h-14">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="/admin">Home</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="/admin/category">Category</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="/admin/product">Product</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="/admin/review">Review</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="/admin/user">User</a>
        </li>
        <li class="absolute right-2 mr-6 mt-6">
            <a @click="logout" class="text-white font-bold text-xl hover:text-yellow-800" href="#">Logout</a>
        </li>
    </ul>
</header>

<div class="overflow-x-auto">
    <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
        <div class="w-full lg:w-5/6">
        <h1 class="mt-7 mb-2 text-2xl font-bold text-center">CATEGORY TABLE</h1>
            <div class="bg-white shadow-md rounded my-6">
            <!-- <h1 class="mt-7 mb-2 text-2xl font-bold text-center">CATEGORY TABLE</h1> -->
            <table class="min-w-max w-full table-auto">
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left">ID</th>
                        <th class="py-3 px-6 text-left">Category Name</th>
                        <th class="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody v-if="category" class="text-gray-600 text-sm font-light">
                    <tr v-for="category in category.data" :key="category.category_id" class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                            <div class="flex items-center">
                                <div class="mr-2">
                                </div>
                                <span class="font-medium">{{category.category_id}}</span>
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left">
                            <div class="flex items-center">
                                <span>{{category.category_name}}</span>
                            </div>
                        </td>
                        <td class="py-3 px-6 text-center">
                            <div class="flex item-center justify-center">
                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <a href="/admin/category/create" type="submit" class="bg-pink-500 text-black w-auto bg-primary-600 hover:text-white focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue dark:hover:bg-white-700 dark:focus:ring-primary-800">New Category
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

const handleDelete = (id) => {
  const confirm = window.confirm("Are you sure want to delete this category?");
  if (confirm) {
    axios
      .delete(`${import.meta.env.VITE_APP_BASE_URL}/category/${id}`)
      .then((res) => {
        window.alert("Category Deleted!");
        // window.location.href = "/adminmovie";
      })
      .catch((err) => console.log(err));
  }
};

</script>