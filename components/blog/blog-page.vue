<template>
  <section class="news-page pt-120 pb-120">
    <v-container>
      <div class="news-3-col">
        <BlogCard
          v-for="(blog, index) in BLOG_DATA"
          :key="index"
          :image="blog.image"
          :title="blog.title"
          :date="blog.date"
          :text="blog.text"
          :link="blog.link"
          :commentCount="blog.commentCount"
          :author="blog.author"
        />
      </div>
      <PostPaginations />
    </v-container>
  </section>
</template>

<script>
import blogImage1 from '../../assets/images/blog/blog-1-1.jpg'
import blogImage2 from '../../assets/images/blog/blog-1-2.jpg'
import blogImage3 from '../../assets/images/blog/blog-1-3.jpg'
import blogImage4 from '../../assets/images/blog/blog-1-4.jpg'
import blogImage5 from '../../assets/images/blog/blog-1-5.jpg'
import blogImage6 from '../../assets/images/blog/blog-1-6.jpg'
import PostPaginations from '../post-paginations'
import BlogCard from './blog-card'

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
  },
  {
    image: blogImage4,
    title: 'Our donation is hope for poor childrens',
    date: '20 May',
    text: 'Lorem ipsum is simply free text used by copytyping refreshing.',
    link: '/news-details',
    commentCount: '2 Comments',
    author: 'Admin'
  },
  {
    image: blogImage5,
    title: 'Our donation is hope for poor childrens',
    date: '20 May',
    text: 'Lorem ipsum is simply free text used by copytyping refreshing.',
    link: '/news-details',
    commentCount: '2 Comments',
    author: 'Admin'
  },
  {
    image: blogImage6,
    title: 'Our donation is hope for poor childrens',
    date: '20 May',
    text: 'Lorem ipsum is simply free text used by copytyping refreshing.',
    link: '/news-details',
    commentCount: '2 Comments',
    author: 'Admin'
  }
]

export default {
  name: 'BlogPage',
  components: {
    PostPaginations,
    BlogCard
  },

  data () {
    return ({
      BLOG_DATA
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
