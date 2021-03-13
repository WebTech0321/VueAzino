<template>
  <section class="about-two pt-120 pb-120">
    <v-container>
      <v-row>
        <v-col xl="6">
          <div class="about-two__image">
            <img :src="welcomeImage" alt="" />
            <div class="about-two__award">
              <img :src="aboutImage" alt="" />
            </div>
          </div>
        </v-col>
        <v-col xl="6">
          <div class="about-two__content">
            <div class="block-title">
              <p>
                <img :src="heart" width="15" alt="" /> About Azino Platform
              </p>
              <h3>Welcome to non-profit charity organization.</h3>
            </div>
            <p class="mb-40 pr-10">
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
              sed do eiusmod tempor incididunt simply free ut labore et dolore
              magna aliqua simhy adndnh qkhhn.
            </p>
            <v-row>
              <v-col md="6">
                <div class="about-two__box">
                  <h3>
                    <i class="azino-icon-confirmation"></i> Become a
                    Volunteer
                  </h3>
                  <p>
                    Lorem ipsum dolor sit ametelit sed consectetur notted.
                  </p>
                </div>
                <div class="about-two__box">
                  <h3>
                    <i class="azino-icon-confirmation"></i> Quick
                    Fundraising
                  </h3>
                  <p>
                    Lorem ipsum dolor sit ametelit sed consectetur notted.
                  </p>
                </div>
              </v-col>
              <v-col md="6">
                <div class="about-two__box-two">
                  <i class="azino-icon-support"></i>
                  <h3>You can make a big difference in someone’s life.</h3>
                </div>
              </v-col>
            </v-row>
            <NuxtLink to="/about">
              <a class="thm-btn dynamic-radius">Discover More</a>
            </NuxtLink>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

import heart from '../../assets/images/shapes/heart-2-1.png'
import welcomeImage from '../../assets/images/resources/welcome-1-1.png'
import aboutImage from '../../assets/images/shapes/about-bag-1-2.png'

export default {
  name: 'AboutTwo',
  data () {
    return ({
      welcomeImage,
      aboutImage,
      heart
    })
  }
}
</script>

<style>
</style>
