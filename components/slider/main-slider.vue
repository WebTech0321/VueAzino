<template>
  <section class="main-slider">
    <swiper :options="mainSlideOptions">
      <swiper-slide>
        <div
          class="image-layer"
          :style="{backgroundImage: 'url(' + banner1 + ')' }"
        ></div>

        <v-container>
          <v-row class="row justify-end">
            <v-col xl="7" lg="12" class="text-right">
              <p>Help the poor in need</p>
              <h2>
                Lend the <br /> helping hand <br /> get involved.
              </h2>
              <a
                href="#"
                data-target=".donate-options"
                class="scroll-to-target thm-btn"
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
          :style="{backgroundImage: 'url(' + banner2 + ')' }"
        ></div>

        <v-container>
          <v-row class="row justify-end">
            <v-col xl="8" lg="12" class="text-right">
              <p>Help the poor in need</p>
              <h2>
                Donat<span class="iconic-text">i</span>on <br /> Can Change <br /> Life
              </h2>
              <a
                href="#"
                data-target=".donate-options"
                class="scroll-to-target thm-btn "
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
          :style="{backgroundImage: 'url(' + banner1 + ')' }"
        ></div>

        <v-container>
          <v-row class="justify-end">
            <v-col lg="7" class=" text-right">
              <p>Help the poor in need</p>
              <h2>
                Lend the <br /> helping hand <br /> get involved.
              </h2>
              <a
                href="#"
                data-target=".donate-options"
                class="scroll-to-target thm-btn "
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
// import banner1 from '../../assets/images/main-slider/slider-1-1.jpg'
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
  components: {
  },

  data () {
    return ({
      mainSlideOptions,
      banner1: require('~/assets/images/main-slider/slider-1-1.jpg'),
      banner2
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
