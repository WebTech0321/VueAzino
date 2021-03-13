<template>
  <section class="call-to-action-two">
    <div
      class="call-to-action-two__bg"
      :style="{backgroundImage: 'url('+bgImage+')'}"
    ></div>
    <v-container class="pt-80 pb-80">
      <i class="azino-icon-charity call-to-action-two__icon"></i>
      <v-row class=" align-center">
        <v-col lg="7">
          <div class="block-title">
            <p>
              <img :src="HeartImage" width="15" alt="" />
              Help Other People
            </p>
            <h3>Our fingerprints on <br /> the lives we touch <br /> never fade.</h3>
          </div>
        </v-col>
        <v-col
          lg="5"
          class=" d-flex justify-start justify-lg-end"
        >
          <div class="btn-wrap">
            <nuxt-link to="#" class="scroll-to-target thm-btn">
              Start Donating
            </nuxt-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import bgImage from '../../assets/images/backgrounds/page-header-1-1.jpg'
import HeartImage from '../../assets/images/shapes/heart-2-1.png'
export default {
  name: 'CallToActionTwo',
  data () {
    return ({
      bgImage,
      HeartImage
    })
  }
}
</script>
