<template>
  <v-app>
    <div class="page-wrapper" id="wrapper">
      <nuxt/>
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
  },
  mounted () {
    this.handleRadius()
  },
  updated () {
    this.handleRadius()
  },
  methods: {
    handleRadius () {
      const dynamicRadius = document.querySelectorAll('.dynamic-radius')
      dynamicRadius.forEach(function (btn) {
        const btnHeight = btn.offsetHeight
        btn.style.borderBottomLeftRadius = btnHeight / 2 + 'px'
        btn.style.borderTopLeftRadius = btnHeight / 2 + 'px'
      })
    }
  }
}
</script>

<style>
@import '../assets/css/animate.min.css';
@import '../assets/css/azino-icons.css';
@import '../assets/css/fontawesome-all.min.css';
@import '../assets/css/main.css';
@import '../assets/css/port.css';
@import 'swiper/swiper-bundle.min.css';
</style>
