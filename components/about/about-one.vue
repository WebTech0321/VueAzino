<template>
  <section class="about-one pt-120 pb-40">
    <v-container>
      <v-row>
        <div class="about-one__award">
          <img :src="about1" alt="" />
        </div>
        <v-col lg="6">
          <img :src="about2" alt="" class="img-fluid" />
        </v-col>
        <v-col lg="6">
          <img :src="about3" alt="" class="img-fluid" />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <div class="team-about__top mt-60">
        <v-row>
          <v-col md="12" lg="4">
            <div class="block-title">
              <p>
                <img :src="heart" width="15" alt="" />
                Make a Difference
              </p>
              <h3>Let’s help them together.</h3>
            </div>
          </v-col>
          <v-col md="12" lg="4">
            <p class="team-about__top-text">
              Tincidunt elit magnis nulla facilisis sagittis is maecenas.
              Sapien nunced amet ultrices, dolores sit ipsum velit purus
              aliquet, massa fringilla leo orci ipsum dolor sit.
            </p>
          </v-col>
          <v-col md="12" lg="4">
            <p class="team-about__top-text">
              Sapien nunced amet ultrices, dolores sit ipsum velit purus
              aliquet, massa fringilla leo orci. Lorem ipsum dolor sit amet.
              consectetur adipisi cing elit dolo.
            </p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
import about1 from '../../assets/images/shapes/about-bag-1-1.png'
import about2 from '../../assets/images/resources/about-1-1.jpg'
import about3 from '../../assets/images/resources/about-1-2.jpg'
import heart from '../../assets/images/shapes/heart-2-1.png'

export default {
  name: 'AboutOne',
  data () {
    return ({
      about1,
      about2,
      about3,
      heart
    })
  }
}
</script>

<style>
</style>
