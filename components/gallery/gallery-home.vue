<template>
  <section class='gallery-home-one'>
    <div class="container-fluid">
      <Swiper :options="galleryOptions">
        <SwiperSlide>
          <GalleryCard :image="galleryImage1" />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard :image="galleryImage2" />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard :image="galleryImage3" />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard :image="galleryImage4" />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard :image="galleryImage5" />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard :image="galleryImage1" />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard :image="galleryImage2" />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard :image="galleryImage3" />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard :image="galleryImage4" />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard :image="galleryImage5" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script>
import galleryImage1 from '../../assets/images/gallery/gallery-3-1.jpg'
import galleryImage2 from '../../assets/images/gallery/gallery-3-2.jpg'
import galleryImage3 from '../../assets/images/gallery/gallery-3-3.jpg'
import galleryImage4 from '../../assets/images/gallery/gallery-3-4.jpg'
import galleryImage5 from '../../assets/images/gallery/gallery-3-5.jpg'
import GalleryCard from './gallery-card'

const galleryOptions = {
  spaceBetween: 100,
  slidesPerView: 4,
  autoplay: { delay: 5000 },
  breakpoints: {
    0: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    425: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 2
    },
    767: {
      spaceBetween: 30,
      slidesPerView: 2
    },
    991: {
      spaceBetween: 20,
      slidesPerView: 3
    },
    1289: {
      spaceBetween: 20,
      slidesPerView: 4
    },
    1440: {
      spaceBetween: 20,
      slidesPerView: 5
    }
  }
}
export default {
  name: 'GalleryHome',
  components: {
    GalleryCard
  },

  data () {
    return ({
      galleryOptions,
      galleryImage1,
      galleryImage2,
      galleryImage3,
      galleryImage4,
      galleryImage5
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
