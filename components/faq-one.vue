<template>
  <section class="faq-one pt-120">
    <v-container>
      <v-row>
        <v-col lg="6">
          <div class="faq-one__content">
            <div class="block-title">
              <p>
                <img :src="heart" width="15" alt="" />
                Help People Now
              </p>
              <h3>
                Charity for the people <br /> you care about.
              </h3>
            </div>
            <v-expansion-panels id="accordion" accordion multiple>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2 class="para-title">
                    Make a difference in their life
                  </h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>
                    There are many variations of passages the majority have
                    suffered alteration in some fo injected humour, or
                    randomised words believable.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2 class="para-title">
                    Make a difference in their life
                  </h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>
                    There are many variations of passages the majority have
                    suffered alteration in some fo injected humour, or
                    randomised words believable.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h2 class="para-title">
                    Make a difference in their life
                  </h2>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>
                    There are many variations of passages the majority have
                    suffered alteration in some fo injected humour, or
                    randomised words believable.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
        <v-col lg="6">
          <div class="about-counter__image clearfix">
            <div class="about-counter__image-content">
              <img :src="heart1" alt="" />
              <p>We’re here to support you every step of the way.</p>
            </div>
            <img :src="faqImage" alt="" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import heart from '../assets/images/shapes/heart-2-1.png'
import heart1 from '../assets/images/shapes/about-count-heart-1-1.png'
import faqImage from '../assets/images/resources/faq-box-1-1.jpg'

export default {
  name: 'FaqOne',
  components: {
  },

  data () {
    return ({
      heart,
      heart1,
      faqImage
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
