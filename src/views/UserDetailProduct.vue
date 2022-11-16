<template>
<header class="mb-10 header bg-pink-500 w-full">
    <ul class="flex">
        <li class="mr-6 mt-6 ml-6 h-14">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="#">Home</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="#">Category</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="#">Product</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-gray-400 font-bold text-xl cursor-not-allowed" href="#">Review</a>
        </li>
    </ul>
</header>

<div v-if="product.data"  class="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-slate-100 bg-white">
    <div class="w-full md:w-1/3 bg-white grid place-items-center">
        <img :src="product.data.product_image" alt="tailwind logo" class="rounded-xl" />
    </div>
    <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <h3 class="font-black text-gray-800 md:text-3xl text-xl">{{product.data.product_name}}</h3>
            <p class="text-xl font-black text-gray-600">
            {{product.data.product_price}}
        </p>
        <div class="flex justify-between item-center">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p class="text-gray-800 font-bold text-2xl ml-1">
                    {{product.data.product_rating}}
                    <span class="text-gray-500 font-normal">(76 reviews)</span>
                </p>
            </div>
        </div>
        <p class="md:text-lg text-gray-500 text-base">{{product.data.product_desc}}</p>
        
    </div>
</div>

<div class="grid grid-cols-2 gap-2">
    <!-- COMMENTS -->
    <div v-if="review.data" class="">
        <div v-for="review in review.data" :key="review.review_id" class="max-w-2xl px-10 my-4 py-6 bg-slate-100 rounded-lg shadow-md">
            <div class="flex justify-between items-center"></div>
            <div class="mt-0 review">
                <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#"></a>
                <p style="height: 30px; overflow: hidden;" data-expanded="false" class="review-text mt-2 text-gray-600">{{review.review_desc}}</p>
                <button id="btnRead" @click.self="toggleExpand" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700">
                Read more
                </button>
            </div>
        </div>
    </div>
    <!-- FORM -->
    <div class="">
        <div class="max-w-2xl px-10 my-4 py-3 bg-slate-100 rounded-lg shadow-md">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form class="space-y-4 md:space-y-6" action="#">
                <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">Post Review</a>
                    <div>
                        <label for="rating" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                        <input type="rating" name="rating" id="rating" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating 1-5" required="">
                    </div>
                    <div>
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Review</label>
                        <input type="description" name="description" id="description" placeholder="Review" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                    </div>
                    <button type="submit" class="bg-pink-500 text-white w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue dark:hover:bg-primary-700 dark:focus:ring-primary-800">Review</button>
                </form>
            </div>
        </div>
    </div>

</div>

 
</template>


<script setup>
import { onMounted, ref} from 'vue'
import { useRouter } from "vue-router";
import { useFetch } from '@vueuse/core'
import { useRoute } from "vue-router";

const { params: { product_id } } = useRoute()
// const { isFetching : isFetchingCategory, error: errorCategory, data: category } =  useFetch(`${import.meta.env.VITE_APP_BASE_URL}/category`).get().json()
const { isFetching : isFetchingProduct, error: errorProduct, data: product } =  useFetch(`${import.meta.env.VITE_APP_BASE_URL}/product/${product_id}`).get().json()
const { isFetching : isFetchingReview, error: errorReview, data: review } =  useFetch(`${import.meta.env.VITE_APP_BASE_URL}/review`).get().json()


console.log(product)
// console.log(category)

var btnText = document.getElementById("btnRead");
console.log(btnText)

const router = useRouter();
const isWhere = ref(null);
isWhere.value = router.currentRoute;

const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};

function toggleExpand(event){
    const reviewTextEl = event.target.closest('.review').querySelector('.review-text')
    if(reviewTextEl.dataset.expanded === "true"){
        reviewTextEl.style.height = '30px'
        reviewTextEl.style.overflow = 'hidden'
        reviewTextEl.setAttribute('data-expanded', false)
        btnText.innerHTML = "Read More"
    }else{
        console.log('helo')
        reviewTextEl.style.height = 'auto'
        reviewTextEl.style.overflow = 'visible'
        reviewTextEl.setAttribute('data-expanded', true)
        btnRead.innerHTML = "Read Less"
    }

}
</script>