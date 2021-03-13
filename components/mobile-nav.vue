<template>
  <div class="mobile-nav__wrapper">
    <div class="mobile-nav__overlay side-menu__block-overlay"></div>
    <div class="mobile-nav__content">
      <span class="mobile-nav__close side-menu__close-btn">
        <i class="far fa-times"></i>
      </span>

      <div class="logo-box">
        <nuxt-link to="/" aria-label="logo image">
          <img :src="logoLight" width="101" alt="" />
        </nuxt-link>
      </div>
      <div class="mobile-nav__container">
        <NavLinks />
      </div>

      <ul class="mobile-nav__contact list-unstyled">
        <li>
          <i class="azino-icon-email"></i>
          <a href="mailto:needhelp@azino.com">needhelp@azino.com</a>
        </li>
        <li>
          <i class="azino-icon-telephone"></i>
          <a href="tel:666-888-0000">666 888 0000</a>
        </li>
      </ul>
      <div class="mobile-nav__top">
        <div class="mobile-nav__language">
          <img :src="flag1" alt="" />
          <label class="sr-only" htmlFor="language-select">
            select language
          </label>
          <select class="selectpicker" id="language-select">
            <option value="english">English</option>
            <option value="arabic">Arabic</option>
          </select>
          <i class="fa fa-caret-down select-icon"></i>
        </div>
        <div class="mobile-nav__social">
          <a href="#" aria-label="twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="facebook">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="#" aria-label="pinterest">
            <i class="fab fa-pinterest-p"></i>
          </a>
          <a href="#" aria-label="instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoLight from '../assets/images/logo-light.png'
import flag1 from '../assets/images/resources/flag-1-1.jpg'

import NavLinks from './header/nav-links'

export default {
  name: 'MobileNav',
  components: {
    NavLinks
  },

  data () {
    return ({
      logoLight,
      flag1
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
