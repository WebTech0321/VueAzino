<template>
  <section class="news-page news-home pt-120 pb-120">
    <v-container>
      <v-row class="align-start align-md-center flex-column flex-md-row mb-60">
        <v-col lg="7">
          <BlockTitle
            title="Latest news & articles <br/> directly from the blog."
            tagLine="Blog Posts"
          />
        </v-col>
        <v-col lg="5" class="d-flex">
          <div class="my-auto">
            <p class="block-text pr-10 mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Have you done google research which works all the
              time.
            </p>
          </div>
        </v-col>
      </v-row>
      <div v-swiper="blogCarouselOptions">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(blog, index) in BLOG_DATA" :key="index">
            <BlogCard
              :image="blog.image"
              :title="blog.title"
              :date="blog.date"
              :text="blog.text"
              :link="blog.link"
              :commentCount="blog.commentCount"
              :author="blog.author"
            />
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import blogImage1 from '../../assets/images/blog/blog-1-1.jpg'
import blogImage2 from '../../assets/images/blog/blog-1-2.jpg'
import blogImage3 from '../../assets/images/blog/blog-1-3.jpg'
import BlockTitle from '../block-title'
import BlogCard from './blog-card'

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

const BLOG_DATA = [
  {
    image: blogImage1,
    title: 'Our donation is hope for poor childrens',
    date: '20 May',
    text: 'Lorem ipsum is simply free text used by copytyping refreshing.',
    link: '/news-details',
    commentCount: '2 Comments',
    author: 'Admin'
  },
  {
    image: blogImage2,
    title: 'Our donation is hope for poor childrens',
    date: '20 May',
    text: 'Lorem ipsum is simply free text used by copytyping refreshing.',
    link: '/news-details',
    commentCount: '2 Comments',
    author: 'Admin'
  },
  {
    image: blogImage3,
    title: 'Our donation is hope for poor childrens',
    date: '20 May',
    text: 'Lorem ipsum is simply free text used by copytyping refreshing.',
    link: '/news-details',
    commentCount: '2 Comments',
    author: 'Admin'
  }
]
export default {
  name: 'BlogHome',
  components: {
    BlockTitle,
    BlogCard
  },

  data () {
    return ({
      blogCarouselOptions,
      BLOG_DATA
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
