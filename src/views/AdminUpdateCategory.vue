<template>
<header class="mb-10 header bg-pink-500 w-full fixed">
    <ul class="flex">
        <li class="mr-6 mt-6 ml-6 h-14">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="#">Home</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-black font-bold text-xl hover:text-yellow-800" href="#">Category</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="#">Product</a>
        </li>
        <li class="mr-6 mt-6">
            <a class="text-white font-bold text-xl hover:text-yellow-800" href="#">Review</a>
        </li>
        <li class="absolute right-2 mr-6 mt-6">
            <a @click="logout" class="text-white font-bold text-xl hover:text-yellow-800" href="#">Logout</a>
        </li>
    </ul>
</header>

<div class="">
    <div class="max-w-2xl px-10 my-4 py-3 bg-slate-100 rounded-lg shadow-md">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form class="space-y-4 md:space-y-6" action="#">
            <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">Update Category</a>
                <div>
                    <label for="rating" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Category Name</label>
                    <input type="rating" name="rating" id="rating" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category Name" required="">
                </div>
                <button type="submit" class="bg-pink-500 text-black w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update</button>
            </form>
        </div>
    </div>
</div>
</template>
