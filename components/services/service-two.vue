<template>
  <section class="service-two">
    <v-container>
      <swiper :options="sliderOptions">
        <swiper-slide v-for="(service, index) in SERVICE_TWO_DATA" :key="'service-two-key-' + index">
          <div
            class="service-two__box"
            :class="service.extraClassName"
            :style="{backgroundImage: 'url(' + service.image + ')' }"
          >
            <div class="service-two__box-inner">
              <img :src="heart" width="15" alt="" />
              <p>{service.text}</p>
              <h3>
                <nuxt-link :to="service.link">
                  {{service.title}}
                </nuxt-link>
              </h3>
              <nuxt-link :to="service.link" class="service-two__box-link">
                <i class="far fa-angle-right"></i>
              </nuxt-link>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </v-container>
  </section>
</template>

<script>
import image1 from '../../assets/images/resources/service-1-1.jpg'
import image2 from '../../assets/images/resources/service-1-2.jpg'
import image3 from '../../assets/images/resources/service-1-3.jpg'
import heart from '../../assets/images/shapes/heart-2-2.png'

const SERVICE_TWO_DATA = [
  {
    extraClassName: 'background-primary',
    image: image1,
    title: 'More charity better lives',
    text: 'Start Donating',
    link: '#'
  },
  {
    extraClassName: 'ackground-secondary',
    image: image2,
    title: 'Join our volunteers',
    text: 'Let’s Join',
    link: '#'
  },
  {
    extraClassName: 'background-base',
    image: image3,
    title: 'Poor childs education',
    text: 'Quick Funding',
    link: '#'
  }
]
const sliderOptions = {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
}

export default {
  name: 'ServiceTwo',
  components: {
  },

  data () {
    return ({
      heart,
      sliderOptions,
      SERVICE_TWO_DATA
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
