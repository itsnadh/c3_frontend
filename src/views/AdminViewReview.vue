<template>
<header class="mb-10 header bg-pink-500 w-full fixed">
    <ul class="flex">
        <li class="mr-6 mt-6 ml-6 h-14">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="/admin">Home</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="#">Category</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="#">Product</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-black font-bold text-xl hover:text-yellow-800" href="#">User</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="#">Review</a>
        </li>
        <li class="absolute right-2 mr-6 mt-6">
            <a @click="logout" class="text-white font-bold text-xl hover:text-yellow-800" href="#">Logout</a>
        </li>
    </ul>
</header>

<div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                <h1 class="mt-7 mb-2 text-2xl font-bold text-center">Review Table</h1>
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">ID</th>
                                <th class="py-3 px-6 text-left">ID User</th>
                                <th class="py-3 px-6 text-left">Name</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody v-if="data" class="text-gray-600 text-sm font-light">
                            <tr v-for="item in data" :key="item.user_id" class="border-b border-gray-200 hover:bg-gray-100">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                        </div>
                                        <span class="font-medium">{{item.user_id}}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{item.user_name}}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{item.user_email}}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div @click="handleDelete(item.user_id)" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
    const res = await fetch('http://localhost:8081/user')
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
  const confirm = window.confirm("Are you sure want to delete this user?");
  if (confirm) {
    axios
      .delete(`${import.meta.env.VITE_APP_BASE_URL}/user/${id}`)
      .then((res) => {
        window.alert("User Deleted!");
        // window.location.href = "/adminmovie";
      })
      .catch((err) => console.log(err));
  }
};

</script>