<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <div class="min-[1300px]:px-[65px] min-[1300px]:py-[35px] max-w-[1740px] mx-auto max-[1300px]:px-[1rem] max-[1300px]:py-4" id="home">
    <Header />

    <RouterView />

    <Footer />
  </div>
</template>