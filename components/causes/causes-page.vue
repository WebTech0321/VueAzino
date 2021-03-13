<template>
  <section class="causes-page pt-120 pb-120">
    <v-container>
      <div class="causes-col__3">
        <div v-for="(cause, index) in CAUSES_DATA" class="cause-card" :key="'cause-card-key-' +index">
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
                <nuxt-link :to="cause.link">
                  {{cause.title}}
                </nuxt-link>
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
      </div>
      <PostPaginations />
    </v-container>
  </section>
</template>

<script>
import causeImage1 from '../../assets/images/causes/cause-1-1.jpg'
import causeImage2 from '../../assets/images/causes/cause-1-2.jpg'
import causeImage3 from '../../assets/images/causes/cause-1-3.jpg'
import causeImage4 from '../../assets/images/causes/cause-1-4.jpg'
import causeImage5 from '../../assets/images/causes/cause-1-5.jpg'
import causeImage6 from '../../assets/images/causes/cause-1-6.jpg'
import PostPaginations from '../post-paginations'
const CAUSES_DATA = [
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
  },
  {
    image: causeImage4,
    progressCount: 23,
    raised: '25,270',
    goal: '30,000',
    title: 'Our donation is hope for poor childrens',
    text: 'Lorem Ipsum simply dummy text of printng and type industry.',
    link: '/cause-details'
  },
  {
    image: causeImage5,
    progressCount: 65,
    raised: '25,270',
    goal: '30,000',
    title: 'Education for Poor Children',
    text: 'Lorem Ipsum simply dummy text of printng and type industry.',
    link: '/cause-details'
  },
  {
    image: causeImage6,
    progressCount: 55,
    raised: '25,270',
    goal: '30,000',
    title: 'Promoting The Rights of Children',
    text: 'Lorem Ipsum simply dummy text of printng and type industry.',
    link: '/cause-details'
  }
];
export default {
  name: 'CausesPage',
  components: {
    PostPaginations
  },

  data () {
    return ({
      CAUSES_DATA
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
