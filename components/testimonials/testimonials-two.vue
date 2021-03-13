<template>
  <section class="testimonials-two">
    <v-container>
      <div class="team-about__top">
        <v-row class="align-center">
          <v-col md="12" lg="7">
            <BlockTitle
              title="What they are talking <br/> about azino."
              tagLine="Our Testimonials"
            />
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
      <swiper
        :options="testimonialsThumbOptions"
        id="testimonials-two__thumb"
        :onSwiper="setThumbsSwiper"
      >
        <swiper-slide v-for="(testimonial, index) in TESTIMONIALS_DATA" :key="index">
          <img :src="testimonial.image" :alt="testimonial.name" />
        </swiper-slide>
      </swiper>
      <swiper
        :options="testimonialsOptions"
        id="testimonials-two__carousel"
        :thumbs="{swiper: thumbsSwiper}"
      >
        <swiper-slide v-for="(testimonial, index) in TESTIMONIALS_DATA" :key="index">
          <p>{{testimonial.text}}</p>
          <div class="testimonials-two__meta">
            <h3>{{testimonial.name}}</h3>
            <span>{{testimonial.designation}}</span>
          </div>
        </swiper-slide>
      </swiper>
    </v-container>
  </section>
</template>

<script>
import BlockTitle from '../block-title'
import testimonialImage1 from '../../assets/images/resources/testimonial-2-1.jpg'
import testimonialImage2 from '../../assets/images/resources/testimonial-2-2.jpg'
import testimonialImage3 from '../../assets/images/resources/testimonial-2-3.jpg'

const TESTIMONIALS_DATA = [
  {
    image: testimonialImage1,
    name: 'Christine Rose',
    designation: 'Customer',
    text:
      'This is due to their excellent service, competitive pricing and \n customer support. It’s throughly refresing to get such a \n personal touch.'
  },
  {
    image: testimonialImage2,
    name: 'Christine Rose',
    designation: 'Customer',
    text:
      'This is due to their excellent service, competitive pricing and \n customer support. It’s throughly refresing to get such a \n personal touch.'
  },
  {
    image: testimonialImage3,
    name: 'Christine Rose',
    designation: 'Customer',
    text:
      'This is due to their excellent service, competitive pricing and \n customer support. It’s throughly refresing to get such a \n personal touch.'
  }
]

export default {
  name: 'TestimonialsTwo',
  components: {
    BlockTitle
  },

  data () {
    return ({
      thumbsSwiper: 0,
      TESTIMONIALS_DATA,
      testimonialsThumbOptions: {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1400,
        autoplay: {
          delay: 5000
        }
      },
      testimonialsOptions: {
        speed: 1400,
        mousewheel: true,
        slidesPerView: 1,
        autoplay: {
          delay: 5000
        }
      }
    })
  },

  methods: {
    setThumbsSwiper (val) {
      this.thumbsSwiper = val
    }
  }
}
</script>

<style>
</style>
