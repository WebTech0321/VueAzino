<template>
  <section
      class="testimonials-one pt-120 pb-90"
      :style="{backgroundImage: 'url(' + bgImage + ')'}"
    >
    <v-container>
      <div class="team-about__top">
        <v-row class=" align-items-center">
          <v-col md="12" lg="7">
            <div class="block-title">
              <p>
                <img :src="heart" width="15" alt="" />
                Our Testimonials
              </p>
              <h3>
                What they are talking <br /> about azino.
              </h3>
            </div>
          </v-col>
          <v-col md="12" lg="5">
            <p class="team-about__top-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Have you done google research which works all the
              time.
            </p>
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col v-for="(testimonial, index) in TESTIMONIALS_ONE_DATA" lg="4" :key="testimonialKey(index)">
          <div class="testimonials-one__single">
            <div class="testimonials-one__image">
              <img :src="testimonial.image" alt="" />
            </div>
            <p>{{testimonial.text}}</p>
            <h3>{{testimonial.name}}</h3>
            <span>{{testimonial.designation}}</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import bgImage from '../../assets/images/shapes/testimonials-map-1-1.png'
import heart from '../../assets/images/shapes/heart-2-1.png'
import image1 from '../../assets/images/resources/testimonial-1-1.jpg'
import image2 from '../../assets/images/resources/testimonial-1-2.jpg'
import image3 from '../../assets/images/resources/testimonial-1-3.jpg'

const TESTIMONIALS_ONE_DATA = [
  {
    image: image1,
    text:
      'There are many variations of passages of lorsum available but the majority have suffered alteration in form, by injected not humour.',
    name: 'Alex Cooper',
    designation: 'Customer'
  },
  {
    image: image2,
    text:
      'There are many variations of passages of lorsum available but the majority have suffered alteration in form, by injected not humour.',
    name: 'Alex Cooper',
    designation: 'Customer'
  },
  {
    image: image3,
    text:
      'There are many variations of passages of lorsum available but the majority have suffered alteration in form, by injected not humour.',
    name: 'Alex Cooper',
    designation: 'Customer'
  }
]

export default {
  name: 'TestimonialsOne',
  components: {
  },

  data () {
    return ({
      bgImage,
      heart,
      TESTIMONIALS_ONE_DATA
    })
  },

  methods: {
    testimonialKey (index) {
      return 'testimonials-post-key-' + index
    }
  }
}
</script>

<style>
</style>
