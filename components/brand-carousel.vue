<template>
  <div class="client-carousel pt-120 pb-120" :class="extraClass">
    <div class="container">
      <!--<Swiper {...brandCarouselOptions}>
        <div class="swiper-wrapper">
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img :src="brandImage" alt="" />
          </SwiperSlide>
        </div>
      </Swiper>-->
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'swiper/vue'
import brandImage from '../assets/images/resources/brand-1-1.png'

const brandCarouselOptions = {
  spaceBetween: 100,
  slidesPerView: 5,
  autoplay: { delay: 5000 },
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 2
    },
    375: {
      spaceBetween: 30,
      slidesPerView: 2
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 3
    },
    767: {
      spaceBetween: 50,
      slidesPerView: 4
    },
    991: {
      spaceBetween: 50,
      slidesPerView: 5
    },
    1199: {
      spaceBetween: 100,
      slidesPerView: 5
    }
  }
}

export default {
  name: 'BrandCarousel',
  props: ['extraClass'],
  components: {
    // Swiper,
    // SwiperSlide
  },
  data () {
    return ({
      brandCarouselOptions,
      brandImage
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
