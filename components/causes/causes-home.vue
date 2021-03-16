<template>
  <section class="causes-page causes-home pt-120 pb-120">
    <v-container>
      <v-row class=" align-start align-md-center flex-column flex-md-row mb-60">
        <v-col lg="7">
          <div class="block-title">
            <p>
              <img :src="heartImage" width="15" alt="" />
              Popular Causes
            </p>
            <h3>Donate to charity causes <br> around the world.</h3>
          </div>
        </v-col>
        <v-col lg="5" class=" d-flex">
          <div class="my-auto">
            <p class="block-text pr-10 mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Have you done google research which works all the
              time.
            </p>
          </div>
        </v-col>
      </v-row>
      <swiper :options="swiperParams">
        <swiper-slide v-for="(cause, index) in CausesHomeData" :key="'cause-card-key-' + index">
          <div class="cause-card">
            <div class="cause-card__inner">
              <div class="cause-card__image">
                <img :src="cause.image" alt="" />
              </div>
              <div class="cause-card__content">
                <div class="cause-card__top">
                  <div class="cause-card__progress">
                    <span
                      :style="{width: cause.progressCount + '%'}"
                      class="wow cardProgress"
                      data-wow-duration="1500ms"
                    >
                      <b>
                        <i>{{cause.progressCount}}</i>%
                      </b>
                    </span>
                  </div>
                  <div class="cause-card__goals">
                    <p>
                      <strong>Raised:</strong> ${{cause.raised}}
                    </p>
                    <p>
                      <strong>Goal:</strong> ${{cause.goal}}
                    </p>
                  </div>
                </div>
                <h3>
                  <nuxt-link :to="cause.link">{{cause.title}}</nuxt-link>
                </h3>
                <p>{{cause.text}}</p>
                <div class="cause-card__bottom">
                  <nuxt-link :to="cause.link" class="thm-btn ">
                    Donate Now
                  </nuxt-link>
                  <nuxt-link to="#" class="cause-card__share" aria-label="share postr">
                    <i class="azino-icon-share"></i>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </v-container>
  </section>
</template>

<script>
import heartImage from '../../assets/images/shapes/heart-2-1.png'
import causeImage1 from '../../assets/images/causes/cause-1-1.jpg'
import causeImage2 from '../../assets/images/causes/cause-1-4.jpg'
import causeImage3 from '../../assets/images/causes/cause-1-3.jpg'

const CausesHomeData = [
  {
    image: causeImage1,
    progressCount: 23,
    raised: '25,270',
    goal: '30,000',
    title: 'Our donation is hope for poor childrens',
    text: 'Lorem Ipsum simply dummy text of printng and type industry.',
    link: '/cause-details'
  },
  {
    image: causeImage2,
    progressCount: 65,
    raised: '25,270',
    goal: '30,000',
    title: 'Education for Poor Children',
    text: 'Lorem Ipsum simply dummy text of printng and type industry.',
    link: '/cause-details'
  },
  {
    image: causeImage3,
    progressCount: 55,
    raised: '25,270',
    goal: '30,000',
    title: 'Promoting The Rights of Children',
    text: 'Lorem Ipsum simply dummy text of printng and type industry.',
    link: '/cause-details'
  }
]
const swiperParams = {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
}
export default {
  name: 'CausesHome',
  components: {
  },

  data () {
    return ({
      CausesHomeData,
      swiperParams,
      heartImage
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
