<template>
  <div className="block-title">
    <p>
      <img :src="heart" width="15" alt="" />
      {{tagLine}}
    </p>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
import heart from '../assets/images/shapes/heart-2-1.png'
export default {
  name: 'BlockTitle',
  props: ['tagLine', 'title'],
  components: {
  },

  data () {
    return ({
      heart
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
