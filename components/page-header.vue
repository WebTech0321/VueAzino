<template>
  <section class="page-header">
    <div class="page-header__bg" :style="{backgroundImage: 'url(`' + pageHeaderBg + '`)'}"></div>
    <div class="container">
      <h2>{{title}}</h2>
      <ul class="thm-breadcrumb list-unstyled ">
        <li>
          <NuxtLink to="/">
            <a>Home</a>
          </NuxtLink>
        </li>
        <li>-</li>
        <li>
          <span>{{crumbTitle}}</span>
        </li>
      </ul>
    </div>
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
