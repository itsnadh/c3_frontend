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

<!-- component -->
<div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
    <div class="flex flex-col md:space-y-0 items-center justify-center md:flex-row md:space-x-5 space-y-3">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <!-- 1 card -->
            <router-link :to="{ name: 'AdminUser'}">
            <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                <div class=" text-white flex items-center absolute rounded-full py-6 px-6 shadow-xl bg-pink-300 left-4 -top-6">
                </div>
                <div class="mt-8">
                    <p class="text-xl font-semibold my-2">User</p>
                </div>
            </div>
            </router-link>
            <router-link :to="{ name: 'AdminCategory'}">
            <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                <div class=" text-white flex items-center absolute rounded-full py-6 px-6 shadow-xl bg-yellow-300 left-4 -top-6">
                </div>
                <div class="mt-8">
                    <p class="text-xl font-semibold my-2">Category</p>
                </div>
            </div>
            </router-link>
            <router-link :to="{ name: 'AdminProduct'}">
            <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                <div class=" text-white flex items-center absolute rounded-full py-6 px-6 shadow-xl bg-green-300 left-4 -top-6">
                </div>
                <div class="mt-8">
                    <p class="text-xl font-semibold my-2">Product</p>
                </div>
            </div>
            </router-link>
            <router-link :to="{ name: 'AdminReview'}">
            <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl hover:text-pink">
                <div class=" text-white flex items-center absolute rounded-full py-6 px-6 shadow-xl bg-orange-300 left-4 -top-6">
                </div>
                <div class="mt-8">
                    <p class="text-xl font-semibold my-2">Review</p>
                </div>
            </div>
            </router-link>
        </div>
    </div>
</div>

</template>

<script setup>
import { onMounted, ref} from 'vue'
import { useRouter } from "vue-router";

const data = ref(null)
const isLoading = ref(true)

onMounted(async () => {
  try{
    const res = await fetch('http://localhost:8081/category')
    if(!res.ok) throw new Error(res.statusText)
    const json = await res.json()
    console.log(json)
    data.value = json?.data
  }catch(error){
    console.log(error.message)
  }finally{
    isLoading.value = false
  }
})

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