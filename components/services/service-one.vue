<template>
  <section
    class="service-one pt-120 pb-90"
    :style="{backgroundImage: 'url(' + serviceBg + ')' }"
  >
    <v-container>
      <img :src="serviceLine" alt="" class="service-one__shape-1" />
      <div class="block-title">
        <p>
          <img :src="blockTitleHeart" width="15" alt="" />
          Welcome to Azino Charity
        </p>
        <h3>We believe that we can save <br> more lifes with you.</h3>
      </div>
      <v-row>
        <v-col v-for="(service, index) in serviceOneData" md="6" lg="3" :key="'service-one-key-' + index">
          <div class="service-one__box">
            <div class="service-one__icon" :class="service.extraClassName">
              <div class="service-one__icon-inner">
                <i :class="service.icon"></i>
              </div>
            </div>
            <h3>
              <nuxt-link :to="service.link">{{service.title}}</nuxt-link>
            </h3>
            <p>{{service.text}}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import serviceBg from '../../assets/images/backgrounds/service-hand-bg-1-1.png'
import serviceLine from '../../assets/images/shapes/service-line-1-1.png'
import blockTitleHeart from '../../assets/images/shapes/heart-2-1.png'

const serviceOneData = [
  {
    icon: 'azino-icon-water-bottle',
    extraClassName: 'background-secondary',
    title: 'Water',
    text: 'Lorem ipsum is simply free text available in the market wesbites.',
    link: '#'
  },
  {
    icon: 'azino-icon-hamburger',
    title: 'Food',
    extraClassName: 'background-base',
    text: 'Lorem ipsum is simply free text available in the market wesbites.',
    link: '#'
  },
  {
    icon: 'azino-icon-reading-book',
    title: 'Education',
    text: 'Lorem ipsum is simply free text available in the market wesbites.',
    link: '#',
    extraClassName: 'background-primary'
  },
  {
    icon: 'azino-icon-stethoscope',
    title: 'Medical',
    extraClassName: 'background-special',
    text: 'Lorem ipsum is simply free text available in the market wesbites.',
    link: '#'
  }
]

export default {
  name: 'ServiceOne',
  components: {
  },

  data () {
    return ({
      serviceBg,
      serviceLine,
      blockTitleHeart,
      serviceOneData
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
