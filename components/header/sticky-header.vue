<template>
  <div class="stricky-header stricked-menu" :class="{'stricky-fixed' : sticky}">
    <div class="container">
      <div class="logo-box">
        <NuxtLink to="/">
          <a aria-label="logo image">
            <img :src="logoLight" width="101" alt="" />
          </a>
        </NuxtLink>
      </div>
      <div class="sticky-header__content">
        <NavLinks />
      </div>
    </div>
  </div>
</template>

<script>
import logoLight from '../../assets/images/logo-light.png'
import NavLinks from './nav-links'

export default {
  name: 'StickyHeader',
  props: ['extraClassName'],
  components: {
    NavLinks
  },
  mounted () {
    console.log('mounted')
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    console.log('unmounted')
    window.removeEventListener('scroll', this.handleScroll)
  },
  data () {
    return ({
      sticky: false,
      logoLight
    })
  },

  methods: {
    handleScroll () {
      if (window.scrollY > 130) {
        this.sticky = true
      } else if (window.scrollY < 130) {
        this.sticky = false
      }
    }
  }
}
</script>

<style>
</style>
