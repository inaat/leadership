<template>
  <div class="big-wrapper">
     <nav-bar />
    <hero />
    <services />
      <footer-content />
  </div>
</template>

<script>
import NavBar from '@/components/Front/Header/Navbar.vue';
import Hero from '@/components/Front/Home/Hero.vue';
import Services from '@/components/Front/Home/Services.vue';
import FooterContent from '@/components/Front/Footer/FooterContent.vue';

export default {
  name: "landing",
  components: {
    Hero,FooterContent,NavBar,Services
  },
};
</script>

<style>
</style>