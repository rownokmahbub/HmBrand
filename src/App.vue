<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import PopularCategory from './components/PopularCategory.vue';
</script>

<template>
  <v-app>
 <Navbar/>
 <Hero/>
 <PopularCategory/>
</v-app>
 
</template>

