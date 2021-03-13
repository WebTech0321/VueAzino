<template>
  <div class="block-title">
    <p>
      <img :src="heart" width="15" alt="" />
      {{tagLine}}
    </p>
    <h3><span v-html="title"></span></h3>
  </div>
</template>

<script>
export default {
  name: 'BlockTitle',
  props: ['tagLine', 'title'],
  components: {
  },

  data () {
    return ({
      heart : require('~/assets/images/shapes/heart-2-1.png')
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
