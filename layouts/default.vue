<template>
  <v-app>
    <div id="wrapper" class="page-wrapper">
      <nuxt />
    </div>
    <MobileNav />
    <SearchPopup />
  </v-app>
</template>

<script>
import MobileNav from '../components/mobile-nav.vue'
import SearchPopup from '../components/search-popup.vue'

export default {
  name: 'Layout',
  components: {
    MobileNav,
    SearchPopup
  }
}
</script>

<style>
@import '../assets/css/animate.min.css';
@import '../assets/css/azino-icons.css';
@import '../assets/css/fontawesome-all.min.css';
@import '../assets/css/port.css';
@import '../assets/css/main.css';
@import 'swiper/css/swiper.css'
</style>
