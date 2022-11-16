<template>
  <header
    class="fixed top-0 left-0 z-10 flex h-12 w-full items-center justify-between bg-primary px-10 text-white"
  >
    <div class="flex">
      <a href="/home"> <Logo /> </a>
      <ul>
        <li
          class="ml-10"
          v-if="isWhere.value.path != '/' && isWhere.value.path != '/register'"
        >
          <a class="mt-10 text-xl font-semibold text-black" href="/movies"
            >Movies</a
          >
        </li>
      </ul>
    </div>
    <div
      v-if="isWhere.value.path != '/' && isWhere.value.path != '/register'"
      class="flex items-center gap-5"
    >
      <form class="relative">
        <input type="text" placeholder="Search" class="indent-2" />
        <Search class="absolute right-2 top-0 bottom-0 m-auto h-4 w-4" />
      </form>
      <div>
        <div @click="logout" class="cursor-pointer"><Setting /></div>
      </div>
    </div>
  </header>
</template>
<script setup>
import Logo from "../components/icons/Logo.vue";
import Search from "./icons/Search.vue";
import Setting from "./icons/Setting.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const isWhere = ref(null);
isWhere.value = router.currentRoute;

const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};
</script>