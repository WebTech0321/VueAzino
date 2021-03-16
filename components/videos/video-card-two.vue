<template>
  <section class="video-card-two">
    <ModalVideo
      channel="youtube"
      autoplay
      :is-open="isOpen"
      video-idd="L61p2uyiMSo"
      :on-close="onCloseModal"
    />
    <v-container>
      <div
        class="inner-container"
        :style="{backgroundImage: 'url('+videoBg+')'}"
      >
        <v-row class="align-center">
          <v-col lg="3">
            <div class="video-card-two__box">
              <img :src="videoImage" alt="">
              <span
                class="video-card-two__box-btn video-popup"
                @click="onOpenModal"
              >
                <i class="fa fa-play" />
              </span>
            </div>
          </v-col>
          <v-col lg="4">
            <h3>We’re worldwide non-profit charity ogranization.</h3>
          </v-col>
          <v-col lg="5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Have you done google research which works all the
              time.
            </p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
import videoBg from '../../assets/images/shapes/video-bg-1-1.png'
import videoImage from '../../assets/images/resources/video-1-1.png'

import ModalVideo from './modal-video'

export default {
  name: 'VideoCardTwo',
  components: {
    ModalVideo
  },

  data () {
    return ({
      videoBg,
      videoImage,
      isOpen: false
    })
  },

  methods: {
    onOpenModal () {
      this.isOpen = true
    },
    onCloseModal () {
      this.isOpen = false
    }
  }
}
</script>

<style>
</style>
