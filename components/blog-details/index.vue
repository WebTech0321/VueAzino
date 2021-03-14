<template>
  <section class="blog-details pt-120 pb-40">
    <v-container>
      <v-row>
        <v-col md="12" lg="8">
          <BlogContent />
          <Comments />
          <CommentForm />
        </v-col>
        <v-col md="12" lg="4">
          <BlogSidebar />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import BlogContent from './blog-content'
import Comments from './comments'
import CommentForm from './comment-form'
import BlogSidebar from './blog-sidebar'
export default {
  name: 'BlogDetails',
  components: {
    BlogContent,
    Comments,
    CommentForm,
    BlogSidebar
  }
}
</script>

<style>
</style>
