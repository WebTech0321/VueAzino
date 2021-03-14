<template>
  <section class="gallery-page pt-120 pb-120">
    <div class="container">
      <div class="gallery-3-col">
        <GalleryCard :image="galleryImage1" />
        <GalleryCard :image="galleryImage2" />
        <GalleryCard :image="galleryImage3" />
        <GalleryCard :image="galleryImage4" />
        <GalleryCard :image="galleryImage5" />
        <GalleryCard :image="galleryImage6" />
        <GalleryCard :image="galleryImage7" />
        <GalleryCard :image="galleryImage8" />
        <GalleryCard :image="galleryImage9" />
      </div>
    </div>
  </section>
</template>

<script>
import galleryImage1 from '../../assets/images/gallery/gallery-1-1.jpg'
import galleryImage2 from '../../assets/images/gallery/gallery-1-2.jpg'
import galleryImage3 from '../../assets/images/gallery/gallery-1-3.jpg'
import galleryImage4 from '../../assets/images/gallery/gallery-1-4.jpg'
import galleryImage5 from '../../assets/images/gallery/gallery-1-5.jpg'
import galleryImage6 from '../../assets/images/gallery/gallery-1-6.jpg'
import galleryImage7 from '../../assets/images/gallery/gallery-1-7.jpg'
import galleryImage8 from '../../assets/images/gallery/gallery-1-8.jpg'
import galleryImage9 from '../../assets/images/gallery/gallery-1-9.jpg'
import GalleryCard from './gallery-card'

export default {
  name: 'GalleryPage',
  components: {
    GalleryCard
  },

  data () {
    return ({
      galleryImage1,
      galleryImage2,
      galleryImage3,
      galleryImage4,
      galleryImage5,
      galleryImage6,
      galleryImage7,
      galleryImage8,
      galleryImage9
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
