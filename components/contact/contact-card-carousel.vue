<template>
  <div class="contact-card-carousel ">
    <div class="container">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <div
            class="contact-card d-flex flex-column text-center justify-center align-center background-secondary"
            :style="{backgroundImage: 'url('+cardBg+')'}"
          >
            <i aria-label="contact icon" class="azino-icon-family"></i>
            <h3>About</h3>
            <p>
              Lorem ipsum is simply free text <br /> dolor sit amet,
              consectetur <br /> adipiscing ullam blandit
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="contact-card d-flex flex-column text-center justify-center align-center background-primary"
            :style="{backgroundImage: 'url('+cardBg+')'}"
          >
            <i aria-label="contact icon" class="azino-icon-address"></i>
            <h3>Address</h3>
            <p>
              88 Broklyn Golden Street, <br /> New York. United States of <br /> America.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="contact-card d-flex flex-column text-center justify-center align-center background-special"
            :style="{backgroundImage: 'url('+cardBg+')'}"
          >
            <i aria-label="contact icon" class="azino-icon-contact"></i>
            <h3>Contact</h3>
            <p>
              <a href="mailto:">needhelp@azino.com</a> <br />
              <a href="tel:666-888-0000">666 888 0000</a>
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import cardBg from '../../assets/images/shapes/contact-card-bg-1-1.png'

const swiperOptions = {
  spaceBetween: 30,
  slidesPerView: 3,
  breakpoints: {
    0: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    480: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    767: {
      spaceBetween: 30,
      slidesPerView: 2
    },
    1199: {
      spaceBetween: 30,
      slidesPerView: 3
    }
  }
}
export default {
  name: 'ContactCardCarousel',
  components: {
  },

  data () {
    return ({
      cardBg,
      swiperOptions
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
