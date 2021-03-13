<template>
  <section class="video-card">
    <ModalVideo
      channel="youtube"
      autoplay
      :isOpen="isOpen"
      videoId="L61p2uyiMSo"
      :onClose="onCloseModal"
    />
    <div
      class="video-card__bg"
      :style="{backgroundImage: 'url('+bgImage+')'}"
    ></div>

    <v-container class=" text-center pt-120 pb-120">
      <p>
        <img :src="heart" width="15" alt="" />
        Help Other People
      </p>
      <h3>
        Our fingerprints on the <br />
        lives we touch never fade.
      </h3>
      <div class="video-card__btn-block">
        <nuxt-link to="/cause-details" class="thm-btn dynamic-radius">
          Start Donating
        </nuxt-link>

        <span
          @click="onOpenModal"
          class="video-popup video-card__btn"
        >
          <i class="fa fa-play"></i>
        </span>
      </div>
    </v-container>
  </section>
</template>

<script>
import bgImage from '../../assets/images/backgrounds/page-header-1-1.jpg'
import heart from '../../assets/images/shapes/heart-2-1.png'

import ModalVideo from './modal-video'

export default {
  name: 'VideoCard',
  components: {
    ModalVideo
  },

  data () {
    return ({
      isOpen: false,
      bgImage,
      heart
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
