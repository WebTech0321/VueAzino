<template>
  <div class="client-carousel pt-120 pb-120" :class="extraClass">
    <v-container>
      <swiper :options="brandCarouselOptions">
        <swiper-slide>
          <img :src="brandImage" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="brandImage" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="brandImage" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="brandImage" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="brandImage" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="brandImage" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="brandImage" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="brandImage" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="brandImage" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="brandImage" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img :src="brandImage" alt="" />
        </swiper-slide>
      </swiper>
    </v-container>
  </div>
</template>

<script>
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
