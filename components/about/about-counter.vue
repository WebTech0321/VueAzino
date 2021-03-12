<template>
  <section class="about-counter pt-120">
    <div class="container">
      <v-row>
        <v-col lg="6">
          <div class="block-title">
            <p>
              <img :src="heartImage" width="15" alt=""/>
              Help People Now
            </p>
            <h3>Charity for the people <br />you care about.</h3>
          </div>
          <p class="about-counter__text">
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Have you done google research which <br />
            works all the time.
          </p>
          <ul class="list-unstyled ul-list-one">
            <li>Nsectetur cing elit.</li>
            <li>Suspe ndisse suscipit sagittis leo.</li>
            <li>Entum estibulum dignissim posuere.</li>
          </ul>
          <div class="about-counter__count">
            <h3 class="odometer">
              <VisibilitySensor
                    @change="onVisibilityChange"
                    :offset="{top:10}"
                    :delayedCall="true"
                  >
                <ICountUp :endVal="startCounter ? 8860 : 0" />
              </VisibilitySensor>
            </h3>
            <p>
              Donation campaigns <br /> are running
            </p>
          </div>
        </v-col>
        <v-col lg="6">
          <div class="about-counter__image clearfix">
            <div class="about-counter__image-content">
              <img :src="aboutHeart" alt="" />
              <p>We’re here to support you every step of the way.</p>
            </div>
            <img :src="aboutImage" alt="" class="float-left" />
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import VisibilitySensor from 'vue-visibility-sensor'
import ICountUp from 'vue-countup-v2'
import heartImage from '../../assets/images/shapes/heart-2-1.png'
import aboutImage from '../../assets/images/resources/about-counter-1-1.jpg'
import aboutHeart from '../../assets/images/shapes/about-count-heart-1-1.png'

export default {
  name: 'AboutCounter',
  components: {
    VisibilitySensor,
    ICountUp
  },

  data () {
    return ({
      startCounter: false,
      heartImage,
      aboutImage,
      aboutHeart
    })
  },

  methods: {
    onVisibilityChange (isVisible) {
      if (isVisible) {
        this.startCounter = true
      }
    }
  }
}
</script>

<style>
</style>
