<template>
  <header class="main-header">
    <v-container>
      <div class="inner-container">
        <v-row no-gutters>
          <v-col sm="12" md="12" lg="12" xl="2">
            <div class="logo-box">
              <nuxt-link to="/" aria-label="logo image">
                <img :src="logoDark" width="101" alt="" />
              </nuxt-link>
              <span class="fa fa-bars mobile-nav__toggler"></span>
            </div>
          </v-col>
          <v-col sm="12" md="12" lg="12" xl="10" class="d-none d-md-none d-lg-none d-xl-block">
            <div class="main-header__top">
              <p>Welcome to non profit charity platform</p>
              <div class="main-header__social">
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
            <nav class="main-menu dynamic-radius">
              <NavLinks />
            </nav>

            <div class="main-header__info">
              <ul class="list-unstyled main-header__info-list">
                <li>
                  <i class="azino-icon-email"></i>
                  <a href="mailto:needhelp@azino.com">needhelp@azino.com</a>
                </li>
                <li>
                  <i class="azino-icon-telephone"></i>
                  <a href="tel:666-888-0000">666 888 0000</a>
                </li>
              </ul>
              <div class="main-header__language">
                <div class="main-header__language-image mr-1">
                  <flag :iso="currentLang.flag" :squared="false" />
                </div>
                <label htmlFor="language-header" class="sr-only">
                  select language
                </label>
                <select class="selectpicker" v-model="language" @change="onChangeLanguage">
                  <option v-for="lang in $store.state.locales" :key="lang.language" :value="lang.language">
                    {{lang.title}}
                  </option>
                </select>
                <i class="fa fa-angle-down"></i>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </header>
</template>

<script>
import logoDark from '../../assets/images/logo-dark.png'
import NavLinks from './nav-links'

export default {
  name: 'HeaderOne',
  components: {
    NavLinks
  },

  mounted () {
    this.mobileMenu()
  },
  updated () {
    this.mobileMenu()
  },
  computed: {
    currentLang () {
      return this.$store.state.locale
    }
  },
  data () {
    return ({
      logoDark,
      language: this.$store.state.locale.language
    })
  },

  methods: {
    onChangeLanguage () {
      this.$i18n.locale = this.language
      this.$store.commit('SET_LANG', this.language)
    },
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
