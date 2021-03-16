<template>
  <div class="main-header__two">
    <div class="main-header__top">
      <v-container>
        <p>Welcome to non profit charity platform</p>
        <div class="main-header__social">
          <a href="#" aria-label="twitter">
            <i class="fab fa-twitter" />
          </a>
          <a href="#" aria-label="facebook">
            <i class="fab fa-facebook-square" />
          </a>
          <a href="#" aria-label="pinterest">
            <i class="fab fa-pinterest-p" />
          </a>
          <a href="#" aria-label="instagram">
            <i class="fab fa-instagram" />
          </a>
        </div>
      </v-container>
    </div>
    <div class="header-upper">
      <v-container>
        <div class="logo-box">
          <nuxt-link to="/">
            <img :src="logoDark" width="101" alt="">
          </nuxt-link>
          <span class="fa fa-bars mobile-nav__toggler" />
        </div>

        <div class="header-info">
          <div class="header-info__box">
            <i class="azino-icon-email1" />
            <div class="header-info__box-content">
              <h3>Email</h3>
              <p>
                <a href="mailto:needhelp@azino.com">needhelp@azino.com</a>
              </p>
            </div>
          </div>
          <div class="header-info__box">
            <i class="azino-icon-calling" />
            <div class="header-info__box-content">
              <h3>Phone</h3>
              <p>
                <a href="tel:666-888-0000">666 888 0000</a>
              </p>
            </div>
          </div>
          <div class="header-info__box">
            <i class="azino-icon-address" />
            <div class="header-info__box-content">
              <h3>Visit</h3>
              <p>88 Broklyn Golden Street, USA</p>
            </div>
          </div>
        </div>
      </v-container>
    </div>
    <nav class="main-menu">
      <v-container>
        <NavLinks extra-class-name="dynamic-radius" />
        <nuxt-link to="/contact" class="thm-btn dynamic-radius">
          Donate Now
        </nuxt-link>
      </v-container>
    </nav>
  </div>
</template>

<script>
import logoDark from '../../assets/images/logo-dark.png'
import NavLinks from './nav-links'

export default {
  name: 'HeaderTwo',
  components: {
    NavLinks
  },
  data () {
    return ({
      logoDark
    })
  },
  mounted () {
    this.mobileMenu()
  },
  updated () {
    this.mobileMenu()
  },
  methods: {
    mobileMenu: () => {
      document
        .querySelector('.mobile-nav__toggler')
        .addEventListener('click', function (e) {
          document
            .querySelector('.mobile-nav__wrapper')
            .classList.toggle('expanded')
          e.preventDefault()
        })
      // search toggler
      const searchCloser = document.querySelectorAll('.search-toggler')
      searchCloser.forEach((searchCloserBtn) => {
        searchCloserBtn.addEventListener('click', function (e) {
          document.querySelector('.search-popup').classList.toggle('active')
          e.preventDefault()
        })
      })

      // Close Mobile Menu
      const sideMenuCloser = document.querySelectorAll(
        '.side-menu__close-btn, .side-menu__block-overlay'
      )

      sideMenuCloser.forEach((sideMenuCloserBtn) => {
        sideMenuCloserBtn.addEventListener('click', function (e) {
          document
            .querySelector('.mobile-nav__wrapper')
            .classList.remove('expanded')
          e.preventDefault()
        })
      })
    }
  }
}
</script>

<style>
</style>
