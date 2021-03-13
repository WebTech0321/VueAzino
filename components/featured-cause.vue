<template>
  <section class="featured-cause">
    <v-container>
      <div class="inner-container background-secondary ">
        <v-row>
          <v-col lg="4">
            <img :src="causeImage" class="img-fluid" alt="" />
          </v-col>
          <v-col lg="8" class=" d-flex">
            <div class="my-auto">
              <h3>Urgent help needed now </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div class="cause-card__top">
                <div class="cause-card__progress">
                  <span style="width: 85%" class=" cardProgress">
                    <b>
                      <i>85</i>%
                    </b>
                  </span>
                </div>
                <div class="cause-card__goals">
                  <p>
                    <strong>Raised:</strong> $25,270
                  </p>
                  <p>
                    <strong>Goal:</strong> $30,000
                  </p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
import causeImage from '../assets/images/resources/featured-cause.jpg'
export default {
  name: 'FeaturedCause',
  components: {
  },

  data () {
    return ({
      causeImage
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
