<template>
  <section class="page-header">
    <div class="page-header__bg" :style="{backgroundImage: 'url(' + pageHeaderBg + ')'}"></div>
    <v-container>
      <h2>{{title}}</h2>
      <ul class="thm-breadcrumb list-unstyled ">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>-</li>
        <li>
          <span>{{crumbTitle}}</span>
        </li>
      </ul>
    </v-container>
  </section>
</template>

<script>
import pageHeaderBg from '../assets/images/backgrounds/page-header-1-1.jpg'

export default {
  name: 'PageHeader',
  props: ['title', 'crumbTitle'],
  components: {
  },
  data () {
    return ({
      pageHeaderBg
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
