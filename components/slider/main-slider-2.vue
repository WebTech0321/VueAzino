<template>
  <section class="main-slider main-slider__two">
    <swiper :options="mainSlideOptions">
      <swiper-slide>
        <div
          class="image-layer"
          :style="{backgroundImage: 'url('+banner1+')'}"
        ></div>

        <v-container>
          <v-row class=" justify-start">
            <v-col xl="6" lg="12" class="text-left">
              <h2>
                Donat<span>i</span>on <br /> Can Change <br /> Someone’s Life
              </h2>
              <p>Make a difference in families lives with just $5 a Month</p>
              <a
                href="#"
                data-target=".donate-options"
                class="scroll-to-target thm-btn dynamic-radius"
              >
                Start Donating
              </a>
            </v-col>
          </v-row>
        </v-container>
      </swiper-slide>
      <swiper-slide>
        <div
          class="image-layer"
          :style="{backgroundImage: 'url('+banner2+')'}"
        ></div>

        <v-container>
          <v-row class=" justify-start">
            <v-col xl="6" lg="12" class="text-left">
              <h2>
                Donat<span>i</span>on <br /> Can Change <br /> Someone’s Life
              </h2>
              <p>Make a difference in families lives with just $5 a Month</p>
              <a
                href="#"
                data-target=".donate-options"
                class="scroll-to-target thm-btn dynamic-radius"
              >
                Start Donating
              </a>
            </v-col>
          </v-row>
        </v-container>
      </swiper-slide>
      <swiper-slide>
        <div
          class="image-layer"
          :style="{backgroundImage: 'url('+banner1+')'}"
        ></div>

        <v-container>
          <v-row class="justify-start">
            <v-col xl="6" lg="12" class="text-left">
              <h2>
                Donat<span>i</span>on <br /> Can Change <br /> Someone’s Life
              </h2>
              <p>Make a difference in families lives with just $5 a Month</p>
              <a
                href="#"
                data-target=".donate-options"
                class="scroll-to-target thm-btn dynamic-radius"
              >
                Start Donating
              </a>
            </v-col>
          </v-row>
        </v-container>
      </swiper-slide>
      <div class="swiper-pagination" id="main-slider-pagination"></div>
    </swiper>
  </section>
</template>

<script>
import banner1 from '../../assets/images/main-slider/slider-2-1.jpg'
import banner2 from '../../assets/images/main-slider/slider-1-2.jpg'

const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  pagination: {
    el: '#main-slider-pagination',
    type: 'bullets',
    clickable: true
  },
  autoplay: {
    delay: 5000
  }
}
export default {
  name: 'MainSliderTwo',
  components: {
  },

  data () {
    return ({
      mainSlideOptions,
      banner1,
      banner2
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
