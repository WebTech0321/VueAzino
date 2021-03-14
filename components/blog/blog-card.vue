<template>
  <div class="blog-card">
    <div class="blog-card__inner">
      <div class="blog-card__image">
        <img :src="image" alt="" />
        <div class="blog-card__date">{{date}}</div>
      </div>
      <div class="blog-card__content">
        <div class="blog-card__meta">
          <nuxt-link :to="link">
            <i class="far fa-user-circle"></i> {{author}}
          </nuxt-link>
          <nuxt-link :to="link">
            <i class="far fa-comments"></i> {{commentCount}}
          </nuxt-link>
        </div>
        <h3>
          <nuxt-link :to="link">
            {{title}}
          </nuxt-link>
        </h3>
        <p>{{text}}</p>
        <nuxt-link :to="link" class="blog-card__more">
          <i class="far fa-angle-right"></i>Read More
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: ['image', 'title', 'date', 'text', 'link', 'commentCount', 'author'],
  components: {
  },

  data () {
    return ({
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
