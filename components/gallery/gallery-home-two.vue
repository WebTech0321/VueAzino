<template>
  <section class="gallery-home-two pt-120 pb-120">
    <v-container>
      <img :src="galleryDot" alt="" class="gallery-home-two__dots" />
      <Swiper :options="sliderOptions">
        <SwiperSlide>
          <GalleryCard :image="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard :image="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard :image="image3" />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard :image="image4" />
        </SwiperSlide>
      </Swiper>
    </v-container>
  </section>
</template>

<script>
import GalleryCard from './gallery-card'
import galleryDot from '../../assets/images/shapes/gallery-dot-1-1.png'
import image1 from '../../assets/images/gallery/gallery-2-1.jpg'
import image2 from '../../assets/images/gallery/gallery-2-2.jpg'
import image3 from '../../assets/images/gallery/gallery-2-3.jpg'
import image4 from '../../assets/images/gallery/gallery-2-4.jpg'

const sliderOptions = {
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
      slidesPerView: 3
    },
    991: {
      spaceBetween: 30,
      slidesPerView: 3
    },
    1199: {
      spaceBetween: 30,
      slidesPerView: 4
    }
  }
};
export default {
  name: 'GalleryHome',
  components: {
    GalleryCard
  },

  data () {
    return ({
      sliderOptions,
      galleryDot,
      image1,
      image2,
      image3,
      image4,
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
