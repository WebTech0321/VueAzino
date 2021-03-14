<template>
  <div>
    <section
      class="news__top news-home  pt-120"
      :style="{backgroundImage: 'url('+bgImage+')'}"
    >
      <v-container>
        <v-row class="align-items-start align-items-md-center flex-v-column flex-md-v-row">
          <v-col lg="7">
            <BlockTitle
              title="Latest news & articles <br/> directly from the blog."
              tagLine="Blog Posts"
            />
          </v-col>
          <v-col lg="5" class="d-flex">
            <div class="my-auto">
              <p class="block-text pr-10 mb-0">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Have you done google research which
                works all the time.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="news-page pb-120">
      <v-container>
        <swiper :options="blogCarouselOptions">
          <swiper-slide v-for="(blog,index) in BLOG_DATA" :key="index">
            <BlogCard
              :image="blog.image"
              :title="blog.title"
              :date="blog.date"
              :text="blog.text"
              :link="blog.link"
              :commentCount="blog.commentCount"
              :author="blog.author"
            />
          </swiper-slide>
        </swiper>
      </v-container>
    </section>
  </div>
</template>

<script>
const blogCarouselOptions = {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0
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
  name: 'BlogHomeTwo',
  components: {
  },

  data () {
    return ({
      blogCarouselOptions
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
