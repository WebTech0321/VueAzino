<template>
  <div class="gallery-card">
    <img :src="image" class="img-fluid" alt="" />
    <div class="gallery-content">
      <a
        :href="image"
        class="img-popup"
        data-attribute="SRL"
        aria-label="open image"
      >
        <img :src="image" class="img-fluid sr-only" alt="" />
        <i class="fal fa-plus"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryCard',
  props: ['image'],
  components: {
  },

  data () {
    return ({
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
